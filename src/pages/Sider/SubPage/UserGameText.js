//* 유저사진

import React, {useEffect, useContext} from 'react';
import {View, Image, Text} from 'react-native';
import PageContext, {PageProvider} from '../Context';

//* 공통 컴포넌트
import ScoreInput from '../../../components/Text/ScoreInput';
import RoundImage from '../../../components/Image/RoundImage';

//* 스타일
import styles from '../../../styles/common.module.scss';

export default function UserGameText({CustomStyles}) {
  const {
    state,
    setState,
    actions: {callMyPage},
  } = useContext(PageContext);

  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={CustomStyles.UserGameTextView}>
          <Text style={CustomStyles.UserGameTexttext}>축구</Text>
        </View>
        <View style={CustomStyles.UserGameTextView}>
          <Text style={CustomStyles.UserGameTexttext}>테니스</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={CustomStyles.UserGameTextView}>
          <Text style={CustomStyles.UserGameTexttext}>야구</Text>
        </View>
        <View style={CustomStyles.UserGameTextView}>
          <Text style={CustomStyles.UserGameTexttext}>미식축구</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={CustomStyles.UserGameTextView}>
          <Text style={CustomStyles.UserGameTexttext}>농구</Text>
        </View>
        <View style={CustomStyles.UserGameTextView}>
          <Text style={CustomStyles.UserGameTexttext}>크리켓</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={CustomStyles.UserGameTextView}>
          <Text style={CustomStyles.UserGameTexttext}>배구</Text>
        </View>
        <View style={CustomStyles.UserGameTextView}>
          <Text style={CustomStyles.UserGameTexttext}>e스포츠</Text>
        </View>
      </View>

      <View style={CustomStyles.UserGameTextView}>
        <Text style={CustomStyles.UserGameTexttext}>아이스하키</Text>
      </View>
    </>
  );
}
