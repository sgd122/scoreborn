//* 전문가 프로필

import React, {useEffect, useContext} from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import {Observer, observer, inject} from 'mobx-react';
import PageContext, {PageProvider} from './Context';
import Icon from 'react-native-vector-icons/FontAwesome';

//* 공통 컴포넌트
import RoundImage from '../../components/Image/RoundImage';
import ScoreInput from '../../components/Text/ScoreInput';
import ScoreLabel from '../../components/Text/ScoreLabel';
import CustomButton from '../../components/Buttons/CustomButton';
import CustomListItem from '../../components/ListItem/CustomListItem';
import LiveLabelType1 from '../../components/Text/LiveLabelType1';
import LiveCard from '../../components/Card/Live';

//* 스타일
import styles from '../../styles/common.module.scss';
import {Fonts} from '../../settings/fonts';

export default function Profile({CustomStyles}) {
  const {
    state,
    setState,
    actions: {callMyPage},
  } = useContext(PageContext);

  return (
    <Card containerStyle={[CustomStyles.defaultCard]}>
      <View style={{alignItems: 'center'}}>
        <Text style={CustomStyles.defualtFont}>스포츠어드벤쳐</Text>
        <RoundImage
          source={require('../../img/game/pick/top1.png')}
          size={100}
        />
        <Text style={CustomStyles.detailFont}>스포츠빅데이터 분석기관</Text>
        <Text style={CustomStyles.textFont}>데이터는 거짓말하지않습니다.</Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#E5F0FF',
            borderRadius: 5,
            padding: 5,
            height: 32,
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
          }}>
          <Icon name="star" size={17} style={{color: '#042B6C'}} />
          <Text style={CustomStyles.moneyFont}> 즐겨찾기 추가 </Text>
        </View>
        <View style={CustomStyles.grayView}>
          <View style={CustomStyles.grayViewSub1}>
            <View style={CustomStyles.grayViewSub2}>
              <Text>5726</Text>
              <Text style={CustomStyles.grayViewTextBottom}>즐겨찾는사람</Text>
            </View>
            <View style={CustomStyles.grayViewSub2}>
              <Text>88.5%</Text>
              <Text style={CustomStyles.grayViewTextBottom}>승률</Text>
            </View>
            <View
              style={[
                CustomStyles.grayViewSub2,
                {marginRight: 0, borderRightWidth: 0},
              ]}>
              <Text>6연승</Text>
              <Text style={CustomStyles.grayViewTextBottom}>최고연승</Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
}
