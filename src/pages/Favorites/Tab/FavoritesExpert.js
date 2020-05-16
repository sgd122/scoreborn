//* 나의 즐겨찾기

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
import PageContext, {PageProvider} from '../Context';

//* 공통 컴포넌트
import CustomChatCard from '../../../components/Card/Chat';
import PickCard from '../../../components/Card/Pick/PickCard';
import CustomTextList from '../../../components/ListItem/CustomTextList';

//* 스타일
import styles from '../../../styles/common.module.scss';
import {Fonts} from '../../../settings/fonts';
import {FlatList} from 'react-native-gesture-handler';

function FavoritesExpert({userStore, navigation}) {
  const {state, setState} = useContext(PageContext);

  useEffect(() => {
    //* Navigation
    setState((prev) => ({...prev, navigation: navigation}));

    setState((prev) => ({
      ...prev,
      list: [
        {
          name: '김덕중',
          subtitle: '前 SPOTIVE 뉴스 팀장스포츠 빅데이터 분석기관',
          leagueName: '16:00 잉글랜드 PD리그',
          detail: '세상에서 제일 쉬운 조합만 모아서 준비했어요',
          live: '5분 전 새로운 전문가픽을 게시했습니다.',
          cnt: 115,
        },
        {
          name: '스포츠 어드벤쳐',
          subtitle: '스포츠 빅데이터 전문기관',
          detail: '세상에서 제일 쉬운 조합만 모아서 준비했어요',
          live: '승률이 88.5%로 상승했습니다.',
          cnt: 53662,
        },
        {
          name: '김덕중',
          subtitle: '前 SPOTIVE 뉴스 팀장스포츠 빅데이터 분석기관',
          leagueName: '16:00 잉글랜드 PD리그',
          detail: '세상에서 제일 쉬운 조합만 모아서 준비했어요',
          live: '5분 전 새로운 전문가픽을 게시했습니다.',
          cnt: 115,
        },
        {
          name: '스포츠 어드벤쳐',
          subtitle: '스포츠 빅데이터 전문기관',
          detail: '세상에서 제일 쉬운 조합만 모아서 준비했어요',
          live: '승률이 88.5%로 상승했습니다.',
          cnt: 53662,
        },
        {
          name: '김덕중',
          subtitle: '前 SPOTIVE 뉴스 팀장스포츠 빅데이터 분석기관',
          leagueName: '16:00 잉글랜드 PD리그',
          detail: '세상에서 제일 쉬운 조합만 모아서 준비했어요',
          live: '5분 전 새로운 전문가픽을 게시했습니다.',
          cnt: 115,
        },
        {
          name: '스포츠 어드벤쳐',
          subtitle: '스포츠 빅데이터 전문기관',
          detail: '세상에서 제일 쉬운 조합만 모아서 준비했어요',
          live: '승률이 88.5%로 상승했습니다.',
          cnt: 53662,
        },
        {
          name: '김덕중',
          subtitle: '前 SPOTIVE 뉴스 팀장스포츠 빅데이터 분석기관',
          leagueName: '16:00 잉글랜드 PD리그',
          detail: '세상에서 제일 쉬운 조합만 모아서 준비했어요',
          live: '5분 전 새로운 전문가픽을 게시했습니다.',
          cnt: 115,
        },
        {
          name: '스포츠 어드벤쳐',
          subtitle: '스포츠 빅데이터 전문기관',
          detail: '세상에서 제일 쉬운 조합만 모아서 준비했어요',
          live: '승률이 88.5%로 상승했습니다.',
          cnt: 53662,
        },
      ],
    }));
  }, []);

  return (
    <Observer>
      {() => (
        <View style={[styles.container]}>
          <View>
            <PickCard data={state.list} type={'like'} />
          </View>
        </View>
      )}
    </Observer>
  );
}

export default inject('userStore')(({userStore, navigation}) => {
  return (
    <PageProvider>
      <FavoritesExpert userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});

const CustomStyles = StyleSheet.create({
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
});
