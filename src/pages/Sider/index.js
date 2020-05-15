//* Left Side

import React, {useEffect, useContext} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Divider} from 'react-native-elements';
import {Observer, observer, inject} from 'mobx-react';
import PageContext, {PageProvider} from './Context';

//* 공통 컴포넌트
import VerticalGrayLine from '../../components/Line/VerticalGrayLine';
import HorizontalLine from '../../components/Line/HorizontalLine';
import CustomTextList from '../../components/ListItem/CustomTextList';
import RoundImage from '../../components/Image/RoundImage';

//* 스타일
import styles from '../../styles/common.module.scss';
import {Fonts} from '../../settings/fonts';

//* 컴퍼넌트
import UserStatusText from './SubPage/UserStatusText';
import UserGameText from './SubPage/UserGameText';

function CustomSider({userStore, navigation}) {
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
        <View style={[styles.container, {marginTop: 60}]}>
          <View style={{alignItems: 'center'}}>
            <RoundImage
              source={require('../../img/game/game1.png')}
              name="닉우스터"
            />
          </View>
          <UserStatusText CustomStyles={CustomStyles} />

          <Divider style={{margin: 20}} />

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image source={require('../../img/bottom/LIVE_Check.png')} />
            <Text style={{marginLeft: 5}}>종목별로 보기</Text>
          </View>

          <UserGameText CustomStyles={CustomStyles} />

          <Divider style={{margin: 20}} />

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={CustomStyles.Circle}>
              <Image
                source={require('../../img/icon/dice.png')}
                style={{width: 18}}
                resizeMode="contain"
              />
              <Text>토토</Text>
            </View>
            <View style={CustomStyles.Circle}>
              <Image
                source={require('../../img/icon/Star4.png')}
                style={{width: 18, marginBottom: 3}}
                resizeMode="contain"
              />
              <Text>즐겨찾기</Text>
            </View>
            <View style={CustomStyles.Circle}>
              <Image
                source={require('../../img/icon/Star4.png')}
                style={{width: 18, marginBottom: 3}}
                resizeMode="contain"
              />
              <Text>MY</Text>
            </View>
          </View>
        </View>
      )}
    </Observer>
  );
}

export default inject('userStore')(({userStore, navigation}) => {
  return (
    <PageProvider>
      <CustomSider userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});

const CustomStyles = StyleSheet.create({
  UserImagesView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 16,
  },
  UserImagesCamera: {
    width: 16,
    height: 16,
    borderRadius: 12,
    zIndex: 1,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  UserStatusTextView: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#F7F7F7',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 8,
    borderRadius: 5,
  },
  UserStatusTexttext: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
  },
  UserStatusTextRight: {
    fontSize: 14,
    textAlign: 'center',
    borderRadius: 5,
    position: 'absolute',
    right: 4,
    margin: 10,
  },

  UserGameTextView: {
    backgroundColor: '#F7F7F7',
    width: '42%',
    marginTop: 8,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  UserGameTexttext: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
  },

  Circle: {
    backgroundColor: '#E5F0FF',
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    alignItems: 'center',
    justifyContent: 'center',
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
});
