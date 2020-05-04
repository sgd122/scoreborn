import React from 'react';
import {View, Image, StyleSheet, Text, TextInput} from 'react-native';
import styles from '../../styles/common.module.scss';
import {Fonts} from '../../settings/fonts';

const RoundImage = ({name, ...props}) => (
  <View>
    <Image style={[CustomStyles.defaultImgae, props.style]} {...props} />
    {name && <Text style={CustomStyles.defualtFont}>{name}</Text>}
  </View>
);

const CustomStyles = StyleSheet.create({
  defualtFont: {
    textAlign: 'center',
    fontFamily: Fonts.RobotoMedium,
    paddingTop: 5,
  },
  defaultImgae: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 15,
  },
});

export default RoundImage;
