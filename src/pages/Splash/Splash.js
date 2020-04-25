// pages/Splash.js

import React, { useEffect } from 'react';
import { Button, View, Image, StyleSheet } from 'react-native';
import { Observer, observer, inject } from 'mobx-react';
import BlueGradient from "../../components/BlueGradient";
import Logo from "../../components/Logo";

function SplashScreen({ userStore }) {
    useEffect(() => {
        setTimeout(() => {
        }, 1000);
    }, [])
    return (
        <Observer>
            {() => (
                <BlueGradient>
                    <Logo />
                </BlueGradient>
            )}
        </Observer>
    )
};

// SplashScreen
export default inject("userStore")(({ userStore, navigation }) => {
    return (
        <SplashScreen userStore={userStore} navigation={navigation} />
    );
});
