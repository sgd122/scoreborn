import React, {useEffect, useContext} from 'react';
//* 전문가픽
import {ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import {Observer, observer, inject} from 'mobx-react';
import PageContext, {PageProvider} from './Context';

//* 공통 컴포넌트
import PickCard from '../../components/Card/Pick/PickCard';
import CustomListChat from '../../components/ListItem/CustomListChat';
import RoundImage from '../../components/Image/RoundImage';

//* 스타일
import styles from '../../styles/common.module.scss';
import {Fonts} from '../../settings/fonts';

export default function ContentOtherExpect({userStore, navigation}) {
  const {
    state,
    setState,
    actions: {callLogin, callSignUp, callForgot},
  } = useContext(PageContext);

  useEffect(() => {}, []);

  return (
    <View>
      <Card containerStyle={[CustomStyles.defaultCard]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={CustomStyles.defualtFont}>이 전문가의 다른 픽</Text>
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
        <CustomListChat
          list={state.header_list}
          type="Chat"
          navigation={navigation}
        />
      </Card>
    </View>
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

    marginBottom: 10,
    marginTop: 0,

    marginLeft: 10,
    marginRight: 10,
  },
  defualtFont: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.NotoSans,
  },
  gameFont: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 23,
    color: '#042B6C',
    fontFamily: Fonts.NotoSans,
  },
  etcFont: {
    fontSize: 12,
    lineHeight: 17,
    color: '#929394',
    fontFamily: Fonts.NotoSans,
  },
});
