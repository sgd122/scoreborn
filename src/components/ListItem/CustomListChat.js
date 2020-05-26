import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Divider, Avatar} from 'react-native-elements';
import styles from '../../styles/common.module.scss';
import RoundImage from '../Image/RoundImage';
import {Fonts} from '../../settings/fonts';

const CustomType = ({type, navigation}) => {
  if (type == 'Expert') {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#E5F0FF',
          borderRadius: 5,
          marginTop: 5,
          marginLeft: 5,
          height: 32,
          width: 54,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={CustomStyles.moneyFont}
          onPress={() => navigation && navigation.navigate('ExpertPick')}>
          무료
        </Text>
      </View>
    );
  } else if (type == 'End') {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#E5F0FF',
          borderRadius: 5,
          marginTop: 5,
          marginLeft: 5,
          height: 32,
          width: 54,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={CustomStyles.moneyFont}
          onPress={() => navigation && navigation.navigate('ExpertPick')}>
          보기
        </Text>
      </View>
    );
  } else {
    return <></>;
  }
};
const CustomListChat = (props) => (
  <View>
    {props.list &&
      props.list.map((l, i) => (
        <>
          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 10}}>
            <RoundImage
              size={48}
              source={require('../../img/game/pick/top1.png')}
            />
            <View style={{flexDirection: 'column', flex: 1, marginLeft: 10}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => {
                  props.navigation &&
                    props.navigation.navigate('Profile/Expert'); //* 전문가프로필 이동
                }}>
                <Text style={[CustomStyles.defualtFont, {marginRight: 10}]}>
                  김덕중
                </Text>
                <Text style={[CustomStyles.defualtFont, {color: '#ADADAD'}]}>
                  前 SPOTIVE 뉴스 팀장
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#F7F7F7',
                    padding: 5,
                    borderRadius: 5,
                    marginTop: 5,
                    width: '85%',
                    height: 32,
                  }}>
                  <Text style={[CustomStyles.defualtFont]}>
                    쉽지 않은 픽, 하지만 해답은 있습니다.
                  </Text>
                </View>
                <CustomType type={props.type} navigation={props.navigation} />
              </View>
            </View>
          </View>
          <Divider style={{backgroundColor: 'rgba(146,147,48,0.13)'}} />
        </>
      ))}
  </View>
);

const CustomStyles = StyleSheet.create({
  defualtFont: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.NotoSans,
  },
  pickBottomStyle: {
    height: 40,
    width: '100%',
    backgroundColor: '#F7F7F7',
    borderBottomColor: '#042B6C',
    borderBottomWidth: 4,
  },
  pickFontColor: {
    color: '#042B6C',
  },
  nonPickBottomStyle: {
    height: 40,
    width: '100%',
    backgroundColor: '#F7F7F7',
    borderBottomColor: 'rgba(146, 147, 148, 0.13)',
    borderBottomWidth: 1,
  },
  nonPickFontColor: {
    color: '#929394',
  },
  moneyFont: {
    alignItems: 'center',
    color: '#042B6C',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    letterSpacing: -0.09,
    fontFamily: Fonts.NotoSans,
  },
});

export default CustomListChat;
