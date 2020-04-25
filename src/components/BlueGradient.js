// pages/Splash.js

import React, { useEffect } from 'react';
import { Button, View, Image, StyleSheet } from 'react-native';
import { Observer, observer, inject } from 'mobx-react';
import LinearGradient from 'react-native-linear-gradient';
import styles from "../styles/common.module.scss";

export default function BlueGradient(props) {
    return (
        <LinearGradient colors={['#042B6C', '#031A41']} style={styles.containerjfy}>
            {props.children}
        </LinearGradient>
    )
};