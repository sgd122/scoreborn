// router.js
import React, {useEffect, useContext} from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {Header, Icon, Text} from 'react-native-elements';
import {DrawerActions} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../../components/Logo';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
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
  return <Logo style={{height: '100%', width: '50%', zIndex: 9999}} />;
};

const MyCustomRightComponent = ({navigation}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
        <Image
          style={{zIndex: 9999, marginRight: 10}}
          source={require('../../../img/head/Calendar.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goHome()}>
        <Image
          style={{zIndex: 9999}}
          source={require('../../../img/head/Bell.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const goHome = () => {
  AsyncStorage.removeItem('userToken');
  RNRestart.Restart();
};
