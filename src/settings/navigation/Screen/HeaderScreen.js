// router.js
import React, {useEffect, useContext} from 'react';
import {Button, View} from 'react-native';
import {Header, Icon, Text} from 'react-native-elements';
import {DrawerActions} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../../components/Logo';
import AsyncStorage from '@react-native-community/async-storage';
export default function HeaderScreen({navigation, children}) {
  return (
    <LinearGradient colors={['#001943', '#153467']}>
      <Header
        leftComponent={<MyCustomLeftComponent navigation={navigation} />}
        centerComponent={<MyCustomCenterComponent />}
        rightComponent={<MyCustomRightComponent navigation={navigation} />}
        containerStyle={{
          backgroundColor: 'transparent',
          justifyContent: 'space-around',
        }}
      />
    </LinearGradient>
  );
}

const MyCustomLeftComponent = ({navigation}) => {
  return (
    <Icon
      name="menu"
      color="#fff"
      style={{zIndex: 9999}}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  );
};
const MyCustomCenterComponent = () => {
  return <Logo style={{height: '100%', zIndex: 9999}} />;
};

const MyCustomRightComponent = ({navigation}) => {
  return (
    <Icon
      name="home"
      color="#fff"
      style={{zIndex: 9999}}
      onPress={() => goHome()}
    />
  );
};

const goHome = () => {
  AsyncStorage.clear();
};
