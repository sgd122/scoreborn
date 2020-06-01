//* 굵은 가로줄

import React, {useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';

export default function TextLine({style}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={CustomStyles.Line} />
    </View>
  );
}

const CustomStyles = StyleSheet.create({
  Line: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 1,
    height: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(146, 147, 148, 0.13)',
    marginLeft: 8,
    marginRight: 8,
  },
});
