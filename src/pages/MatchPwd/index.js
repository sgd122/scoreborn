//* 아이디/비밀번호 찾기 (비밀번호)

import React, { useEffect, useContext } from 'react';
import { Button, View, Image, StyleSheet, Text, TextInput } from 'react-native';
import { Observer, observer, inject } from 'mobx-react';
import PageContext, { PageProvider } from './Context';

//* 공통 컴포넌트
import CheckBox from '../../components/CheckBox';
import ScoreInput from '../../components/Text/ScoreInput';
import ScoreLabel from '../../components/Text/ScoreLabel';
import CustomButton from '../../components/Buttons/CustomButton';

//* 스타일
import styles from '../../styles/common.module.scss';

function SignUp({ userStore, navigation }) {
  const {
    state,
    setState,
    actions: { callForgot },
  } = useContext(PageContext);

  useEffect(() => {
    //* Navigation
    setState((prev) => ({ ...prev, navigation: navigation }));

    // TODO: 로그인여부 체크
  }, []);

  return (
    <Observer>
      {() => (
        <View style={[styles.container, { padding: 20 }]}>
          {/* Input */}
          <ScoreLabel>아이디</ScoreLabel>
          <ScoreInput
            style={{ width: '100%' }}
            placeholder="user01@scorebone.com"
            onChangeText={(text) => setState((prev) => ({ ...prev, id: text }))}
            value={state.id}
          />

          <ScoreLabel>휴대폰번호</ScoreLabel>
          <ScoreInput
            style={{ width: '100%' }}
            placeholder="010-1234-5678"
            onChangeText={(text) => setState((prev) => ({ ...prev, id: text }))}
            value={state.id}
          />

          <ScoreLabel>인증번호</ScoreLabel>
          <ScoreInput
            style={{ width: '100%' }}
            placeholder="4자리 수의 인증번호를 입력하세요."
            onChangeText={(text) => setState((prev) => ({ ...prev, id: text }))}
            value={state.id}
          />

          {/* Buttons */}
          <CustomButton
            style={{ width: '100%' }}
            buttonColor={'#ADADAD'}
            // buttonColor={'#042B6C'}
            title={'비밀번호 재 설정'}
            onPress={() => callForgot()}
          />
        </View>
      )}
    </Observer>
  );
}

export default inject('userStore')(({ userStore, navigation }) => {
  return (
    <PageProvider>
      <SignUp userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});
