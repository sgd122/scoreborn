import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, TextInput} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Fonts} from '../../../settings/fonts';

import LiveCard from './LiveCard';
import UpComingCard from './UpComingCard';
import EndCard from './EndCard';

const CustomLiveCard = (props) => {
  let {type, data} = props;

  if (!type) {
    type = 'live';
  }

  const pageReturn = () => {
    if (type == 'live') {
      return <LiveCard type={type} data={data} CustomStyles={CustomStyles} />;
    } else if (type == 'upcoming') {
      return (
        <UpComingCard type={type} data={data} CustomStyles={CustomStyles} />
      );
    } else if (type == 'end') {
      return <EndCard type={type} data={data} CustomStyles={CustomStyles} />;
    }
  };
  return <View>{pageReturn()}</View>;
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
    fontSize: 28,
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

export default CustomLiveCard;
