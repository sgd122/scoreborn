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
import ScoreInput from '../../components/Text/ScoreInput';
import ScoreLabel from '../../components/Text/ScoreLabel';
import CustomButton from '../../components/Buttons/CustomButton';
import CustomListItem from '../../components/ListItem/CustomListItem';
import LiveLabelType1 from '../../components/Text/LiveLabelType1';
import LiveCard from '../../components/Card/Live';

//* 스타일
import styles from '../../styles/common.module.scss';
import { FlatList } from 'react-native-gesture-handler';

function MyPage({ userStore, navigation }) {
  const {
    state,
    setState,
    actions: { callMyPage },
  } = useContext(PageContext);

  useEffect(() => {
    //* Navigation
    setState((prev) => ({ ...prev, navigation: navigation }));

    setState((prev) => ({
      ...prev,
      list1: [
        {
          id: '1',
          name: '구입한 전문가 픽',
          navigation: '전문가'
        },
        {
          id: '2',
          name: '내가 작성한 글',
          navigation: '작성한글'
        },
      ],
      list2: [
        {
          id: '3',
          name: '설정',
          navigation: '설정'
        },
        {
          id: '4',
          name: '고객센터',
          navigation: '작성한글'
        },
      ],
    }
    ));
  }, []);

  function flatListRenderItem(item, index) {
    console.log("index", index)
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={{ width: '100%', paddingHorizontal: 20, paddingVertical: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.name}</Text>
        </View>
        {
          (index !== 1) ?
            <View style={{
              flexDirection: 'row', width: '100%', paddingHorizontal: 20,
              borderBottomColor: '#F7F7F7', borderBottomWidth: 1,
            }} />
            : null
        }

      </View>

    );
  }

  return (
    <Observer>
      {() => (
        <View style={[styles.container]}>
          {/* <ScrollView>{callMyPage()}</ScrollView> */}
          <View>
            {/* 유저사진 */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', marginTop: 16 }}>
              <View>
                <Image source={require('../../img/userImage/myImage.png')}
                  style={{ width: 56, height: 56, borderRadius: 28 }}
                  resizeMode='contain'
                />
                <Image source={require('../../img/userImage/camera.png')}
                  style={{
                    width: 16, height: 16, borderRadius: 12, zIndex: 1, position: 'absolute',
                    right: 0, bottom: 0

                  }}
                  resizeMode='contain'
                />
              </View>
            </View>

            {/* 닉네임 */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20 }}>닉 우스터</Text>
              <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginLeft: 4 }}>
                <View style={{
                  backgroundColor: '#E5F0FF', paddingHorizontal: 8,
                  paddingVertical: 4, borderRadius: 5, position: 'absolute'
                }}>
                  <Text style={{ fontSize: 10, color: '#042B6C' }}>변경</Text>
                </View>
              </View>
            </View>

            {/* 상태메세지 */}
            <View style={{
              flexDirection: 'row', width: '90%', backgroundColor: '#F7F7F7',
              justifyContent: 'center', alignSelf: 'center', marginTop: 8
            }}>
              <Text style={{ fontSize: 14, textAlign: 'center', borderRadius: 5 }}>개인 채팅 확인 잘 안합니다.</Text>
              <Text style={{
                fontSize: 14, textAlign: 'center', borderRadius: 5,
                position: 'absolute', right: 4
              }}>></Text>
            </View>

            {/* 수치화 3개 */}
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 16 }}>

              <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                  <Image source={require('../../img/icon/person.png')} style={{ width: 12, height: 8 }} resizeMode='contain'></Image>
                  <Text style={{ fontSize: 20 }}>30</Text>
                </View>
                <Text style={{ fontSize: 12, color: '#ADADAD' }}>나를 즐겨찾는 사람</Text>
              </View>

              <View style={{ borderRightWidth: 1, borderColor: '#ADADAD', height: 32 }}></View>

              <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                  <Image source={require('../../img/icon/good.png')} style={{ width: 12, height: 12 }} resizeMode='contain'></Image>
                  <Text style={{ fontSize: 20 }}>1,054</Text>
                </View>
                <Text style={{ fontSize: 12, color: '#ADADAD' }}>받은 좋아요</Text>
              </View>

              <View style={{ borderRightWidth: 1, borderColor: '#ADADAD', height: 32 }}></View>

              <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                  <Image source={require('../../img/icon/Star.png')} style={{ width: 12, height: 12 }} resizeMode='contain'></Image>
                  <Text style={{ fontSize: 20, textAlignVertical: 'bottom' }}>1,054</Text>
                </View>
                <Text style={{ fontSize: 12, color: '#ADADAD' }}>나의 즐겨찾기</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', width: '100%', borderBottomColor: '#F7F7F7', borderBottomWidth: 8, marginTop: 16 }} />

            {/* 나의 캐시 */}
            <View style={{ flexDirection: 'column', paddingHorizontal: 20, marginTop: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Text style={{ color: '#1075FD', fontSize: 14, marginRight: 4 }}>나의 캐시</Text>
                <Image source={require('../../img/icon/money.png')} style={{ width: 12, height: 12 }} resizeMode='contain'></Image>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 30, fontFamily: 'bold' }}>300</Text>
                <View style={{
                  backgroundColor: '#E5F0FF', paddingHorizontal: 8,
                  paddingHorizontal: 16, paddingVertical: 2, borderRadius: 5,
                  justifyContent: 'center', alignItems: 'center'
                }}>
                  <Text style={{ fontSize: 14, color: '#042B6C' }}>충전하기</Text>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row', width: '100%', borderBottomColor: '#F7F7F7', borderBottomWidth: 8, marginTop: 16 }} />

            <FlatList
              data={state.list1}
              renderItem={({ item, index }) => flatListRenderItem(item, index)}
            />

            <View style={{ flexDirection: 'row', width: '100%', borderBottomColor: '#F7F7F7', borderBottomWidth: 8, }} />

            <FlatList
              data={state.list2}
              renderItem={({ item, index }) => flatListRenderItem(item, index)}
            />
          </View>
        </View>
      )
      }
    </Observer >
  );
}

export default inject('userStore')(({ userStore, navigation }) => {
  return (
    <PageProvider>
      {/* <HeaderScreen navigation={navigation} /> */}
      <MyPage userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});
