// router.js
import React, {useEffect, useContext, Fragment} from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
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
import Pick from '../../../pages/Pick';
import gameTab from '../../../pages/Pick/gameTab';
import likeTab from '../../../pages/Pick/likeTab';
import rankTab from '../../../pages/Pick/rankTab';

//* 공통 헤더 및 Sider
import HeaderScreen from './HeaderScreen';
import TabBarLabelComp from '../../../components/Label/TabBarLabel';

import {Fonts} from '../../../settings/fonts';

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

export default function PickScreen({navigation}) {
  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: '#001943'}} />
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <HeaderScreen navigation={navigation} type="Pick" />
        <Htab.Navigator>
          <Htab.Screen
            name="Pick"
            component={Pick}
            options={{
              tabBarLabel: ({focused}) => (
                <TabBarLabelComp focused={focused}>전체</TabBarLabelComp>
              ),
            }}
          />
          <Htab.Screen
            name="Game"
            component={gameTab}
            options={{
              tabBarLabel: ({focused}) => (
                <TabBarLabelComp focused={focused}>경기별</TabBarLabelComp>
              ),
            }}
          />
          <Htab.Screen
            name="Like"
            component={likeTab}
            options={{
              tabBarLabel: ({focused}) => (
                <TabBarLabelComp focused={focused}>즐겨찾기</TabBarLabelComp>
              ),
            }}
          />
          <Htab.Screen
            name="Rank"
            component={rankTab}
            options={{
              tabBarLabel: ({focused}) => (
                <TabBarLabelComp focused={focused}>랭킹</TabBarLabelComp>
              ),
            }}
          />
        </Htab.Navigator>
      </SafeAreaView>
    </Fragment>
  );
}
