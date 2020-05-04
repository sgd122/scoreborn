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
          rank: 1,
          rankScore: +36000,
          cnt: 1156,
        },
        {
          name: '배당률탑',
          subtitle: '前 KBS 스포츠국 작가',
          rank: 2,
          rankScore: +1000,
          cnt: 53662,
        },
      ],
    }));
  }, []);

  return (
    <Observer>
      {() => (
        <View style={[styles.container]}>
          <ScrollView>
            <PickCard type={'rank'} data={state.list} />
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
