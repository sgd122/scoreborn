import React, {useEffect, useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {Input} from 'react-native-elements';
import {Fonts} from '../../settings/fonts';

export default function CustomSelect({style, ...props}) {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          alert('1');
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={[CustomStyles.defualtFont, {color: '#042B6C'}]}>
            분석
          </Text>
          <Image
            style={{width: 12, marginRight: 10}}
            resizeMode="contain"
            source={require('../../img/icon/ArrowDown.png')}
          />
        </View>
      </TouchableOpacity>
    </>
  );
}

const CustomStyles = StyleSheet.create({
  defaultCard: {
    backgroundColor: '#FAFAFA',
    borderBottomWidth: 1,
    borderColor: 'rgba(146, 147, 148, 0.13)',
    height: 40,
    justifyContent: 'center',
  },
  bottomView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  defualtFont: {
    fontFamily: Fonts.NotoSans,
    fontSize: 16,
    lineHeight: 23,
    letterSpacing: -0.09,
    marginLeft: 16,
  },
});
