// App.js
import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../../styles/common.module.scss';

export default function LogofontSmall(props) {
    return (
        <Text style={[styles.logofont_small, props.style]}>
            {props.children}
        </Text>
    );
}