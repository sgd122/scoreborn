// router.js
import React from 'react';
import {Image} from 'react-native';
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
import BoardScreen from '../Screen/BoardScreen';
import Sider from '../Screen/SiderContent';
import PagesScreen from '../Screen/PagesScreen';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Htab = createMaterialTopTabNavigator();
/**
 * * 앱 메인 화면
 */
export default function MyMainTab() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={DrawerTab}
        options={{headerShown: false, headerStyle: {height: 0}}}
      />
      {PagesScreen()}
    </Stack.Navigator>
  );
}

function DrawerTab() {
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
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../../../img/bottom/LIVE_Check.png')}
                style={{height: 16.46, width: 28.8}}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('../../../img/bottom/LIVE.png')}
                style={{height: 16.46, width: 28.8}}
                resizeMode="contain"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Pick"
        component={PickScreen}
        options={{
          tabBarLabel: '픽',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../../img/bottom/Pick.png')}
              style={{height: 20.1, width: 20.1}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: '채팅',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../../img/bottom/Chat.png')}
              style={{height: 15.81, width: 15.67}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Board"
        component={BoardScreen}
        options={{
          tabBarLabel: '게시판',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../../img/bottom/Board.png')}
              style={{height: 20.1, width: 20.1}}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
