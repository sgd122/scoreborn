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
import LiveCard from '../../components/Card/LiveCard';
import HeaderScreen from '../../settings/navigation/Screen/HeaderScreen';

//* 스타일
import styles from '../../styles/common.module.scss';

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
            <LiveCard type={'live'} />

            <LiveLabelType1>예정 경기</LiveLabelType1>
            <LiveCard type={1} />
            <LiveCard type={1} />
            <LiveCard type={1} />
            <LiveCard type={1} />

            <LiveLabelType1>경기 결과</LiveLabelType1>
            <LiveCard type={2} />
            <LiveCard type={2} />
            <LiveCard type={2} />
            <LiveCard type={2} />
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
      <Live userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});
