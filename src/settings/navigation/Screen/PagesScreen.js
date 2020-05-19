import React from 'react';
import { Button, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import SubUpComing from '../../../pages/Live/SubPage/SubUpComing';
import SubLive from '../../../pages/Live/SubPage/SubLive';
import SubEnd from '../../../pages/Live/SubPage/SubEnd';
import SubPrevResult from '../../../pages/Live/SubPage/SubPrevResult';
import ExpertPick from '../../../pages/ExpertPick';
import ExpertProfile from '../../../pages/ExpertProfile';
import MyPage from '../../../pages/MyPage';
import NickNameChange from '../../../pages/MyPage/SubPage/NickNameChange';
import StatusMessageChange from '../../../pages/MyPage/SubPage/StatusMessageChange';
import Follow from '../../../pages/MyPage/SubPage/Follow';

const PagesScreen = () => {
  return (
    <>
      <Stack.Screen
        name="Live/UpComing"
        component={SubUpComing}
        options={{ headerTitle: '진행예정 경기' }}
      />
      <Stack.Screen
        name="Live/Live"
        component={SubLive}
        options={{ headerTitle: '진행중 경기' }}
      />
      <Stack.Screen
        name="Live/End"
        component={SubEnd}
        options={{ headerTitle: '종료된 경기' }}
      />
      <Stack.Screen
        name="Live/SubPrevResult"
        component={SubPrevResult}
        options={{ headerTitle: '이전 경기결과' }}
      />
      <Stack.Screen
        name="ExpertPick"
        component={ExpertPick}
        options={{ headerTitle: '전문가 픽' }}
      />
      <Stack.Screen
        name="Profile/Expert"
        component={ExpertProfile}
        options={{ headerTitle: '전문가 프로필' }}
      />
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{ headerTitle: '마이페이지' }}
      />
      <Stack.Screen
        name="MyPage/NickNameChange"
        component={NickNameChange}
        options={{ headerTitle: '닉네임 변경' }}
      />
      <Stack.Screen
        name="MyPage/StatusMessageChange"
        component={StatusMessageChange}
        options={{ headerTitle: '프로필 메시지 변경' }}
      />

      <Stack.Screen
        name="MyPage/Follow"
        component={Follow}
        options={{ headerTitle: '나를 즐겨찾는 사람' }}
      />
    </>
  );
};

export default PagesScreen;
