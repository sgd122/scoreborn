import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import TextLine from '../Line/TextLine';
import styles from '../../styles/common.module.scss';
import {Fonts} from '../../settings/fonts';
const SubTitleLabel = ({data}) => {
  return (
    <View style={{marginTop: 8, marginLeft: 20, marginRight: 16}}>
      <View>
        <Text
          style={{
            fontFamily: Fonts.NotoSans,
            fontWeight: 'bold',
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: -0.09,
            paddingBottom: 5,
          }}>
          {data.name}
        </Text>
      </View>
      <View style={[CustomStyles.elem, {marginBottom: 13}]}>
        {data.avatar_url && (
          <View style={CustomStyles.userInfo}>
            <Avatar
              source={{
                uri: data.avatar_url,
              }}
            />
          </View>
        )}
        <View style={CustomStyles.userComment}>
          <Text style={CustomStyles.SubTitleFont}>{data.subtitle}</Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Text style={CustomStyles.bottomFont}>행복버스</Text>
            <TextLine />
            <Text style={CustomStyles.bottomFont}>10분전</Text>
            <TextLine />
            <Text style={CustomStyles.bottomFont}>조회176</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginRight: 10,
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: 'rgba(146, 147, 148, 0.13)',
        }}
      />
    </View>
  );
};

const CustomListItem = (props) => (
  <ScrollView>
    <View>
      {props.list && props.list.map((data) => <SubTitleLabel data={data} />)}
    </View>
  </ScrollView>
);

const CustomStyles = StyleSheet.create({
  elem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  userComment: {
    // backgroundColor: 'yellow',
  },
  bottomFont: {
    fontFamily: Fonts.NotoSans,
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: -0.03,
    color: '#ADADAD',
  },
  SubTitleFont: {
    fontFamily: Fonts.NotoSans,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.09,
  },
  BadgeFont: {
    fontFamily: Fonts.NotoSans,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.09,
    color: '#ADADAD',
  },
});

export default CustomListItem;
