//* 게시판

import React, {useEffect, useContext} from 'react';
import {Button, View, Image, StyleSheet, Text, TextInput} from 'react-native';
import {Input} from 'react-native-elements';
import {Observer, observer, inject} from 'mobx-react';
import PageContext, {PageProvider} from '../Context';

//* 공통 컴포넌트
import CustomTrend from '../../../components/Card/Trend';
import ScoreLabel from '../../../components/Text/ScoreLabel';
import CustomSelect from '../../../components/Select/CustomSelect';
import CustomListItem from '../../../components/ListItem/CustomListItem';
import HeaderScreen from '../../../settings/navigation/Screen/HeaderScreen';

//* 스타일
import styles from '../../../styles/common.module.scss';
import {Fonts} from '../../../settings/fonts';

function CreateBoard({userStore, navigation}) {
  const {
    state,
    setState,
    actions: {callLogin, callSignUp, callForgot},
  } = useContext(PageContext);

  useEffect(() => {
    //* Navigation
    setState((prev) => ({...prev, navigation: navigation}));
  }, []);

  const Content = () => {
    return (
      <TextInput
        placeholder={'내용'}
        style={[CustomStyles.defualtFont]}
        multiline={true}
        numberOfLines={20}
        onChangeText={(text) =>
          setState((prev) => ({
            ...prev,
            content: text,
          }))
        }
        value={state.content}
      />
    );
  };

  const Picture = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 16,
        }}>
        <Image
          style={{width: 17}}
          resizeMode="contain"
          source={require('../../../img/icon/Picture.png')}
        />
        <Text
          style={[CustomStyles.defualtFont, {color: '#042B6C', marginLeft: 8}]}>
          사진 추가
        </Text>
      </View>
    );
  };

  return (
    <Observer>
      {() => (
        <View style={[styles.container]}>
          <View style={CustomStyles.defaultCard}>
            <CustomSelect />
          </View>
          <View style={CustomStyles.defaultCard}>
            <Text style={[CustomStyles.defualtFont, {color: '#ADADAD'}]}>
              제목
            </Text>
          </View>
          <View>
            {/* 내용 */}
            <Content />
          </View>

          {/* Bottom */}
          <View style={[CustomStyles.defaultCard, CustomStyles.bottomView]}>
            <Picture />
          </View>
        </View>
      )}
    </Observer>
  );
}

export default inject('userStore')(({userStore, navigation}) => {
  return (
    <PageProvider>
      {/* <HeaderScreen navigation={navigation} /> */}
      <CreateBoard userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});

const CustomStyles = StyleSheet.create({
  defaultCard: {
    backgroundColor: '#FAFAFA',
    borderBottomWidth: 1,
    borderColor: 'rgba(146, 147, 148, 0.13)',
    height: 40,
    justifyContent: 'center',
  },
  bottomView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  defualtFont: {
    fontFamily: Fonts.NotoSans,
    fontSize: 16,
    lineHeight: 23,
    letterSpacing: -0.09,
    marginLeft: 16,
  },
});
