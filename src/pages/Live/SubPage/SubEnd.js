//* 라이브

import React, {useEffect, useContext} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
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
function SubEnd({userStore, navigation}) {
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
          <View style={{backgroundColor: '#F7F7F7'}}>
            <View
              style={{
                borderColor: '#FFF',
                borderRadius: 5,
                backgroundColor: '#FFF',
                padding: 5,
                marginLeft: 60,
                marginRight: 60,
                margin: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#ADADAD',
                  fontSize: 14,
                  lineHeight: 20,
                  letterSpacing: -0.04,
                }}>
                3월 12일 16:00 유로파리그
              </Text>
            </View>
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
                  style={[
                    CustomStyles.defualtFont2,
                    {
                      textAlign: 'center',
                    },
                  ]}>
                  바샥하비르
                </Text>
                <RoundImage
                  source={require('../../../img/game/game1.png')}
                  size={32}
                  style={{marginLeft: 5}}
                />
                <Text
                  style={[
                    {
                      textAlign: 'center',
                      color: '#042B6C',
                      fontFamily: Fonts.Roboto,
                      fontWeight: 'normal',
                      lineHeight: 31,
                      fontSize: 26,
                      letterSpacing: -0.025,
                      marginLeft: 5,
                      marginRight: 5,
                    },
                  ]}>
                  11:45:30
                </Text>
                <RoundImage
                  source={require('../../../img/game/game2.png')}
                  size={32}
                  style={{marginRight: 5}}
                />
                <Text
                  style={[
                    CustomStyles.defualtFont2,
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
              <TabExpert navigation={navigation} type={'End'} />
            )}
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
      <SubEnd userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});

const CustomStyles = StyleSheet.create({
  defualtFont: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: -0.09,
    fontStyle: 'normal',
    fontFamily: Fonts.NotoSans,
  },
  defualtFont2: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
    letterSpacing: -0.09,
    fontStyle: 'normal',
    fontFamily: Fonts.Roboto,
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
