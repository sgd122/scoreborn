import React from 'react';
import {View, Text, Alert} from 'react-native';
import api1 from '../api/api1';
import {api, BASE_URL} from '../../../settings/default';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
import {every, union, uniq} from 'lodash';

export default function useActions({state, setState, commonStore}) {
  const flatListRenderItem = (item, index) => {
    return (
      <View style={{flexDirection: 'column'}}>
        <View
          style={{width: '100%', paddingHorizontal: 20, paddingVertical: 16}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{item.name}</Text>
        </View>
        {index !== 1 ? (
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              paddingHorizontal: 20,
              borderBottomColor: '#F7F7F7',
              borderBottomWidth: 1,
            }}
          />
        ) : null}
      </View>
    );
  };

  return {
    flatListRenderItem,
  };
}
