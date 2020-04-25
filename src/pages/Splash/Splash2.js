// App.js
import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import BlueGradient from '../../components/BlueGradient';
import Logo from '../../components/Logo';
import LogofontLarge from '../../components/Text/LogofontLarge';
import LogofontSmall from '../../components/Text/LogofontSmall';
import styles from '../../styles/common.module.scss';

export default function Splash2(props) {
  return (
    <View style={styles.container}>
      <BlueGradient>
        <View style={styles.header}></View>
        <View
          style={[
            styles.title,
            {
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              paddingLeft: 30,
            },
          ]}>
          <LogofontLarge>스코어의</LogofontLarge>
          <LogofontLarge>기본을논하다</LogofontLarge>
          <View style={{ marginTop: 10 }} />
          <LogofontSmall>철저한보안의</LogofontSmall>
          <LogofontSmall>실시간스코어, 채팅지원</LogofontSmall>
        </View>
        <View style={styles.content}>
          <View style={styles.container}>
            <Image
              style={{
                height: '90%',
                resizeMode: 'contain',
                marginLeft: '100%',
                zIndex: 10,
              }}
              source={require('../../img/splash/screen1.png')}
            />
            <Image
              style={{
                height: '90%',
                resizeMode: 'contain',
                marginLeft: '100%',
                marginTop: '-70%',
              }}
              source={require('../../img/splash/screen2.png')}
            />
          </View>
        </View>
        <View style={[styles.footer, { paddingLeft: 30 }]}>
          <LogofontSmall>스코어본</LogofontSmall>
          <Logo />
        </View>
      </BlueGradient>
    </View>
  );
}
