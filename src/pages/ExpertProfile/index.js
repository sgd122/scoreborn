//* 전문가 프로필

import React, {useEffect, useContext} from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import {Observer, observer, inject} from 'mobx-react';
import PageContext, {PageProvider} from './Context';
import Icon from 'react-native-vector-icons/FontAwesome';

//* 공통 컴포넌트
import PickCard from '../../components/Card/Pick/PickCard';
import LiveLabelType1 from '../../components/Text/LiveLabelType1';

//* 스타일
import styles from '../../styles/common.module.scss';
import {Fonts} from '../../settings/fonts';

import Profile from './Profile';

function ExpertProfile({userStore, navigation}) {
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
        <ScrollView>
          <Profile CustomStyles={CustomStyles} />
          <Card containerStyle={[CustomStyles.defaultCard]}>
            <View>
              <PickCard type={'game'} data={state.list} />
              <LiveLabelType1>종료된 경기</LiveLabelType1>
              <PickCard type={'EndGame'} data={state.list} />
            </View>
          </Card>
        </ScrollView>
      )}
    </Observer>
  );
}

export default inject('userStore')(({userStore, navigation}) => {
  return (
    <PageProvider>
      <ExpertProfile userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});

const CustomStyles = StyleSheet.create({
  defaultCard: {
    padding: 0,
    borderRadius: 5,
    borderWidth: 0,
    shadowColor: 'rgba(40, 40, 40, 0.15)',
    shadowOpacity: 1, //그림자 투명도
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 4},
    elevation: 3, // Android적용

    marginBottom: 4,
    marginTop: 4,

    marginLeft: 10,
    marginRight: 10,
  },
  defualtFont: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.NotoSans,
  },
  detailFont: {
    fontSize: 14,
    lineHeight: 20,
    color: '#929394',
    fontFamily: Fonts.NotoSans,
    margin: 5,
  },
  textFont: {
    fontSize: 14,
    lineHeight: 16,
    color: '#292C30',
    fontFamily: Fonts.NotoSans,
    margin: 5,
  },
  moneyFont: {
    alignItems: 'center',
    color: '#042B6C',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'normal',
    fontFamily: Fonts.NotoSans,
  },
  grayView: {
    backgroundColor: '#F7F7F7',
    borderColor: '#F7F7F7',
    borderRadius: 5,
    borderWidth: 1,
    width: '80%',
    height: 72,
    margin: 10,
  },
  grayViewSub1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  grayViewSub2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    marginLeft: 10,
    paddingRight: 10,
    borderRightWidth: 1,
    borderColor: '#EAEAEA',
  },
  grayViewTextBottom: {
    fontSize: 14,
    lineHeight: 20,
    color: '#ADADAD',
    fontFamily: Fonts.NotoSans,
    paddingTop: 5,
  },
});
