import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import styles from '../../styles/common.module.scss';
import {Fonts} from '../../settings/fonts';

const RoundImage = ({onPress, name, ...props}) => (
  <View>
    <TouchableOpacity onPress={() => onPress()}>
      <Image style={[CustomStyles.defaultImgae, props.style]} {...props} />
    </TouchableOpacity>
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
