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
const CustomUsersCard = (props) => {
  let {data} = props;

  return (
    <>
      {data &&
        data.map((k) => {
          return (
            <Card containerStyle={[CustomStyles.defaultCard]}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RoundImage
                    source={require('../../../img/game/game1.png')}
                    size={40}
                  />
                  <Text style={[CustomStyles.defualtFont, {marginLeft: 10}]}>
                    스포츠 EASY
                  </Text>
                </View>
                <Image
                  source={require('../../../img/icon/Star.png')}
                  style={{width: 18}}
                  resizeMode="contain"
                />
              </View>
            </Card>
          );
        })}
    </>
  );
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

    marginBottom: 4,
    marginTop: 4,

    marginLeft: 10,
    marginRight: 10,
  },
  defualtFont: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.NotoSans,
    textAlign: 'center',
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

export default CustomUsersCard;
