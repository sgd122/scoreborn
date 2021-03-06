//* 마이페이지

import React, { useEffect, useContext } from 'react';
import {
  ScrollView,
  View,
  Image,
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
import { FlatList } from 'react-native-gesture-handler';

//* 컴퍼넌트
import UserImages from './SubPage/UserInfo/UserImages';
import UserNickName from './SubPage/UserInfo/UserNickName';
import UserStatusText from './SubPage/UserInfo/UserStatusText';
import UserLikeCount from './SubPage/UserInfo/UserLikeCount';
import UserCash from './SubPage/UserInfo/UserCash';

function MyPage({ userStore, navigation }) {
  const { state, setState, } = useContext(PageContext);

  useEffect(() => {
    //* Navigation
    setState((prev) => ({ ...prev, navigation: navigation }));

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
          <ScrollView>
            {/* 유저사진 */}
            <UserImages CustomStyles={CustomStyles} />

            {/* 닉네임 */}
            <UserNickName CustomStyles={CustomStyles} navigation={navigation} />

            {/* 상태메세지 */}
            <UserStatusText CustomStyles={CustomStyles} navigation={navigation} />

            {/* 수치화 3개 */}
            <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={CustomStyles.UserLikeCountOutter}>
                <UserLikeCount
                  CustomStyles={CustomStyles}
                  img={require('../../img/icon/person.png')}
                  count={30}
                  title="나를 즐겨찾는 사람"
                  move='MyPage/Follow'
                  navigation={navigation}
                />
                {/* 세로줄 */}
                <HorizontalLine />

                <UserLikeCount
                  CustomStyles={CustomStyles}
                  img={require('../../img/icon/good.png')}
                  count={1054}
                  title="받은 좋아요"
                  move=""
                  navigation={navigation}
                />
                {/* 세로줄 */}
                <HorizontalLine />
                <UserLikeCount
                  CustomStyles={CustomStyles}
                  img={require('../../img/icon/Star.png')}
                  count={1054}
                  title="나의 즐겨찾기"
                  move='MyPage/FavoritPage'
                  navigation={navigation}
                />
              </View>
            </View>
            {/* 굵은 가로줄 */}
            <VerticalGrayLine />

            {/* 나의 캐시 */}
            <UserCash CustomStyles={CustomStyles} />

            {/* 굵은 가로줄 */}
            <VerticalGrayLine />

            <CustomTextList data={state.list1} />

            {/* 굵은 가로줄 */}
            <VerticalGrayLine />

            <CustomTextList data={state.list2} />
          </ScrollView>
        </View>
      )}
    </Observer>
  );
}

export default inject('userStore')(({ userStore, navigation }) => {
  return (
    <PageProvider>
      <MyPage userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});

const CustomStyles = StyleSheet.create({
  UserImagesView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 16,
  },
  UserImagesCamera: {
    width: 16,
    height: 16,
    borderRadius: 12,
    zIndex: 1,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  UserNickNameView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  UserNickNameChangeOuter: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 4,
  },
  UserNickNameChangeInner: {
    backgroundColor: '#E5F0FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    position: 'absolute',
  },
  UserStatusTextView: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 8,
    borderRadius: 5,
  },
  UserStatusTexttext: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
  },
  UserStatusTextRight: {
    fontSize: 14,
    textAlign: 'center',
    borderRadius: 5,
    position: 'absolute',
    fontFamily: Fonts.NotoSans,
    right: 12,
  },
  UserLikeCountOutter: {
    width: '80 %',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  UserLikeCountView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  UserLikeCountText: {
    fontSize: 20,
    fontFamily: Fonts.NotoSans,
    fontWeight: 'bold',
    lineHeight: 29,
    letterSpacing: -0.035,
    marginBottom: -8
  },
  UserLikeCountBootomText: {
    fontSize: 12,
    fontFamily: Fonts.NotoSans,
    color: '#ADADAD',
    letterSpacing: -0.09
  },

  UserCashView: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    marginTop: 16,
  },
  UserCashCharge: {
    backgroundColor: '#E5F0FF',
    paddingHorizontal: 8,
    paddingHorizontal: 16,
    paddingVertical: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  UserCashText: {
    color: '#1075FD',
    fontSize: 14,
    marginRight: 4,
    fontFamily: Fonts.NotoSans
  },
  HorizontalLine: {
    borderRightWidth: 1,
    borderColor: '#ADADAD',
    height: 32,
  },
  VerticalGrayLine: {
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: '#F7F7F7',
    borderBottomWidth: 8,
    marginTop: 16,
  },

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

