import React from 'react';
import {View, Image, StyleSheet, Text, TextInput} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../../styles/common.module.scss';
import RoundImage from '../../Image/RoundImage';
import {Fonts} from '../../../settings/fonts';

const CustomPickTopCard = (props) => {
  let {type} = props;
  if (!type) {
    type = 'live';
  }
  return (
    <View style={CustomStyles.defaultCard}>
      <Text style={[CustomStyles.defualtFont]}>이번주 탑 랭커</Text>
      <View style={{flexDirection: 'row'}}>
        <RoundImage
          source={require('../../../img/game/pick/top1.png')}
          name={'김덕중'}
          style={{marginRight: 15}}
        />
        <RoundImage
          source={require('../../../img/game/pick/top1.png')}
          name={'스포츠어..'}
          style={{marginRight: 15}}
        />
        <RoundImage
          source={require('../../../img/game/pick/top1.png')}
          name={'미우도우'}
          style={{marginRight: 15}}
        />
        <RoundImage
          source={require('../../../img/game/pick/top1.png')}
          name={'배당률탑'}
          style={{marginRight: 15}}
        />
        <RoundImage
          source={require('../../../img/game/pick/top1.png')}
          name={'팁돌이'}
          style={{marginRight: 15}}
        />
        <RoundImage
          source={require('../../../img/game/pick/top1.png')}
          name={'한효주여..'}
          style={{marginRight: 15}}
        />
      </View>
    </View>
  );
};

const CustomStyles = StyleSheet.create({
  defaultCard: {
    backgroundColor: '#F7F7F7',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  defualtFont: {
    fontSize: 17,
    fontWeight: '500',
    fontFamily: Fonts.RobotoMedium,
  },
  HomeColor: {
    color: '#03367A',
  },
  AwayColor: {
    color: '#949292',
  },
  AwayBlackColor: {
    color: 'black',
  },
  liveContainer: {
    backgroundColor: '#E5F0FF',
    borderRadius: 5,
    padding: 7,
    marginLeft: 10,
    width: '80%',
  },
  liveText: {
    fontFamily: Fonts.RobotoMedium,
    textAlign: 'center',
  },
});

export default CustomPickTopCard;
