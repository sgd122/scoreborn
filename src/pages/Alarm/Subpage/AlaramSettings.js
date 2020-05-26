//* 알림 설정

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
import PageContext, {PageProvider} from '../Context';

//* 공통 컴포넌트
import VerticalGrayLine from '../../../components/Line/VerticalGrayLine';
import HorizontalLine from '../../../components/Line/HorizontalLine';
import CustomTextList from '../../../components/ListItem/CustomTextList';

//* 스타일
import styles from '../../../styles/common.module.scss';
import {Fonts} from '../../../settings/fonts';
import {FlatList} from 'react-native-gesture-handler';

function AlarmSettings({userStore, navigation}) {
  const {state, setState} = useContext(PageContext);

  useEffect(() => {
    //* Navigation
    setState((prev) => ({...prev, navigation: navigation}));

    setState((prev) => ({
      ...prev,
    }));
  }, []);

  return (
    <Observer>
      {() => (
        <View style={[styles.container]}>
          <View>
            <Text>2</Text>
          </View>
        </View>
      )}
    </Observer>
  );
}

export default inject('userStore')(({userStore, navigation}) => {
  return (
    <PageProvider>
      <AlarmSettings userStore={userStore} navigation={navigation} />
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
