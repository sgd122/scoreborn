// App.js
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from '../../styles/common.module.scss';
import {Fonts} from '../../settings/fonts';

export default function LiveLabelType1({style, children, ...props}) {
  return (
    <View style={CustomStyles.defaultView}>
      <Text style={[CustomStyles.defualtFont, style]} {...props}>
        {children}
      </Text>
    </View>
  );
}

const CustomStyles = StyleSheet.create({
  defualtFont: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: Fonts.RobotoMedium,
    lineHeight: 16,
    letterSpacing: -0.09,
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultView: {
    marginBottom: 10,
    backgroundColor: '#e5f0ff',
    justifyContent: 'center',
    height: 24,
  },
});
