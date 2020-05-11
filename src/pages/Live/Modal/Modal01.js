import React, {useState, useEffect, useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button, Overlay, Divider} from 'react-native-elements';
import PageContext, {PageProvider} from '../Context';

//* 공통 컴포넌트
import CheckBox from '../../../components/CheckBox';
//* 스타일
import {Fonts} from '../../../settings/fonts';
export default Modal01 = () => {
  const {
    state,
    setState,
    actions: {callLogin, callSignUp, callForgot},
  } = useContext(PageContext);

  const {modalType} = state;
  const toggleOverlay = () => {
    setState((prev) => ({...prev, visible: false, modalType: null}));
  };

  return (
    <View>
      <Overlay
        isVisible={state.visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{height: 310}}>
        <View>
          <View style={{marginBottom: 20}}>
            <Text
              style={[
                CustomStyles.defualtFont,
                {fontSize: 24, fontWeight: '500', lineHeight: 35},
              ]}>
              응원팀 선택
            </Text>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
              }}>
              <Image
                source={require('../../../img/game/game1.png')}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain',
                  marginTop: 20,
                }}
              />
              <Text style={[CustomStyles.defualtFont, {fontWeight: 'bold'}]}>
                시카고컵스
              </Text>
            </View>
            <Text style={[CustomStyles.defualtFont]}>위 팀을 응원하며</Text>
            <Text style={[CustomStyles.defualtFont]}>
              닉네임 옆에 로고가 붙습니다.
            </Text>
          </View>
          <Divider />
          <View>
            <CheckBox
              title="이 알림 창을 다시 띄우지 않습니다."
              checked={state.checked}
              textStyle={[CustomStyles.checkFont]}
              onPress={() =>
                setState((prev) => ({...prev, checked: !state.checked}))
              }
            />
            <Button
              title="확인"
              buttonStyle={{backgroundColor: '#042B6C'}}
              onPress={toggleOverlay}
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
};

const CustomStyles = StyleSheet.create({
  defualtFont: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.NotoSans,
    textAlign: 'center',
  },
  checkFont: {
    fontSize: 12,
    lineHeight: 17,
    fontFamily: Fonts.NotoSans,
    color: '#929394',
    fontWeight: 'normal',
  },
});
