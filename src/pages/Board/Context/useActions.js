import React from 'react';
import {Alert} from 'react-native';
import api1 from '../api/api1';
import {api, BASE_URL} from '../../../settings/default';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
import {every, union, uniq} from 'lodash';

export default function useActions({state, setState, commonStore}) {
  const callLogin = () => {
    const params = {
      id: state.id,
      password: state.password,
    };

    // api9({ params })
    //     .then(newState => {
    //         setState(prev => ({ ...prev, ...newState, dataNoRender: false }));
    //     });

    // state.navigation.navigate('Home');
    // alert(mainState.token);
    // dispatch({type: 'RESTORE_TOKEN', token: 'null'});
    if (every(Object.values(params))) {
      AsyncStorage.setItem('userToken', 'sgd');
      RNRestart.Restart();
    } else {
      Alert.alert('아이디 혹은 비밀번호를 입력하세요.');
    }
  };

  const callSignUp = () => {
    state.navigation.navigate('SignUp');
  };

  const callForgot = () => {
    state.navigation.navigate('MatchIdPwd');
  };

  return {
    callLogin,
    callSignUp,
    callForgot,
  };
}
