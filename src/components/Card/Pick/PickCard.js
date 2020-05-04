import React from 'react';
import {View, Image, StyleSheet, Text, TextInput} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../../styles/common.module.scss';
import {Fonts} from '../../../settings/fonts';
import RoundImage from '../../Image/RoundImage';

const CustomPickCard = (props) => {
  let {type} = props;
  if (!type) {
    type = 'live';
  }
  return (
    <Card containerStyle={[CustomStyles.defaultCard]}>
      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row'}}>
          <RoundImage source={require('../../../img/game/game1.png')} />
          <View style={{flexDirection: 'column'}}>
            <Text style={[CustomStyles.defualtFont]}>스포츠어드벤처</Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  [CustomStyles.defualtFont],
                  {fontSize: 12, color: '#929394', marginRight: 10},
                ]}>
                스포츠 빅데이터 분석기관
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
                1156
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{backgroundColor: '#F7F7F7', borderRadius: 5, padding: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
