//* 라이브

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
import HeaderScreen from '../../settings/navigation/Screen/HeaderScreen';

//* 스타일
import styles from '../../styles/common.module.scss';

//* Modal
import Modal01 from './Modal/Modal01';
function Live({userStore, navigation}) {
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
          name: '1',
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
    <Observer>
      {() => (
        <View style={[styles.container]}>
          {/* <HeaderScreen navigation={navigation} /> */}
          <ScrollView>
            <LiveCard
              type={'live'}
              data={state.list}
              navigation={state.navigation}
            />

            <LiveLabelType1>예정 경기</LiveLabelType1>
            <LiveCard
              type={'upcoming'}
              data={state.list}
              navigation={state.navigation}
            />

            <LiveLabelType1>경기 결과</LiveLabelType1>
            <LiveCard
              type={'end'}
              data={state.list}
              navigation={state.navigation}
            />
          </ScrollView>
          {/* <Modal01 /> */}
        </View>
      )}
    </Observer>
  );
}

export default inject('userStore')(({userStore, navigation}) => {
  return (
    <PageProvider>
      {/* <HeaderScreen navigation={navigation} /> */}
      <Live userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});
