//* 마이페이지

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

function MyPage({userStore, navigation}) {
  const {
    state,
    setState,
    actions: {callMyPage},
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
      ],
    }));
  }, []);

  return (
    <Observer>
      {() => (
        <View style={[styles.container]}>
          <ScrollView>{callMyPage()}</ScrollView>
        </View>
      )}
    </Observer>
  );
}

export default inject('userStore')(({userStore, navigation}) => {
  return (
    <PageProvider>
      {/* <HeaderScreen navigation={navigation} /> */}
      <MyPage userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});
