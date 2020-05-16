//* 유저사진

import React, {useEffect, useContext} from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import PageContext, {PageProvider} from '../Context';

//* 공통 컴포넌트
import ScoreInput from '../../../components/Text/ScoreInput';
import RoundImage from '../../../components/Image/RoundImage';

//* 스타일
import styles from '../../../styles/common.module.scss';

export default function BottomCircle({CustomStyles}) {
  const {
    state,
    setState,
    actions: {callMyPage},
  } = useContext(PageContext);

  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={CustomStyles.Circle}>
          <Image
            source={require('../../../img/icon/dice.png')}
            style={{width: 18}}
            resizeMode="contain"
          />
          <Text>토토</Text>
        </View>

        <TouchableWithoutFeedback
          onPress={() => {
            state.navigation.navigate('Favorites');
          }}>
          <View style={CustomStyles.Circle}>
            <Image
              source={require('../../../img/icon/Star4.png')}
              style={{width: 18, marginBottom: 3}}
              resizeMode="contain"
            />
            <Text>즐겨찾기</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            state.navigation.navigate('MyPage');
          }}>
          <View style={CustomStyles.Circle}>
            <Image
              source={require('../../../img/icon/Star4.png')}
              style={{width: 18, marginBottom: 3}}
              resizeMode="contain"
            />
            <Text>MY</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}
