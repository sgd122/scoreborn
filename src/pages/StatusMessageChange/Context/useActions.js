import React from 'react';
import { View, Text, Alert } from 'react-native';
import api1 from '../api/api1';
import { api, BASE_URL } from '../../../settings/default';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
import { every, union, uniq } from 'lodash';

export default function useActions({ state, setState, commonStore }) {
  const callChangeStatusMessage = () => {
    // setState((prev) => ({...prev, member: '222'}));
  };

  return {
    callChangeStatusMessage,
  };
}
