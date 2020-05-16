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

const SquareImage = ({onPress, name, size, style, ...props}) => {
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
      borderColor: '#EFEFEF',
      borderRadius: 5,
      borderWidth: 1,
    },
  });
  return (
    <View>
      <TouchableOpacity onPress={() => onPress()}>
        <Image
          style={[CustomStyles.defaultImgae, style]}
          resizeMode="contain"
          {...props}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SquareImage;
