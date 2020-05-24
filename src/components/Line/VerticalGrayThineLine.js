//* 굵은 가로줄

import React, { useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

export default function VerticalGrayThineLine() {
  return <View style={CustomStyles.VerticalGrayThineLine} />;
}

const CustomStyles = StyleSheet.create({
  VerticalGrayThineLine: {
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: '#929394',
    borderBottomWidth: 1,
    paddingTop: 12,
  },
});
