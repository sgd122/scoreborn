// router.js
import React, {useEffect, useContext} from 'react';
import {Button, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

//* mobx
import AuthContext, {AuthProvider} from './AuthContext';
import {Observer, observer, inject} from 'mobx-react';

// import SplashScreen from '../../pages/Splash/Splash';
import Main from '../../pages/Main';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import MatchID from '../../pages/MatchID';
import MatchPwd from '../../pages/MatchPwd';

//* 공통 헤더 및 Sider
import HeaderScreen from './Screen/HeaderScreen';
import Sider from './Screen/SiderContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Htab = createMaterialTopTabNavigator();

const options = {
  headerStyle: {},
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

/**
 * * 앱 메인 화면
 */
function MyMain() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sider {...props} />}>
      <Drawer.Screen name="Home" component={HeaderScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

/**
 * * 인증 화면
 */
function MyAuthLogin() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="로그인" component={Login} options={options} />
      <Stack.Screen name="회원가입" component={SignUp} options={options} />
      <Stack.Screen
        name="아이디/비밀번호 찾기"
        component={MatchIdPwd}
        options={options}
      />
    </Stack.Navigator>
  );
}

function MatchIdPwd() {
  return (
    <Htab.Navigator>
      <Htab.Screen name="아이디찾기" component={MatchID} />
      <Htab.Screen name="비밀번호찾기" component={MatchPwd} />
    </Htab.Navigator>
  );
}

function Router() {
  const {mainState, dispatch} = useContext(AuthContext);
  return (
    <Observer>
      {() => (
        <NavigationContainer>
          {mainState.token == null ? <MyAuthLogin /> : <MyMain />}
        </NavigationContainer>
      )}
    </Observer>
  );
}

export default inject('userStore')(({userStore, navigation}) => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
});
