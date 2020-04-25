import React from 'react';
import api1 from '../api/api1';
import { api, BASE_URL } from '../../../settings/default';

export default function useActions({ state, setState, commonStore }) {
  const callSignUp = () => {
    state.navigation.navigate('Home');
  };

  return {
    callSignUp,
  };
}
