//* 라이브

import React, {useEffect, useContext} from 'react';
import {Button, View, Image, StyleSheet, Text, TextInput} from 'react-native';
import {Observer, observer, inject} from 'mobx-react';
import PageContext, {PageProvider} from './Context';

//* 공통 컴포넌트
import ScoreInput from '../../components/Text/ScoreInput';
import ScoreLabel from '../../components/Text/ScoreLabel';
import CustomButton from '../../components/Buttons/CustomButton';
import HeaderScreen from '../../settings/navigation/Screen/HeaderScreen';

//* 스타일
import styles from '../../styles/common.module.scss';

function AnalysisPage({userStore, navigation}) {
  const {
    state,
    setState,
    actions: {callLogin, callSignUp, callForgot},
  } = useContext(PageContext);

  useEffect(() => {
    //* Navigation
    setState((prev) => ({...prev, navigation: navigation}));
    // TODO: 로그인여부 체크
  }, []);

  return (
    <Observer>
      {() => (
        <View style={[styles.container]}>
          <View style={[styles.header]}></View>
          <View style={[styles.title, {}]}>
            <Image
              style={{width: '90%', resizeMode: 'contain'}}
              source={require('../../img/logo/loginLogo1.png')}
            />
          </View>
          <View style={[styles.content]}>
            {/* Input */}
            <ScoreLabel>아이디</ScoreLabel>
            <ScoreInput
              placeholder="user01@scorebone.com"
              onChangeText={(text) => setState((prev) => ({...prev, id: text}))}
              value={state.id}
            />

            <CustomButton
              buttonColor={'#fff'}
              titleColor={'#292C30'}
              title={'아이디/비밀번호로 찾기'}
              onPress={() => callForgot()}
            />
          </View>
          <View style={[styles.footer]}></View>
        </View>
      )}
    </Observer>
  );
}

export default inject('userStore')(({userStore, navigation}) => {
  return (
    <PageProvider>
      {/* <HeaderScreen navigation={navigation} /> */}
      <AnalysisPage userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});
