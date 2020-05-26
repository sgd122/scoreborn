//* 마이페이지

import React, {useEffect, useContext} from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import {Divider} from 'react-native-elements';
import {Observer, observer, inject} from 'mobx-react';
import PageContext, {PageProvider} from './Context';

//* 공통 컴포넌트
import VerticalGrayLine from '../../components/Line/VerticalGrayLine';
import HorizontalLine from '../../components/Line/HorizontalLine';
import CustomTextList from '../../components/ListItem/CustomTextList';
import SquareImage from '../../components/Image/SquareImage';
import CustomListChatRoom from '../../components/ListItem/CustomListChatRoom';

//* 스타일
import styles from '../../styles/common.module.scss';
import {Fonts} from '../../settings/fonts';

const ScreenHeight = Dimensions.get('window').height;

function ChatRoomList({userStore, navigation}) {
  const {state, setState} = useContext(PageContext);

  useEffect(() => {
    //* Navigation
    setState((prev) => ({...prev, navigation: navigation}));

    setState((prev) => ({
      ...prev,
      list: [
        {
          name: '1',
          subtitle: '러셀은 안전하게 2아웃 잘 잡습니다.',
          time: '경기종료',
        },
        {
          name: '1',
          subtitle: '러셀은 안전하게 2아웃 잘 잡습니다.',
          time: '경기종료',
        },
      ],
    }));
  }, []);

  return (
    <Observer>
      {() => (
        <View style={[styles.container]}>
          <CustomListChatRoom list={state.list} />
        </View>
      )}
    </Observer>
  );
}

export default inject('userStore')(({userStore, navigation}) => {
  return (
    <PageProvider>
      <ChatRoomList userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});

const CustomStyles = StyleSheet.create({
  defualtFont: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.NotoSans,
  },
  tagFont: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.NotoSans,
    color: '#ADADAD',
    marginRight: 5,
  },
  headFont: {
    fontSize: 16,
    lineHeight: 23,
    fontWeight: 'bold',
    fontFamily: Fonts.NotoSans,
  },
  detailFont: {
    fontSize: 14,
    lineHeight: 20,
    color: '#929394',
    fontFamily: Fonts.NotoSans,
    margin: 5,
  },
  LeftImage: {
    margin: 7,
  },
  LeftSide: {
    height: ScreenHeight,
    backgroundColor: '#FAFAFA',
    borderRightColor: '#DEE3EB',
    borderRightWidth: 1,
  },
});
