// router.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

//* mobx
import AuthContext, {AuthProvider} from '../AuthContext';
import {Observer, observer, inject} from 'mobx-react';

//* 공통 헤더 및 Sider
// import SplashScreen from '../../../pages/Splash/Splash';
import LiveScreen from '../Screen/LiveScreen';
import PickScreen from '../Screen/PickScreen';
import ChatScreen from '../Screen/ChatScreen';
import MarketScreen from '../Screen/MarketScreen';
import Sider from '../Screen/SiderContent';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

/**
 * * 앱 메인 화면
 */
export default function MyMainTab() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sider {...props} />}>
      <Drawer.Screen name="Main" component={MySettingsBottom} />
    </Drawer.Navigator>
  );
}

function MySettingsBottom({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Live"
      activeColor="#e91e63"
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Live"
        component={LiveScreen}
        options={{
          tabBarLabel: '라이브',
          // tabBarIcon: ({color}) => (
          //   <MaterialCommunityIcons name="home" color={color} size={26} />
          // ),
        }}
      />
      <Tab.Screen
        name="Pick"
        component={PickScreen}
        options={{
          tabBarLabel: '픽',
          //   tabBarIcon: ({ color }) => (
          //     <MaterialCommunityIcons name="home" color={color} size={26} />
          //   ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: '채팅',
          //   tabBarIcon: ({ color }) => (
          //     <MaterialCommunityIcons name="home" color={color} size={26} />
          //   ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          tabBarLabel: '마켓',
          //   tabBarIcon: ({ color }) => (
          //     <MaterialCommunityIcons name="home" color={color} size={26} />
          //   ),
        }}
      />
    </Tab.Navigator>
  );
}
