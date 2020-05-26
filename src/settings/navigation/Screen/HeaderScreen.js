// router.js
import React, {useState} from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {Header, Icon, Text, Overlay} from 'react-native-elements';
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
        centerComponent={<MyCustomCenterComponent navigation={navigation} />}
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
const MyCustomCenterComponent = ({navigation}) => {
  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Live')}
        style={{width: '100%', alignItems: 'center'}}>
        <Logo style={{height: '100%', width: '50%', zIndex: 9999}} />
      </TouchableOpacity>
    </View>
  );
};

const MyCustomRightComponent = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <Image
          style={{zIndex: 9999, height: 18}}
          source={require('../../../img/head/Calendar.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Alarm')}>
        <Image
          style={{zIndex: 9999, height: 18}}
          source={require('../../../img/head/Bell.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* 달력 */}
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>여기에 달력이 출력됩니다.</Text>
      </Overlay>
    </View>
  );
};

const goHome = () => {
  AsyncStorage.removeItem('userToken');
  RNRestart.Restart();
};
