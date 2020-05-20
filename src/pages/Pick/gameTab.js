//* 픽

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
import LiveLabelType1 from '../../components/Text/LiveLabelType1';
import PickCard from '../../components/Card/Pick/PickCard';
import PickTopCard from '../../components/Card/Pick/PickTopCard';
import RoundImage from '../../components/Image/RoundImage';

//* 스타일
import styles from '../../styles/common.module.scss';

function Pick({userStore, navigation}) {
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
            <PickCard type={'game'} data={state.list} navigation={navigation} />

            <LiveLabelType1>종료된 경기</LiveLabelType1>
            <PickCard
              type={'EndGame'}
              data={state.list}
              navigation={navigation}
            />
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
      <Pick userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});
