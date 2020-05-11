//* 라이브

import React, {useEffect, useContext} from 'react';
import {ScrollView, View, StyleSheet, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Observer, observer, inject} from 'mobx-react';
import PageContext, {PageProvider} from '../Context';

//* 공통 컴포넌트
import RoundImage from '../../../components/Image/RoundImage';
import TabChat from './TabChat';
import TabExpert from './TabExpert';
//* 스타일
import styles from '../../../styles/common.module.scss';
import {Fonts} from '../../../settings/fonts';
//* Modal
import Modal01 from '../Modal/Modal01';
function SubLive({userStore, navigation}) {
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
      TabCnt: 1,
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
    <Observer>
      {() => (
        <View style={[styles.container]}>
          <View>
            <Image source={require('../../../img/game/livegame.png')} />
          </View>
          <View style={{backgroundColor: '#F7F7F7'}}>
            <Text
              style={{
                textAlign: 'center',
                color: '#ADADAD',
                fontSize: 14,
                margin: 10,
              }}>
              3월 12일 16:00 유로파리그
            </Text>
            <View
              style={{
                flexDirection: 'column',
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  onPress={() => navigation.navigate('Live/SubPrevResult')}
                  style={[
                    CustomStyles.defualtFont,
                    {
                      textAlign: 'center',
                    },
                  ]}>
                  바샥하비르
                </Text>
                <RoundImage
                  source={require('../../../img/game/game1.png')}
                  onPress={() =>
                    setState((prev) => ({
                      ...prev,
                      visible: true,
                      modalType: 'home',
                    }))
                  }
                />
                <Text
                  style={[
                    {
                      textAlign: 'center',
                      color: '#042B6C',
                      fontFamily: Fonts.Roboto,
                      marginRight: 15,
                      fontSize: 26,
                    },
                  ]}>
                  11:45:30
                </Text>
                <RoundImage
                  source={require('../../../img/game/game2.png')}
                  onPress={() =>
                    setState((prev) => ({
                      ...prev,
                      visible: true,
                      modalType: 'away',
                    }))
                  }
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50 / 2,
                    marginRight: 0,
                  }}
                />
                <Text
                  onPress={() => navigation.navigate('Live/SubPrevResult')}
                  style={[
                    CustomStyles.defualtFont,
                    {
                      textAlign: 'center',
                    },
                  ]}>
                  코펜하겐
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <Button
              title="채팅"
              onPress={() => setState((prev) => ({...prev, TabCnt: 1}))}
              titleStyle={[
                CustomStyles.defualtFont,
                state.TabCnt == 1
                  ? CustomStyles.pickFontColor
                  : CustomStyles.nonPickFontColor,
              ]}
              buttonStyle={
                state.TabCnt == 1
                  ? CustomStyles.pickBottomStyle
                  : CustomStyles.nonPickBottomStyle
              }
            />
            <Button
              title="전문가 픽"
              onPress={() => setState((prev) => ({...prev, TabCnt: 2}))}
              titleStyle={[
                CustomStyles.defualtFont,
                state.TabCnt == 2
                  ? CustomStyles.pickFontColor
                  : CustomStyles.nonPickFontColor,
              ]}
              buttonStyle={
                state.TabCnt == 2
                  ? CustomStyles.pickBottomStyle
                  : CustomStyles.nonPickBottomStyle
              }
            />
          </View>
          <ScrollView>
            {state.TabCnt == 1 ? (
              <TabChat navigation={navigation} />
            ) : (
              <TabExpert navigation={navigation} />
            )}
          </ScrollView>
          <Modal01 />
        </View>
      )}
    </Observer>
  );
}

export default inject('userStore')(({userStore, navigation}) => {
  return (
    <PageProvider>
      {/* <HeaderScreen navigation={navigation} /> */}
      <SubLive userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});

const CustomStyles = StyleSheet.create({
  defualtFont: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.NotoSans,
  },
  pickBottomStyle: {
    height: 40,
    width: '100%',
    backgroundColor: '#F7F7F7',
    borderBottomColor: '#042B6C',
    borderBottomWidth: 4,
  },
  pickFontColor: {
    color: '#042B6C',
  },
  nonPickBottomStyle: {
    height: 40,
    width: '100%',
    backgroundColor: '#F7F7F7',
    borderBottomColor: 'rgba(146, 147, 148, 0.13)',
    borderBottomWidth: 1,
  },
  nonPickFontColor: {
    color: '#929394',
  },
});
