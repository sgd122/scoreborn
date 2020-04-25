// App.js
import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import styles from '../../styles/common.module.scss';

export default function ScoreInput({style, ...props}) {
  return (
    <Input
      containerStyle={styles.default_input_container}
      inputContainerStyle={[styles.default_input, style]}
      {...props}>
      {props.children}
    </Input>
  );
}
