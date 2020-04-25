import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createAppContainer} from 'react-navigation';
import LoginScreen from '../../pages/Login';
import HomeScreen from '../../pages/Login';
import SettingScreen from '../../pages/Login';
import SomethingScreen from '../../pages/Login';

const HomeStack = createStackNavigator(
  {
    HomeScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      title: 'Home',
    }),
  },
);
const SettingStack = createStackNavigator(
  {
    SettingScreen,
    SomethingScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      title: 'Setting',
    }),
    initialRouteName: 'SettingScreen',
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Setting: SettingStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let icon = '▲';

        if (routeName === 'Home') {
          icon = '🌈';
        } else if (routeName === 'Setting') {
          icon = '🌙';
        }

        // can use react-native-vector-icons
        // <Icon name={iconName} size={iconSize} color={iconColor} />
        return (
          <Text style={{color: (focused && '#46c3ad') || '#888'}}>{icon}</Text>
        );
      },
    }),
    lazy: false,
    tabBarOptions: {
      activeTintColor: '#46c3ad',
      inactiveTintColor: '#888',
    },
  },
);

const AppStack = createStackNavigator({
  LoginScreen: LoginScreen,
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
});

export default createAppContainer(AppStack);
