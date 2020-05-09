import React from 'react';
import api1 from '../api/api1';
import {api, BASE_URL} from '../../../settings/default';
import AsyncStorage from '@react-native-community/async-storage';

export default function useActions({state, setState, commonStore}) {
  const callSignUp = () => {
    AsyncStorage.setItem('userToken', 'sgd122');
  };

  return {
    callSignUp,
  };
}
