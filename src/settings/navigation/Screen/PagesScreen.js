import React, {Fragment} from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Htab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

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
import FavoritesChat from '../../../pages/Favorites/Tab/FavoritesChat';
import FavoritesExpert from '../../../pages/Favorites/Tab/FavoritesExpert';
import NickNameChange from '../../../pages/NickNameChange';
import AlarmPage from '../../../pages/Alarm';
import AlaramSettings from '../../../pages/Alarm/Subpage/AlaramSettings';

//* Login
import Login from '../../../pages/Login';
import SignUp from '../../../pages/SignUp';
import MatchID from '../../../pages/MatchID';
import MatchPwd from '../../../pages/MatchPwd';

import Sider from './SiderContent';
import AlarmScreen from './AlaramScreen';

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
        name="MyPage/NickNameChange"
        component={NickNameChange}
        options={{headerTitle: '닉네임 변경'}}
      />
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{headerTitle: '나의 즐겨찾기'}}
      />
      <Stack.Screen
        name="Alarm"
        component={AlarmPage}
        options={({route, navigation}) => ({
          headerTitle: '알림',
          headerRight: (props) => (
            <AlarmTitle navigation={navigation} {...props} />
          ),
        })}
      />
      <Stack.Screen
        name="Alarm/Settings"
        component={AlaramSettings}
        options={{headerTitle: '알림 설정'}}
      />
      {LoginPages()}
    </>
  );
};

function AlarmTitle(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Alarm/Settings');
      }}>
      <View>
        <Image
          style={{marginRight: 10}}
          resizeMode="contain"
          source={require('../../../img/icon/Settings.png')}
        />
      </View>
    </TouchableOpacity>
  );
}

function FavoritesScreen({navigation}) {
  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: '#001943'}} />
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        {/* <HeaderScreen navigation={navigation} /> */}
        <Htab.Navigator>
          <Htab.Screen
            name="Favorites/Users"
            component={FavoritesUsers}
            options={{tabBarLabel: '유저'}}
          />
          <Htab.Screen
            name="Favorites/Chat"
            component={FavoritesChat}
            options={{tabBarLabel: '채팅방'}}
          />
          <Htab.Screen
            name="Favorites/Expert"
            component={FavoritesExpert}
            options={{tabBarLabel: '전문가'}}
          />
        </Htab.Navigator>
      </SafeAreaView>
    </Fragment>
  );
}

/**
 * * 인증 화면
 */
const LoginPages = () => {
  <>
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
  </>;
};

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

export default PagesScreen;
