import React, {useEffect, useContext} from 'react';
//* 전문가픽
import {ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import {Observer, observer, inject} from 'mobx-react';
import PageContext, {PageProvider} from './Context';

//* 공통 컴포넌트
import PickCard from '../../components/Card/Pick/PickCard';
import RoundImage from '../../components/Image/RoundImage';
import VerticalGrayLine from '../../components/Line/VerticalGrayLine';

//* 스타일
import styles from '../../styles/common.module.scss';
import {Fonts} from '../../settings/fonts';

export default function ContentOtherPick({userStore, navigation}) {
  const {
    state,
    setState,
    actions: {callLogin, callSignUp, callForgot},
  } = useContext(PageContext);

  useEffect(() => {}, []);

  return (
    <>
      <VerticalGrayLine style={{marginTop: 16, marginBottom: 16}} />
      <View
        style={{
          backgroundColor: '#fff',
          marginLeft: 10,
          marginRight: 10,
        }}>
        {/* <Card containerStyle={[CustomStyles.defaultCard]}> */}
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
          <Text style={[CustomStyles.defualtFont]}>이 전문가의 다른 픽</Text>
          <RoundImage
            source={require('../../img/game/game1.png')}
            style={{
              width: 20,
              height: 20,
              borderRadius: 20 / 2,
              marginLeft: 5,
            }}
          />
        </View>
        <PickCard data={state.list} type={'nc_game'} />
        {/* </Card> */}
      </View>
    </>
  );
}

const CustomStyles = StyleSheet.create({
  defaultCard: {
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
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 23,
    fontFamily: Fonts.NotoSans,
    letterSpacing: -0.09,
  },
});
