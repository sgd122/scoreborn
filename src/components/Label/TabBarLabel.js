import React, {useEffect, useContext, Fragment} from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {Fonts} from '../../settings/fonts';

const TabBarLabelComp = ({children, focused}) => {
  return (
    <Text
      style={[focused ? CustomStyles.focusedFont : CustomStyles.defualtFont]}>
      {children}
    </Text>
  );
};

const CustomStyles = StyleSheet.create({
  focusedFont: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
    letterSpacing: -0.09,
    fontFamily: Fonts.NotoSans,
    color: '#042B6C',
  },
  defualtFont: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
    letterSpacing: -0.09,
    fontFamily: Fonts.NotoSans,
    color: '#929394',
  },
});

export default TabBarLabelComp;
