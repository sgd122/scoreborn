import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Divider, Avatar} from 'react-native-elements';
import styles from '../../styles/common.module.scss';
import RoundImage from '../Image/RoundImage';
import SquareImage from '../Image/SquareImage';
import {Fonts} from '../../settings/fonts';

function CustomListMyChat(props) {
  return (
    <FlatList
      data={props.list}
      renderItem={({item, index}) => flatListRenderItem(item, index)}
      scrollEnabled={false}
    />
  );
}
const flatListRenderItem = (item, index) => {
  return (
    <>
      <View style={{margin: 10}}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <RoundImage
              style={CustomStyles.LeftImage}
              source={require('../../img/game/game1.png')}
              size={40}
            />
          </View>
          <View style={{marginLeft: 10, marginTop: 5}}>
            <Text style={CustomStyles.headFont}>조쉬</Text>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Text style={CustomStyles.tagFont}>덕분에 큰 도움이 됐어요.</Text>
            </View>
          </View>
        </View>
        <Divider style={{marginTop: 10}} />
      </View>
    </>
  );
};

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

export default CustomListMyChat;
