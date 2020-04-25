import React from 'react';
import {Alert} from 'react-native';
import api1 from '../api/api1';
import {api, BASE_URL} from '../../../settings/default';
import AsyncStorage from '@react-native-community/async-storage';
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
    } else {
      Alert.alert('아이디 혹은 비밀번호를 입력하세요.');
    }
  };

  const callSignUp = () => {
    state.navigation.navigate('회원가입');
  };

  const callForgot = () => {
    state.navigation.navigate('아이디/비밀번호 찾기');
  };

  return {
    callLogin,
    callSignUp,
    callForgot,
  };
}
