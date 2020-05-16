// router.js
import React, {useEffect, useContext, Fragment} from 'react';
import {Button, View, Text, SafeAreaView, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//* mobx
import AuthContext, {AuthProvider} from '../AuthContext';
import {Observer, observer, inject} from 'mobx-react';

// import SplashScreen from '../../../pages/Splash/Splash';
import Chat from '../../../pages/Chat';
import ChatRoomList from '../../../pages/Chat/ChatRoomList';

//* 공통 헤더 및 Sider
import HeaderScreen from './HeaderScreen';
import Sider from './SiderContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Htab = createMaterialTopTabNavigator();

const options = {
  headerStyle: {},
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

/**
 * * 앱 메인 화면
 */

export default function ChatScreen({navigation}) {
  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: '#001943'}} />
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <HeaderScreen navigation={navigation} />
        <Htab.Navigator>
          <Htab.Screen
            name="Chat/All"
            component={Chat}
            options={{tabBarLabel: '전체채팅'}}
          />
          <Htab.Screen
            name="Chat/Room"
            component={ChatRoomList}
            options={{tabBarLabel: '채팅방'}}
          />
          <Htab.Screen
            name="Chat/MyChat"
            component={Chat}
            options={{tabBarLabel: '나의채팅'}}
          />
        </Htab.Navigator>
      </SafeAreaView>
    </Fragment>
  );
}
