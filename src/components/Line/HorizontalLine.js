//* 굵은 가로줄

import React, {useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';

export default function HorizontalLine({style}) {
  return <View style={[CustomStyles.HorizontalLine, style]} />;
}

const CustomStyles = StyleSheet.create({
  HorizontalLine: {
    borderRightWidth: 1,
    borderColor: '#ADADAD',
    height: 32,
  },
});
