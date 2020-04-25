// App.js
import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';
import styles from '../../styles/common.module.scss';

export default function ScoreLabel({style, ...props}) {
  return (
    <Text style={[styles.default_label, style]} {...props}>
      {props.children}
    </Text>
  );
}
