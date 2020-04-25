// App.js
import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../../styles/common.module.scss';

export default function LogofontLarge(props) {
  return (
    <Text style={[styles.logofont_large, props.style]}>{props.children}</Text>
  );
}
