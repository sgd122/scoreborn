// router.js
import React, {useState} from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {Header, Icon, Text, Overlay} from 'react-native-elements';
import {DrawerActions} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../../components/Logo';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
export default function HeaderScreen({navigation, type, children}) {
  return (
    <LinearGradient colors={['#001943', '#153467']}>
      <Header
        leftComponent={
          <MyCustomLeftComponent navigation={navigation} type={type} />
        }
        centerComponent={
          <MyCustomCenterComponent navigation={navigation} type={type} />
        }
        rightComponent={
          <MyCustomRightComponent navigation={navigation} type={type} />
        }
        containerStyle={{
          backgroundColor: 'transparent',
          justifyContent: 'space-around',
        }}
      />
    </LinearGradient>
  );
}

const MyCustomLeftComponent = ({navigation, type}) => {
  return (
    <Icon
      name="menu"
      color="#fff"
      style={{zIndex: 9999}}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  );
};
const MyCustomCenterComponent = ({navigation, type}) => {
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

const MyCustomRightComponent = ({navigation, type}) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      {type == 'Live' && (
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Calendar />
        </TouchableOpacity>
      )}
      {type == 'Board' && (
        <TouchableOpacity onPress={() => navigation.navigate('Board/Create')}>
          <Board />
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => navigation.navigate('Alarm')}>
        <Bell />
      </TouchableOpacity>

      {/* 달력 */}
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>여기에 달력이 출력됩니다.</Text>
      </Overlay>
    </View>
  );
};

const Calendar = () => {
  return (
    <Image
      style={{zIndex: 9999, height: 18, width: 16, marginRight: 16}}
      source={require('../../../img/head/Calendar.png')}
      // resizeMode="contain"
    />
  );
};
const Board = () => {
  return (
    <Image
      style={{zIndex: 9999, height: 18, width: 20, marginRight: 14}}
      source={require('../../../img/head/Board.png')}
      // resizeMode="contain"
    />
  );
};
const Bell = () => {
  return (
    <Image
      style={{zIndex: 9999, height: 18, width: 16}}
      source={require('../../../img/head/Bell.png')}
      // resizeMode="contain"
    />
  );
};

const goHome = () => {
  AsyncStorage.removeItem('userToken');
  RNRestart.Restart();
};
