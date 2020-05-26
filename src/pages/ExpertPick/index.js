//* 전문가픽

import React, {useEffect, useContext} from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {Observer, observer, inject} from 'mobx-react';
import PageContext, {PageProvider} from './Context';

//* 공통 컴포넌트
import ScoreInput from '../../components/Text/ScoreInput';
import ScoreLabel from '../../components/Text/ScoreLabel';
import CustomButton from '../../components/Buttons/CustomButton';
import CustomListItem from '../../components/ListItem/CustomListItem';
import LiveLabelType1 from '../../components/Text/LiveLabelType1';
import LiveCard from '../../components/Card/Live';

//* 스타일
import styles from '../../styles/common.module.scss';

import CustomHeader from './Header';
import ContentExpect from './ContentExpect';
import ContentOtherPick from './ContentOtherPick';
import ContentOtherExpect from './ContentOtherExpect';

function ExpertPick({userStore, navigation}) {
  const {
    state,
    setState,
    actions: {callLogin, callSignUp, callForgot},
  } = useContext(PageContext);

  useEffect(() => {
    //* Navigation
    setState((prev) => ({...prev, navigation: navigation}));

    setState((prev) => ({
      ...prev,
      header_list: [
        {
          name: '스포츠어드벤처',
          subtitle: '러셀은 안전하게 2아웃 잘 잡습니다.',
          time: '경기종료',
          leagueName: '16:00 잉글랜드 PD리그',
          cnt: 1156,
          home: {
            name: '시카고펍스',
            url: '../../../img/game/game1.png',
            score: 130,
          },
          away: {
            name: '오클랜드',
            url: '../../../img/game/game2.png',
            score: 110,
          },
          chat: '채팅방이 없습니다.',
        },
      ],
      list: [
        {
          name: '스포츠어드벤처',
          subtitle: '스포츠 빅데이터 분석기관',
          leagueName: '16:00 잉글랜드 PD리그',
          cnt: 1156,
          home: {
            name: '시카고펍스',
            url: '../../../img/game/game1.png',
          },
          away: {
            name: '오클랜드',
            url: '../../../img/game/game2.png',
          },
          money: 15,
        },
        {
          name: '배당률탑',
          subtitle: '前 KBS 스포츠국 작가',
          leagueName: '16:00 잉글랜드 PD리그',
          cnt: 53662,
          home: {
            name: '올랜드',
            url: '../../../img/game/game1.png',
          },
          away: {
            name: '포틀랜드',
            url: '../../../img/game/game2.png',
          },
          money: 30,
        },
        {
          name: '스포츠어드벤처',
          subtitle: '스포츠 빅데이터 분석기관',
          leagueName: '16:00 잉글랜드 PD리그',
          cnt: 1156,
          home: {
            name: '시카고펍스',
            url: '../../../img/game/game1.png',
          },
          away: {
            name: '오클랜드',
            url: '../../../img/game/game2.png',
          },
          money: 15,
        },
        {
          name: '배당률탑',
          subtitle: '前 KBS 스포츠국 작가',
          leagueName: '16:00 잉글랜드 PD리그',
          cnt: 53662,
          home: {
            name: '올랜드',
            url: '../../../img/game/game1.png',
          },
          away: {
            name: '포틀랜드',
            url: '../../../img/game/game2.png',
          },
          money: 30,
        },
        {
          name: '스포츠어드벤처',
          subtitle: '스포츠 빅데이터 분석기관',
          leagueName: '16:00 잉글랜드 PD리그',
          cnt: 1156,
          home: {
            name: '시카고펍스',
            url: '../../../img/game/game1.png',
          },
          away: {
            name: '오클랜드',
            url: '../../../img/game/game2.png',
          },
          money: 15,
        },
        {
          name: '배당률탑',
          subtitle: '前 KBS 스포츠국 작가',
          leagueName: '16:00 잉글랜드 PD리그',
          cnt: 53662,
          home: {
            name: '올랜드',
            url: '../../../img/game/game1.png',
          },
          away: {
            name: '포틀랜드',
            url: '../../../img/game/game2.png',
          },
          money: 30,
        },
      ],
    }));
  }, []);

  return (
    <Observer>
      {() => (
        <View style={[styles.container]}>
          <ScrollView>
            <CustomHeader />
            <ContentExpect />
            <ContentOtherPick />
            <ContentOtherExpect />
          </ScrollView>
        </View>
      )}
    </Observer>
  );
}

export default inject('userStore')(({userStore, navigation}) => {
  return (
    <PageProvider>
      {/* <HeaderScreen navigation={navigation} /> */}
      <ExpertPick userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});
