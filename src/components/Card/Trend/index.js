import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
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
  const [close, setClose] = useState(false);
  return (
    <>
      <View style={[CustomStyles.defaultCard, close && {display: 'none'}]}>
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

        <TouchableOpacity
          style={CustomStyles.rightCloseView}
          onPress={() => setClose(!close)}>
          <Image
            source={require('../../../img/icon/Close.png')}
            resizeMode="contain"
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const CustomStyles = StyleSheet.create({
  defaultCard: {
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
    borderRadius: 5,
    height: 95,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
  },
  rightCloseView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginRight: 10,
    marginTop: 10,
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
