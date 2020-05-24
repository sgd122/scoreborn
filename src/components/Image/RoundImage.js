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

const RoundImage = ({onPress, name, size, style, ...props}) => {
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
      // marginRight: 15,
    },
  });
  return (
    <View>
      {onPress ? (
        <TouchableOpacity onPress={() => onPress()}>
          <Image style={[CustomStyles.defaultImgae, style]} {...props} />
        </TouchableOpacity>
      ) : (
        <Image style={[CustomStyles.defaultImgae, style]} {...props} />
      )}
      {name && <Text style={CustomStyles.defualtFont}>{name}</Text>}
    </View>
  );
};

export default RoundImage;
