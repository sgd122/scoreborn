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
import AlarmScreen from '../../../../pages/Alarm';
import Sider from '../SiderContent';

export default function DrawerAlarm(props) {
  console.log('::DrawerAlarm::');
  return (
    <>
      <HeaderScreen navigation={props.navigation} />
      <Drawer.Navigator
        drawerPosition="right"
        drawerContent={(props) => <Sider {...props} />}
        initialRouteName="Alarm/Alarm">
        <Drawer.Screen
          name="Alarm/Alarm"
          component={AlarmScreen}
          options={({route, navigation}) => ({
            drawerLabel: '알림',
            headerRight: (props) => (
              <AlarmTitle navigation={navigation} {...props} />
            ),
          })}
        />
      </Drawer.Navigator>
    </>
  );
}
