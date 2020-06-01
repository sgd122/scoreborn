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
    <View style={CustomStyles.elem}>
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
  );
};

const CustomListItem = (props) => (
  <ScrollView>
    <View>
      {props.list &&
        props.list.map((l, i) => (
          <ListItem
            key={i}
            title={l.name}
            titleStyle={{
              fontFamily: Fonts.NotoSans,
              fontWeight: 'bold',
              fontSize: 14,
              lineHeight: 20,
              letterSpacing: -0.09,
              paddingBottom: 5,
            }}
            subtitle={<SubTitleLabel data={l} />}
            badge={{
              value: 3,
              badgeStyle: {
                backgroundColor: 'white',
                borderColor: '#ADADAD',
                borderRadius: 19,
                borderWidth: 1.2,
                minWidth: 0,
                height: 34,
                width: 34,
              },
              textStyle: CustomStyles.BadgeFont,
            }}
            bottomDivider
            {...props}
          />
        ))}
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
