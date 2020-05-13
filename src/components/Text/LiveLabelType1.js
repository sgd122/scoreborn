// App.js
import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../../styles/common.module.scss';

export default function LiveLabelType1({style, ...props}) {
  return (
    <View style={{width: '100%', margin: 0, padding: 0}}>
      <Text style={[styles.default_label_type1, style]} {...props}>
        {props.children}
      </Text>
    </View>
  );
}
