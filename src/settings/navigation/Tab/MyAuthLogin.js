// router.js
import React, {useEffect, useContext} from 'react';
import {Button, View, Text} from 'react-native';
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
import Login from '../../../pages/Login';
import SignUp from '../../../pages/SignUp';
import MatchID from '../../../pages/MatchID';
import MatchPwd from '../../../pages/MatchPwd';

//* 공통 헤더 및 Sider
import HeaderScreen from '../Screen/HeaderScreen';
import Sider from '../Screen/SiderContent';

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
 * * 인증 화면
 */
export default function MyAuthLogin() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerTitle: '로그인'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerTitle: '회원가입'}}
      />
      <Stack.Screen
        name="MatchIdPwd"
        component={MatchIdPwd}
        options={{headerTitle: '아이디/비밀번호 찾기'}}
      />
    </Stack.Navigator>
  );
}

function MatchIdPwd() {
  return (
    <Htab.Navigator>
      <Htab.Screen
        name="MatchID"
        component={MatchID}
        options={{tabBarLabel: '아이디찾기'}}
      />
      <Htab.Screen
        name="MatchPwd"
        component={MatchPwd}
        options={{tabBarLabel: '비밀번호찾기'}}
      />
    </Htab.Navigator>
  );
}
