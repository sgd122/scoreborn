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
const CustomPickCard = (props) => {
  let {type, data} = props;
  if (!type) {
    type = 'pick';
  }

  const pageReturn = () => {
    console.log('::data::', data);
    if (type == 'pick') {
      data &&
        data.map((k) => {
          return (
            <View>
              <View style={{flexDirection: 'row'}}>
                <RoundImage source={require('../../../img/game/game1.png')} />
                <View style={{flexDirection: 'column'}}>
                  <Text style={[CustomStyles.defualtFont]}>{k.name}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={[
                        [CustomStyles.defualtFont],
                        {fontSize: 12, color: '#929394', marginRight: 10},
                      ]}>
                      {k.subtitle}
                    </Text>
                    <Icon name="star" size={18} style={{color: 'red'}} />
                    <Text
                      style={[
                        {
                          fontFamily: Fonts.NotoSans,
                          fontSize: 12,
                          color: '#FF1634',
                          alignItems: 'center',
                          lineHeight: 0,
                          marginLeft: 5,
                        },
                      ]}>
                      {k.cnt}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: '#F7F7F7',
                  borderRadius: 5,
                  padding: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'column',
                    }}>
                    <Text
                      style={[
                        [CustomStyles.defualtFont],
                        {fontSize: 12, color: '#ADADAD'},
                      ]}>
                      16:00 잉글랜드 PD리그
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={[[CustomStyles.gameFont]]}>시카고펍스</Text>
                      <Text style={[[CustomStyles.gameFont]]}> vs </Text>
                      <Text style={[[CustomStyles.gameFont]]}>오클랜드</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#E5F0FF',
                      borderRadius: 5,
                      padding: 5,
                      height: 30,
                    }}>
                    <Text style={CustomStyles.moneyFont}>₩ 15</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        });
    } else if (type == 'like') {
      return (
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <RoundImage source={require('../../../img/game/game1.png')} />
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={[
                    CustomStyles.defualtFont,
                    {fontSize: 14, marginRight: 10},
                  ]}>
                  김덕중
                </Text>
                <Text
                  style={[
                    CustomStyles.defualtFont,
                    {fontSize: 12, color: '#ADADAD'},
                  ]}>
                  前 SPOTIVE 뉴스 팀장
                </Text>
              </View>
              <Text style={[CustomStyles.defualtFont, {fontSize: 12}]}>
                스팟 티비 뉴스 12년 재직, 노하우를 보여드립니다.
              </Text>
            </View>
          </View>
          <Divider style={{marginTop: 10, marginBottom: 5}} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star" size={18} style={{color: 'red'}} />
              <Text
                style={[
                  {
                    fontFamily: Fonts.NotoSans,
                    fontSize: 12,
                    color: '#FF1634',
                    alignItems: 'center',
                    lineHeight: 0,
                    marginLeft: 5,
                  },
                ]}>
                1156
              </Text>
            </View>
            <View>
              <Text
                style={[
                  CustomStyles.defualtFont,
                  {fontSize: 12, color: '#042B6C'},
                ]}>
                승률이 88.5%로 상승했습니다.
              </Text>
            </View>
          </View>
        </View>
      );
    } else if (type == 'rank') {
      return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <RoundImage source={require('../../../img/game/game1.png')} />
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={[
                    CustomStyles.defualtFont,
                    {fontSize: 14, marginRight: 10},
                  ]}>
                  김덕중
                </Text>
                <Text
                  style={[
                    CustomStyles.defualtFont,
                    {fontSize: 12, color: '#ADADAD'},
                  ]}>
                  +36000
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="star"
                  size={10}
                  style={{color: '#042B6C', marginTop: 5}}
                />
                <Text
                  style={[
                    CustomStyles.defualtFont,
                    {fontSize: 10, color: '#042B6C'},
                  ]}>
                  152001
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Icon name="star" size={18} style={{color: 'red'}} />
          </View>
        </View>
      );
    }
  };

  return (
    <Card containerStyle={[CustomStyles.defaultCard]}>
      <View style={{flexDirection: 'column'}}>
        {pageReturn()}

        {(type == 'pick' || type == 'game') && (
          <View
            style={{
              backgroundColor: '#F7F7F7',
              borderRadius: 5,
              padding: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text
                  style={[
                    [CustomStyles.defualtFont],
                    {fontSize: 12, color: '#ADADAD'},
                  ]}>
                  16:00 잉글랜드 PD리그
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[[CustomStyles.gameFont]]}>시카고펍스</Text>
                  <Text style={[[CustomStyles.gameFont]]}> vs </Text>
                  <Text style={[[CustomStyles.gameFont]]}>오클랜드</Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: '#E5F0FF',
                  borderRadius: 5,
                  padding: 5,
                  height: 30,
                }}>
                <Text style={CustomStyles.moneyFont}>₩ 15</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </Card>
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
