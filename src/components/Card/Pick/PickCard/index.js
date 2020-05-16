import React from 'react';
import {View, Image, StyleSheet, Text, TextInput} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../../../styles/common.module.scss';
import {Fonts} from '../../../../settings/fonts';
import RoundImage from '../../../Image/RoundImage';

import TypePick from './TypePick';
import TypeGame from './TypeGame';
import TypeLike from './TypeLike';
import TypeRank from './TypeRank';
/**
 * @param {*} props
 *
 */
const CustomPickCard = (props) => {
  let {type, data} = props;
  if (!type) {
    type = 'pick';
  }

  const pageReturn = () => {
    if (type == 'pick') {
      return (
        <TypePick
          type={type}
          data={data}
          CustomStyles={CustomStyles}
          navigation={props.navigation}
        />
      );
    } else if (type == 'game') {
      return (
        <TypeGame
          type={type}
          data={data}
          CustomStyles={CustomStyles}
          navigation={props.navigation}
        />
      );
    } else if (type == 'EndGame') {
      return (
        <TypeGame
          type={type}
          data={data}
          CustomStyles={CustomStyles}
          navigation={props.navigation}
        />
      );
    } else if (type == 'like') {
      return (
        <TypeLike
          type={type}
          data={data}
          CustomStyles={CustomStyles}
          navigation={props.navigation}
        />
      );
    } else if (type == 'rank') {
      return (
        <TypeRank
          type={type}
          data={data}
          CustomStyles={CustomStyles}
          navigation={props.navigation}
        />
      );
    }
  };

  return <View style={[{marginTop: 10}, props.style]}>{pageReturn()}</View>;
};

const CustomStyles = StyleSheet.create({
  defaultCard: {
    borderRadius: 5,
    borderWidth: 0,
    shadowColor: 'rgba(40, 40, 40, 0.15)',
    shadowOpacity: 1, //그림자 투명도
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 4},
    elevation: 3, // Android적용
    marginBottom: -7,
    marginLeft: 10,
    marginRight: 10,
  },
  defualtFont: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.NotoSans,
  },
  gameFont: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
    fontFamily: Fonts.Roboto,
  },
  moneyFont: {
    alignItems: 'center',
    color: '#042B6C',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: Fonts.NotoSans,
  },
});

export default CustomPickCard;
