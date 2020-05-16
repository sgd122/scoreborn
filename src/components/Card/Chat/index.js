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
const CustomChatCard = (props) => {
  let {data} = props;

  return (
    <>
      {data &&
        data.map((k) => {
          return (
            <View style={CustomStyles.defaultCard}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RoundImage
                    source={require('../../../img/game/game1.png')}
                    size={40}
                  />
                  <View>
                    <Text
                      style={[
                        CustomStyles.defualtFont,
                        {marginLeft: 10, fontWeight: 'bold'},
                      ]}>
                      조쉬
                    </Text>
                    <Text
                      style={[
                        CustomStyles.defualtFont,
                        {marginLeft: 10, color: '#ADADAD'},
                      ]}>
                      덕분에 큰 도움이 됐어요. 감사합니다.
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={[CustomStyles.defualtFont, {color: '#ADADAD'}]}>
                    지금
                  </Text>
                </View>
              </View>
              <Divider style={{marginTop: 10}} />
            </View>
          );
        })}
    </>
  );
};

const CustomStyles = StyleSheet.create({
  defaultCard: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  defualtFont: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.NotoSans,
    textAlign: 'left',
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

export default CustomChatCard;
