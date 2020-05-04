import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, TextInput} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/common.module.scss';
import {Fonts} from '../../settings/fonts';

const CustomLiveCard = (props) => {
  let {type} = props;

  if (!type) {
    type = 'live';
  }
  return (
    <Card
      containerStyle={[CustomStyles.defaultCard]}
      wrapperStyle={{height: type == 'live' ? 110 : 80}}>
      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row', marginBottom: 8}}>
          {type == 'live' && (
            //* 라이브경기일경우
            <>
              <Icon name="star" size={18} style={{color: 'red'}} />
              <View style={CustomStyles.liveContainer}>
                <Text style={CustomStyles.liveText}>
                  러셀은 안전하게 2아웃 잘 잡습니다
                </Text>
              </View>
            </>
          )}
        </View>

        <View style={[styles.conatiner_between]}>
          {type != 'live' && (
            <Icon name="star" size={18} style={{color: 'red'}} />
          )}
          {/* 
            //* 1번팀 로고
            */}
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                style={[{width: 40, height: 40, resizeMode: 'contain'}]}
                source={require('../../img/game/game1.png')}
              />
              <Text
                style={[
                  CustomStyles.defualtFont,
                  {color: '#03367A', fontSize: 14, marginTop: 10},
                ]}>
                올랜도
              </Text>
            </View>
          </View>

          {/* 
          //* 경기스코어
          */}
          <View style={{justifyContent: 'center'}}>
            <Text
              style={[
                CustomStyles.defualtFont,
                {fontSize: 14, textAlign: 'center'},
              ]}>
              경기종료
            </Text>
            <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
              <Text style={[CustomStyles.defualtFont, CustomStyles.HomeColor]}>
                130
              </Text>
              <Text style={CustomStyles.defualtFont}> : </Text>
              <Text style={[CustomStyles.defualtFont, CustomStyles.AwayColor]}>
                120
              </Text>
            </View>
            <Text
              style={[{fontSize: 10, color: '#03367A', textAlign: 'center'}]}>
              5명 채팅중
            </Text>
          </View>

          {/* 
          //* 2번팀 로고
          */}
          <View>
            <Image
              style={[{width: 40, height: 40, resizeMode: 'contain'}]}
              source={require('../../img/game/game2.png')}
            />
            <Text
              style={[
                CustomStyles.defualtFont,
                CustomStyles.AwayBlackColor,
                {fontSize: 14, marginTop: 10},
              ]}>
              포틀랜드
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

const CustomStyles = StyleSheet.create({
  defaultCard: {
    borderRadius: 5,
    borderWidth: 0,
    shadowColor: 'rgba(40, 40, 40, 0.15)',
    shadowOpacity: 1, //그림자 투명도
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 4},
    elevation: 3, // Android적용
  },
  defualtFont: {
    fontSize: 28,
    fontWeight: '500',
    fontFamily: Fonts.RobotoMedium,
  },
  HomeColor: {
    color: '#03367A',
  },
  AwayColor: {
    color: '#949292',
  },
  AwayBlackColor: {
    color: 'black',
  },
  liveContainer: {
    backgroundColor: '#E5F0FF',
    borderRadius: 5,
    padding: 7,
    marginLeft: 10,
    width: '80%',
  },
  liveText: {
    fontFamily: Fonts.RobotoMedium,
    textAlign: 'center',
  },
});

export default CustomLiveCard;
