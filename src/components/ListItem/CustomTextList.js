//* 마이페이지

import React, {useEffect, useContext} from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export default function CustomTextList({data}) {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => flatListRenderItem(item, index)}
      scrollEnabled={false}
    />
  );
}

const flatListRenderItem = (item, index) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{width: '100%', paddingHorizontal: 20, paddingVertical: 16}}>
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
