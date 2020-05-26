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
import Board from '../../../pages/Board';
import AnalysisPage from '../../../pages/Board/AnalysisPage';

//* 공통 헤더 및 Sider
import HeaderScreen from './HeaderScreen';

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

export default function LiveScreen({navigation}) {
  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: '#001943'}} />
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <HeaderScreen navigation={navigation} />
        <Htab.Navigator>
          <Htab.Screen
            name="Board"
            component={Board}
            options={{tabBarLabel: '전체'}}
          />
          <Htab.Screen
            name="Board/Analysis"
            component={Board}
            options={{tabBarLabel: '분석'}}
          />
          <Htab.Screen
            name="Board/Hit"
            component={Board}
            options={{tabBarLabel: '적중인증'}}
          />
          <Htab.Screen
            name="Board/Challenge"
            component={Board}
            options={{tabBarLabel: '도전'}}
          />
          <Htab.Screen
            name="Board/Free"
            component={Board}
            options={{tabBarLabel: '자유'}}
          />
        </Htab.Navigator>
      </SafeAreaView>
    </Fragment>
  );
}
