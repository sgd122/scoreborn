import React from 'react';
import {View, Image, StyleSheet, Text, TextInput} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../../styles/common.module.scss';
import {Fonts} from '../../../settings/fonts';
import RoundImage from '../../Image/RoundImage';

/**
 * @param {*} props
 *
 */
const CustomTrend = ({type, ...props}) => {
  return (
    <>
      <View style={CustomStyles.defaultCard}>
        <View
          style={{
            marginLeft: 12,
            marginTop: 22,
          }}>
          <Image
            source={require('../../../img/logo/loginLogo1.png')}
            resizeMode="contain"
            style={{height: 25, width: 170}}
          />
          <Text style={CustomStyles.defualtFont}>주간 인기글 모아보기</Text>
        </View>
      </View>
    </>
  );
};

const CustomStyles = StyleSheet.create({
  defaultCard: {
    backgroundColor: '#F7F7F7',
    borderRadius: 5,
    height: 95,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
  },
  defualtFont: {
    marginTop: 10,
    fontFamily: Fonts.NotoSans,
    fontSize: 16,
    lineHeight: 23,
    letterSpacing: -0.09,
  },
});

export default CustomTrend;
