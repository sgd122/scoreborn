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
          name: '분석',
          avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: '시카고컵스랑 오클랜드 보시는 분들 필독',
        },
        {
          name: '자유',
          // avatar_url:
          //   'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: '꿀조합 추천 드립니다.',
        },
      ],
    }));
  }, []);

  return (
    <Observer>
      {() => (
        <View style={[styles.container]}>
          <ScrollView>
            <PickTopCard />

            <LiveLabelType1>실시간 전문가 픽</LiveLabelType1>
            <PickCard type={1} />
            <PickCard type={1} />
            <PickCard type={1} />
            <PickCard type={1} />
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
