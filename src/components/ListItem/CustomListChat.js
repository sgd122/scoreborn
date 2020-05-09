import React from 'react';
import {View, Image, StyleSheet, Text, TextInput} from 'react-native';
import {Divider, Avatar} from 'react-native-elements';
import styles from '../../styles/common.module.scss';
import RoundImage from '../Image/RoundImage';
import {Fonts} from '../../settings/fonts';

const CustomType = ({type}) => {
  if (type == 'Expert') {
    return (
      <View
        style={{
          backgroundColor: '#E5F0FF',
          borderRadius: 5,
          padding: 5,
          height: 30,
        }}>
        <Text style={CustomStyles.moneyFont}>무료</Text>
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
            <RoundImage source={require('../../img/game/pick/top1.png')} />
            <View style={{flexDirection: 'column', flex: 1}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[CustomStyles.defualtFont, {marginRight: 10}]}>
                  김덕중
                </Text>
                <Text style={[CustomStyles.defualtFont, {color: '#ADADAD'}]}>
                  前 SPOTIVE 뉴스 팀장
                </Text>
              </View>
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
                    width: '85%',
                  }}>
                  <Text style={[CustomStyles.defualtFont]}>
                    쉽지 않은 픽, 하지만 해답은 있습니다.
                  </Text>
                </View>
                <CustomType type={props.type} />
              </View>
            </View>
          </View>
          <Divider />
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
    fontFamily: Fonts.NotoSans,
  },
});

export default CustomListChat;
