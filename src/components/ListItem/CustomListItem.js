import React from 'react';
import {View, Image, StyleSheet, Text, TextInput} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import styles from '../../styles/common.module.scss';

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
        <Text>{data.subtitle}</Text>
        <Text style={CustomStyles.bottomFont}>행복버스 | 10분전 | 조회176</Text>
      </View>
    </View>
  );
};

const CustomListItem = (props) => (
  <View>
    {props.list &&
      props.list.map((l, i) => (
        <ListItem
          key={i}
          title={l.name}
          titleStyle={{fontWeight: 'bold', paddingBottom: 5}}
          subtitle={<SubTitleLabel data={l} />}
          badge={{
            value: 3,
            badgeStyle: {
              backgroundColor: 'white',
              borderColor: '#ADADAD',
              borderRadius: 19,
              borderWidth: 1.2,
              height: 30,
              minWidth: 0,
              width: 30,
            },
            textStyle: {color: '#ADADAD', fontSize: 15},
          }}
          bottomDivider
          {...props}
        />
      ))}
  </View>
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
    paddingBottom: 5,
    paddingTop: 5,
    color: '#ADADAD',
  },
});

export default CustomListItem;
