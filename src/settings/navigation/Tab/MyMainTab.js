// router.js
import React from 'react';
import {Button, View, Text, SafeAreaView, StatusBar} from 'react-native';
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
import HeaderScreen from '../Screen/HeaderScreen';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Htab = createMaterialTopTabNavigator();
import SubUpComing from '../../../pages/Live/SubPage/SubUpComing';
import SubLive from '../../../pages/Live/SubPage/SubLive';
import SubEnd from '../../../pages/Live/SubPage/SubEnd';
import SubPrevResult from '../../../pages/Live/SubPage/SubPrevResult';
import ExpertPick from '../../../pages/ExpertPick';
/**
 * * 앱 메인 화면
 */
export default function MyMainTab() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={DrawerTab}
        options={{headerStyle: {height: 0}}}
      />
      {PageScreen()}
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

function PageScreen() {
  return (
    <>
      <Stack.Screen
        name="Live/UpComing"
        component={SubUpComing}
        options={{headerTitle: '진행예정 경기'}}
      />
      <Stack.Screen
        name="Live/Live"
        component={SubLive}
        options={{headerTitle: '진행중 경기'}}
      />
      <Stack.Screen
        name="Live/End"
        component={SubEnd}
        options={{headerTitle: '종료된 경기'}}
      />
      <Stack.Screen
        name="Live/SubPrevResult"
        component={SubPrevResult}
        options={{headerTitle: '이전 경기결과'}}
      />
      <Stack.Screen
        name="ExpertPick"
        component={ExpertPick}
        options={{headerTitle: '전문가 픽'}}
      />
      <Stack.Screen
        name="MyPage"
        component={ExpertPick}
        options={{headerTitle: '마이페이지'}}
      />
    </>
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
        name="Board"
        component={BoardScreen}
        options={{
          tabBarLabel: '게시판',
          //   tabBarIcon: ({ color }) => (
          //     <MaterialCommunityIcons name="home" color={color} size={26} />
          //   ),
        }}
      />
    </Tab.Navigator>
  );
}
