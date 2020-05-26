import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../../styles/common.module.scss';
import RoundImage from '../../Image/RoundImage';
import {Fonts} from '../../../settings/fonts';

const CustomPickTopCard = (props) => {
  let {type} = props;
  let numbers = [1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5];
  if (!type) {
    type = 'live';
  }
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={true}
      onMomentumScrollEnd={() => {
        console.log('Scrolling is End');
      }}>
      <View style={CustomStyles.defaultCard}>
        <Text style={[CustomStyles.defualtFont]}>이번주 탑 랭커</Text>
        <View style={{flexDirection: 'row'}}>
          {numbers.map((num) => {
            return (
              <RoundImage
                size={32}
                source={require('../../../img/game/pick/top1.png')}
                name={'김덕중'}
                fontStyle={CustomStyles.TopFont}
                containerStyle={{marginRight: 15}}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const CustomStyles = StyleSheet.create({
  defaultCard: {
    backgroundColor: '#F7F7F7',
    borderRadius: 5,
    padding: 10,
    marginTop: 12,
    marginLeft: 18,
    marginRight: 18,
    height: 95,
  },
  defualtFont: {
    fontSize: 17,
    lineHeight: 23,
    fontFamily: Fonts.NotoSans,
    letterSpacing: -0.09,
    marginBottom: 5.7,
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
  TopFont: {
    fontFamily: Fonts.NotoSans,
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: -0.09,
    textAlign: 'center',
  },
});

export default CustomPickTopCard;
