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
import SquareImage from '../Image/SquareImage';
import {Fonts} from '../../settings/fonts';

const CustomListChatRoom = (props) => (
  <View>
    {props.list &&
      props.list.map((l, i) => (
        <>
          <View style={{margin: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <SquareImage
                  style={CustomStyles.LeftImage}
                  source={require('../../img/game/game1.png')}
                  size={80}
                />
              </View>
              <View style={{marginLeft: 10, marginTop: 5}}>
                <Text style={CustomStyles.headFont}>스포츠볼</Text>
                <View style={{flexDirection: 'row', marginTop: 8}}>
                  <Text style={CustomStyles.tagFont}>#야구</Text>
                  <Text style={CustomStyles.tagFont}>#야구</Text>
                  <Text style={CustomStyles.tagFont}>#야구</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 8}}>
                  <Text style={[CustomStyles.defualtFont, {marginRight: 10}]}>
                    345명
                  </Text>
                  <Text style={[CustomStyles.defualtFont, {color: '#FA1735'}]}>
                    지금 대화
                  </Text>
                </View>
              </View>
            </View>
            <Divider style={{marginTop: 10}} />
          </View>
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

export default CustomListChatRoom;
