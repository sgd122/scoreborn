//* 굵은 가로줄

import React, {useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';

export default function VerticalGrayLine({style}) {
  return <View style={[CustomStyles.VerticalGrayLine, style]} />;
}

const CustomStyles = StyleSheet.create({
  VerticalGrayLine: {
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: '#F7F7F7',
    borderBottomWidth: 8,
    marginTop: 16,
  },
});
