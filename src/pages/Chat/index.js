//* 마이페이지

import React, {useEffect, useContext} from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import {Input} from 'react-native-elements';
import {Observer, observer, inject} from 'mobx-react';
import PageContext, {PageProvider} from './Context';

//* 공통 컴포넌트
import VerticalGrayLine from '../../components/Line/VerticalGrayLine';
import HorizontalLine from '../../components/Line/HorizontalLine';
import CustomTextList from '../../components/ListItem/CustomTextList';
import CustomInput from '../../components/Input/CustomInput';
import SquareImage from '../../components/Image/SquareImage';

//* 스타일
import styles from '../../styles/common.module.scss';
import {Fonts} from '../../settings/fonts';

const ScreenHeight = Dimensions.get('window').height;

function Chat({userStore, navigation}) {
  const {state, setState} = useContext(PageContext);

  useEffect(() => {
    //* Navigation
    setState((prev) => ({...prev, navigation: navigation}));

    setState((prev) => ({
      ...prev,
    }));
  }, []);

  return (
    <Observer>
      {() => (
        <View style={[styles.container]}>
          <View style={{flexDirection: 'row'}}>
            <View style={CustomStyles.LeftSide}>
              <SquareImage
                style={CustomStyles.LeftImage}
                source={require('../../img/game/game1.png')}
              />
              <SquareImage
                style={CustomStyles.LeftImage}
                source={require('../../img/game/game1.png')}
              />
              <SquareImage
                style={CustomStyles.LeftImage}
                source={require('../../img/game/game1.png')}
              />
              <SquareImage
                style={CustomStyles.LeftImage}
                source={require('../../img/game/game1.png')}
              />
            </View>
            <View style={{flex: 1}}>
              <View style={{margin: 10}}>{/* 채팅 */}</View>
              <View style={[CustomStyles.footer]}>
                <Image
                  source={require('../../img/icon/Plus.png')}
                  style={{marginLeft: 5}}
                  resizeMode="contain"
                />
                <CustomInput style={{height: 30}} />
              </View>
            </View>
          </View>
        </View>
      )}
    </Observer>
  );
}

export default inject('userStore')(({userStore, navigation}) => {
  return (
    <PageProvider>
      <Chat userStore={userStore} navigation={navigation} />
    </PageProvider>
  );
});

const CustomStyles = StyleSheet.create({
  defualtFont: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.NotoSans,
  },
  detailFont: {
    fontSize: 14,
    lineHeight: 20,
    color: '#929394',
    fontFamily: Fonts.NotoSans,
    margin: 5,
  },
  LeftImage: {
    margin: 7,
  },
  LeftSide: {
    height: ScreenHeight,
    backgroundColor: '#FAFAFA',
    borderRightColor: '#DEE3EB',
    borderRightWidth: 1,
  },
  footer: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    position: 'absolute',
    bottom: 180,
  },
});
