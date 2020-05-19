//* 마이페이지

import React, { useEffect, useContext } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import { Observer, observer, inject } from 'mobx-react';
import PageContext, { PageProvider } from './Context';

//* 공통 컴포넌트
import VerticalGrayLine from '../../components/Line/VerticalGrayLine';
import HorizontalLine from '../../components/Line/HorizontalLine';
import CustomTextList from '../../components/ListItem/CustomTextList';

//* 스타일
import styles from '../../styles/common.module.scss';
import { Fonts } from '../../settings/fonts';



const max = 120;
function StatusMessageChange({ userStore, navigation }) {
  const { state, setState, } = useContext(PageContext);

  useEffect(() => {
    //* Navigation
    setState((prev) => ({ ...prev, navigation: navigation }));

    setState((prev) => ({
      ...prev,
    }));
  }, []);

  return (
    <Observer>
      {() => (
        <View style={[styles.container]}>
          <View style={CustomStyles.NickNameChangeView}>
            <View style={{ width: '80%' }}>
              <Text style={CustomStyles.NickNameChangeViewTitle}>프로필 메시지 설정</Text>
              <View>
                <View style={CustomStyles.StatusMessageInputBox}>
                  <TextInput
                    value={state.inputText}
                    onChangeText={(text) => setState((prev) => ({ ...prev, inputText: text }))}
                    style={{
                      marginLeft: 8,
                      textAlignVertical: 'top',
                      height: 124,
                    }}
                    placeholder={'상태 메세지'}
                    maxLength={120}
                    multiline={true}
                  >
                  </TextInput>
                  <View style={{ position: 'absolute', bottom: 0, right: 12, }}>
                    <Text style={{ color: '#929394' }}>{(state.inputText ? state.inputText.length : 0) + '/' + max}</Text>
                  </View>
                </View>
              </View>

            </View>
          </View>
        </View>
      )}
    </Observer>
  );
}

export default inject('userStore')(({ userStore, navigation }) => {
  return (
    <PageProvider>
      <StatusMessageChange userStore={userStore} navigation={navigation} />
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
  NickNameChangeView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32
  },
  NickNameChangeViewTitle: {
    fontFamily: Fonts.NotoSans,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.09,
    color: '#292C30'
  },
  NickNameChangeViewBottom: {
    fontFamily: Fonts.NotoSans,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.09,
    color: '#ADADAD',
    marginTop: 4
  },
  StatusMessageInputBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    width: '100%',
    height: 120,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8
  },
});

