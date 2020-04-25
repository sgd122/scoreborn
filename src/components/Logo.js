// pages/Splash.js

import React, {useEffect} from 'react';
import {Button, View, Image, StyleSheet} from 'react-native';
import {Observer, observer, inject} from 'mobx-react';

export default function Logo({style, ...props}) {
  return (
    <Image
      style={[{height: '10%', width: '30%', resizeMode: 'contain'}, style]}
      source={require('../img/logo/logo.png')}
    />
  );
}
