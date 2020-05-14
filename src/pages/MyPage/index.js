//* 마이페이지

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
import ScoreInput from '../../components/Text/ScoreInput';
import ScoreLabel from '../../components/Text/ScoreLabel';
import CustomButton from '../../components/Buttons/CustomButton';
import CustomListItem from '../../components/ListItem/CustomListItem';
import LiveLabelType1 from '../../components/Text/LiveLabelType1';
import LiveCard from '../../components/Card/Live';

//* 스타일
import styles from '../../styles/common.module.scss';
import {Fonts} from '../../settings/fonts';
import {FlatList} from 'react-native-gesture-handler';

import UserImages from './UserImages';

function MyPage({userStore, navigation}) {
  const {
    state,
    setState,
    actions: {flatListRenderItem},
  } = useContext(PageContext);

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
            {/* 유저사진 */}
            <UserImages CustomStyles={CustomStyles} />

            {/* 닉네임 */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20}}>닉 우스터</Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  marginLeft: 4,
                }}>
                <View
                  style={{
                    backgroundColor: '#E5F0FF',
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 5,
                    position: 'absolute',
                  }}>
                  <Text style={{fontSize: 10, color: '#042B6C'}}>변경</Text>
                </View>
              </View>
            </View>

            {/* 상태메세지 */}
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                backgroundColor: '#F7F7F7',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 8,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  textAlign: 'center',
                  margin: 10,
                }}>
                개인 채팅 확인 잘 안합니다.
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  textAlign: 'center',
                  borderRadius: 5,
                  position: 'absolute',
                  right: 4,
                  margin: 10,
                }}>
                >
              </Text>
            </View>

            {/* 수치화 3개 */}
            <View>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginTop: 16,
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    <Image
                      source={require('../../img/icon/person.png')}
                      style={{width: 12, height: 8, marginRight: 5}}
                      resizeMode="contain"></Image>
                    <Text style={{fontSize: 20}}>30</Text>
                  </View>
                  <Text style={{fontSize: 12, color: '#ADADAD', marginTop: 5}}>
                    나를 즐겨찾는 사람
                  </Text>
                </View>

                <View
                  style={{
                    borderRightWidth: 1,
                    borderColor: '#ADADAD',
                    height: 32,
                  }}></View>

                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    <Image
                      source={require('../../img/icon/good.png')}
                      style={{width: 12, height: 12, marginRight: 5}}
                      resizeMode="contain"></Image>
                    <Text style={{fontSize: 20}}>1,054</Text>
                  </View>
                  <Text style={{fontSize: 12, color: '#ADADAD', marginTop: 5}}>
                    받은 좋아요
                  </Text>
                </View>

                <View
                  style={{
                    borderRightWidth: 1,
                    borderColor: '#ADADAD',
                    height: 32,
                  }}></View>

                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    <Image
                      source={require('../../img/icon/Star.png')}
                      style={{width: 12, height: 12, marginRight: 5}}
                      resizeMode="contain"></Image>
                    <Text style={{fontSize: 20, textAlignVertical: 'bottom'}}>
                      1,054
                    </Text>
                  </View>
                  <Text style={{fontSize: 12, color: '#ADADAD', marginTop: 5}}>
                    나의 즐겨찾기
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                borderBottomColor: '#F7F7F7',
                borderBottomWidth: 8,
                marginTop: 16,
              }}
            />

            {/* 나의 캐시 */}
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 20,
                marginTop: 16,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#1075FD', fontSize: 14, marginRight: 4}}>
                  나의 캐시
                </Text>
                <Image
                  source={require('../../img/icon/money.png')}
                  style={{width: 12, height: 12}}
                  resizeMode="contain"></Image>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 30}}>300</Text>
                <View
                  style={{
                    backgroundColor: '#E5F0FF',
                    paddingHorizontal: 8,
                    paddingHorizontal: 16,
                    paddingVertical: 2,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 14, color: '#042B6C'}}>충전하기</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                borderBottomColor: '#F7F7F7',
                borderBottomWidth: 8,
                marginTop: 16,
              }}
            />

            <FlatList
              data={state.list1}
              renderItem={({item, index}) => flatListRenderItem(item, index)}
            />

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                borderBottomColor: '#F7F7F7',
                borderBottomWidth: 8,
              }}
            />

            <FlatList
              data={state.list2}
              renderItem={({item, index}) => flatListRenderItem(item, index)}
            />
          </View>
        </View>
      )}
    </Observer>
  );
}

export default inject('userStore')(({userStore, navigation}) => {
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
