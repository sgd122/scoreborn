import React, {useEffect, useContext} from 'react';
//* 전문가픽
import {ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import {Observer, observer, inject} from 'mobx-react';
import PageContext, {PageProvider} from './Context';

//* 공통 컴포넌트
import PickCard from '../../components/Card/Pick/PickCard';
import RoundImage from '../../components/Image/RoundImage';

//* 스타일
import styles from '../../styles/common.module.scss';
import {Fonts} from '../../settings/fonts';

export default function ContentExpect({userStore, navigation}) {
  const {
    state,
    setState,
    actions: {callLogin, callSignUp, callForgot},
  } = useContext(PageContext);

  useEffect(() => {}, []);

  return (
    <View>
      <Card containerStyle={[CustomStyles.defaultCard]}>
        <View style={{alignItems: 'center'}}>
          <Text style={CustomStyles.defualtFont}>예상우승팀</Text>
          <RoundImage source={require('../../img/game/game1.png')} />
          <Text style={[CustomStyles.gameFont]}>시카고 컵스</Text>
        </View>
        <Divider style={{margin: 10}} />
        <View>
          <Text style={CustomStyles.defualtFont}>
            안녕하세요, 스포츠 어드벤처입니다. 3월 12일 오후 4시 경기에서,
            시카고 컵스의 우승을 예상합니다. 오클랜드는 최근 잉글랜드 PD리그에서
            3번의 성공적인 승리를 거뒀습니다 하지만 시카고컵스는 지금까지의
            오클랜드와의 경기에서 80%로 이겨왔고, 홈구장이라는 점에서 큰 이점을
            받게됩니다. 오클랜드는 최근 잉글랜드 PD리그에서 3번의 성공적인
            승리를 거뒀습니다 하지만 시카고컵스는 지금까지의 오클랜드와의
            경기에서 80%로 이겨왔고, 홈구장이라는 점에서 큰 이점을 받게됩니다.
            오클랜드는 최근 잉글랜드 PD리그에서 3번의 성공적인 승리를 거뒀습니다
            . 스포츠어드벤처 계정을 즐겨찾기하시면 3개의 팁을 매일 보실 수
            있습니다. 앞으로도 많은 후원 부탁드립니다.
          </Text>
        </View>
        <Divider style={{margin: 10}} />
        <Text style={[CustomStyles.etcFont]}>
          이 의견은 유저의 개인 의견이며, 스포츠 본의 입장을 대표하지 않습니다.
        </Text>
      </Card>
    </View>
  );
}

const CustomStyles = StyleSheet.create({
  defaultCard: {
    borderRadius: 5,
    borderWidth: 0,
    shadowColor: 'rgba(40, 40, 40, 0.15)',
    shadowOpacity: 1, //그림자 투명도
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 4},
    elevation: 3, // Android적용
    marginBottom: -7,
    marginLeft: 10,
    marginRight: 10,
  },
  defualtFont: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.NotoSans,
  },
  gameFont: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 23,
    color: '#042B6C',
    fontFamily: Fonts.NotoSans,
  },
  etcFont: {
    fontSize: 12,
    lineHeight: 17,
    color: '#929394',
    fontFamily: Fonts.NotoSans,
  },
});
