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
import Live from '../../../pages/Live';
import UpComing from '../../../pages/Live/SubPage/UpComing';

//* 공통 헤더 및 Sider
import HeaderScreen from './HeaderScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Htab = createMaterialTopTabNavigator();

/**
 * * 앱 메인 화면
 */

export default function LiveScreen({navigation}) {
  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: '#001943'}} />
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <HeaderScreen navigation={navigation} />
        <Stack.Navigator
          initialRouteName="Live"
          screenOptions={{
            headerStyle: {
              width: 0,
              height: 0,
            },
          }}>
          <Stack.Screen name="Live" component={Live} />
        </Stack.Navigator>
      </SafeAreaView>
    </Fragment>
  );
}
