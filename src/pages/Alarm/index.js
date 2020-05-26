//* 알림

import React, {useEffect, useContext} from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {Observer, observer, inject} from 'mobx-react';
import PageContext, {PageProvider} from './Context';

//* 공통 컴포넌트
import VerticalGrayLine from '../../components/Line/VerticalGrayLine';
import HorizontalLine from '../../components/Line/HorizontalLine';
import CustomTextList from '../../components/ListItem/CustomTextList';

//* 스타일
import styles from '../../styles/common.module.scss';
import {Fonts} from '../../settings/fonts';
import {FlatList} from 'react-native-gesture-handler';

function AlarmScreen({userStore, navigation}) {
  const {state, setState} = useContext(PageContext);

  useEffect(() => {
    //* Navigation
    setState((prev) => ({...prev, navigation: navigation}));

    setState((prev) => ({
      ...prev,
      list1: [
        {
          id: '1',
          name: '구입한 전문가 픽',
          navigation: '전문가',
        },
        {
          id: '2',
          name: '내가 작성한 글',
          navigation: '작성한글',
        },
      ],
      list2: [
        {
          id: '3',
          name: '설정',
          navigation: '설정',
        },
        {
          id: '4',
          name: '고객센터',
          navigation: '작성한글',
        },
      ],
    }));
  }, []);

  return (
    <Observer>
      {() => (
        <View style={[styles.container]}>
          <View>
            <Text>1</Text>
          </View>
        </View>
      )}
    </Observer>
  );
}

export default inject('userStore')(({userStore, navigation}) => {
  return (
    <PageProvider>
      <AlarmScreen userStore={userStore} navigation={navigation} />
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
});
