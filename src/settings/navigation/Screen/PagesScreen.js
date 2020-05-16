import React, {Fragment} from 'react';
import {Button, View, Text, SafeAreaView, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Htab = createMaterialTopTabNavigator();

//* 공통 헤더 및 Sider
import HeaderScreen from './HeaderScreen';

import SubUpComing from '../../../pages/Live/SubPage/SubUpComing';
import SubLive from '../../../pages/Live/SubPage/SubLive';
import SubEnd from '../../../pages/Live/SubPage/SubEnd';
import SubPrevResult from '../../../pages/Live/SubPage/SubPrevResult';
import ExpertPick from '../../../pages/ExpertPick';
import ExpertProfile from '../../../pages/ExpertProfile';
import MyPage from '../../../pages/MyPage';
import Favorites from '../../../pages/Favorites';
import FavoritesUsers from '../../../pages/Favorites/Tab/FavoritesUsers';

const PagesScreen = () => {
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
        name="Profile/Expert"
        component={ExpertProfile}
        options={{headerTitle: '전문가 프로필'}}
      />
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{headerTitle: '마이페이지'}}
      />
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{headerTitle: '나의 즐겨찾기'}}
      />
    </>
  );
};

function FavoritesScreen({navigation}) {
  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: '#001943'}} />
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <HeaderScreen navigation={navigation} />
        <Htab.Navigator>
          <Htab.Screen
            name="Favorites/Users"
            component={FavoritesUsers}
            options={{tabBarLabel: '유저'}}
          />
          <Htab.Screen
            name="Favorites/Chat"
            component={Favorites}
            options={{tabBarLabel: '채팅방'}}
          />
          <Htab.Screen
            name="Favorites/Expert"
            component={Favorites}
            options={{tabBarLabel: '전문가'}}
          />
        </Htab.Navigator>
      </SafeAreaView>
    </Fragment>
  );
}

export default PagesScreen;
