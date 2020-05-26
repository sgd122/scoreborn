import React, {useState} from 'react';
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

const RoundImage = ({
  onPress,
  name,
  size,
  style,
  containerStyle,
  fontStyle,
  ...props
}) => {
  const [globalSize, setGlobalSize] = useState(size ? size : 50);
  const CustomStyles = StyleSheet.create({
    defualtFont: {
      textAlign: 'center',
      fontFamily: Fonts.RobotoMedium,
      paddingTop: 5,
    },
    defaultImgae: {
      width: globalSize,
      height: globalSize,
      borderRadius: globalSize / 2,
    },
  });
  return (
    <View
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
        },
        containerStyle,
      ]}>
      {onPress ? (
        <TouchableOpacity onPress={() => onPress()}>
          <Image style={[CustomStyles.defaultImgae, style]} {...props} />
        </TouchableOpacity>
      ) : (
        <Image style={[CustomStyles.defaultImgae, style]} {...props} />
      )}
      {name && (
        <Text style={[CustomStyles.defualtFont, fontStyle]}>{name}</Text>
      )}
    </View>
  );
};

export default RoundImage;
