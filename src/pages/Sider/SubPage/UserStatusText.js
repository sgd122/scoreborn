//* 유저사진

import React, {useEffect, useContext} from 'react';
import {View, Image, Text} from 'react-native';
import PageContext, {PageProvider} from '../Context';

//* 공통 컴포넌트
import ScoreInput from '../../../components/Text/ScoreInput';
import RoundImage from '../../../components/Image/RoundImage';

//* 스타일
import styles from '../../../styles/common.module.scss';

export default function UserStatusText({CustomStyles}) {
  const {
    state,
    setState,
    actions: {callMyPage},
  } = useContext(PageContext);

  return (
    <View style={CustomStyles.UserStatusTextView}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../../../img/icon/money.png')}
          style={{width: 12, height: 12, marginLeft: 15}}
          resizeMode="contain"
        />
        <Text style={CustomStyles.UserStatusTexttext}>나의캐시</Text>
      </View>
      <Text style={CustomStyles.UserStatusTextRight}>300</Text>
    </View>
  );
}
