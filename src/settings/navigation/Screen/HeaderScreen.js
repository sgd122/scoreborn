// router.js
import React, {useEffect, useContext} from 'react';
import {Button, View} from 'react-native';
import {Header, Icon, Text} from 'react-native-elements';
import {DrawerActions} from '@react-navigation/native';
import Logo from '../../../components/Logo';
export default function HeaderScreen({navigation}) {
  return (
    <Header
      leftComponent={<MyCustomLeftComponent navigation={navigation} />}
      centerComponent={<MyCustomCenterComponent />}
      rightComponent={<MyCustomRightComponent navigation={navigation} />}
    />
  );
}

const MyCustomLeftComponent = ({navigation}) => {
  return (
    <Icon
      name="menu"
      color="#fff"
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  );
};
const MyCustomCenterComponent = () => {
  return <Logo style={{height: '100%'}} />;
};
const MyCustomRightComponent = ({navigation}) => {
  return (
    <Icon
      name="home"
      color="#fff"
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    />
  );
};
