//* 라이브

import React, {useEffect, useContext} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import {Button, Divider} from 'react-native-elements';
import {Observer, observer, inject} from 'mobx-react';
import PageContext, {PageProvider} from '../Context';

//* 공통 컴포넌트
import CustomListChat from '../../../components/ListItem/CustomListChat';

//* 스타일
import styles from '../../../styles/common.module.scss';
import {Fonts} from '../../../settings/fonts';
export default function UpComingChat({userStore, navigation}) {
  const {
    state,
    setState,
    actions: {callLogin, callSignUp, callForgot},
  } = useContext(PageContext);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      list: [
        {
          name: '1',
          subtitle: '러셀은 안전하게 2아웃 잘 잡습니다.',
          time: '경기종료',
          leagueName: '16:00 잉글랜드 PD리그',
          cnt: 1156,
          home: {
            name: '시카고펍스',
            url: '../../../../img/game/game1.png',
            score: 130,
          },
          away: {
            name: '오클랜드',
            url: '../../../../img/game/game2.png',
            score: 110,
          },
          chat: '채팅방이 없습니다.',
        },
        {
          name: '2',
          subtitle: '마앰 풀업 점퍼 팅',
          time: '경기종료',
          leagueName: '16:00 잉글랜드 PD리그',
          cnt: 53662,
          home: {
            name: '올랜드',
            url: '../../../img/game/game1.png',
            score: 210,
          },
          away: {
            name: '포틀랜드',
            url: '../../../img/game/game2.png',
            score: 300,
          },
          chat: '5명 채팅중',
        },
      ],
    }));
  }, []);

  return (
    <View style={[styles.container, {margin: 10}]}>
      <ScrollView>
        <CustomListChat list={state.list} type="Chat" navigation={navigation} />
      </ScrollView>
    </View>
  );
}
