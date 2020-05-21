import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../../styles/common.module.scss';
import {Fonts} from '../../../settings/fonts';
import * as func from './func';

const CustomLiveCard = (props) => {
  let {type, data, CustomStyles, navigation} = props;

  if (!type) {
    type = 'live';
  }
  return (
    <View>
      {data &&
        data.map((k) => {
          return (
            <TouchableOpacity
              onPress={() => {
                func.onCardClick(k, type, navigation);
              }}>
              <Card
                containerStyle={[CustomStyles.defaultCard]}
                wrapperStyle={{height: 80}}>
                <View style={{flexDirection: 'column'}}>
                  <View style={[styles.conatiner_between]}>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        func.onLikeClick(k, type, navigation);
                      }}>
                      <Icon name="star" size={18} style={{color: 'red'}} />
                    </TouchableWithoutFeedback>
                    {/* 
                  //* 1번팀 로고
                  */}
                    <View style={{flexDirection: 'row', width: 70}}>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          style={[
                            {width: 34, height: 34, resizeMode: 'contain'},
                          ]}
                          source={require('../../../img/game/game1.png')}
                        />
                        <Text
                          style={[
                            CustomStyles.defualtFont,
                            {color: '#03367A', fontSize: 14, marginTop: 7},
                          ]}>
                          {k.home.name}
                        </Text>
                      </View>
                    </View>

                    {/* 
                  //* 경기스코어
                  */}
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={[
                          CustomStyles.defualtFont,
                          {fontSize: 14, textAlign: 'center'},
                        ]}>
                        {k.time}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: 5,
                          marginBottom: 5,
                        }}>
                        <Text
                          style={[
                            CustomStyles.defualtFont,
                            CustomStyles.HomeColor,
                          ]}>
                          {k.home.score}
                        </Text>
                        <Text style={CustomStyles.defualtFont}> : </Text>
                        <Text
                          style={[
                            CustomStyles.defualtFont,
                            CustomStyles.AwayColor,
                          ]}>
                          {k.away.score}
                        </Text>
                      </View>
                      <Text
                        style={[
                          {fontSize: 10, color: '#03367A', textAlign: 'center'},
                        ]}>
                        {k.chat}
                      </Text>
                    </View>

                    {/* 
                  //* 2번팀 로고
                  */}
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={[{width: 34, height: 34, resizeMode: 'contain'}]}
                        source={require('../../../img/game/game2.png')}
                      />
                      <Text
                        style={[
                          CustomStyles.defualtFont,
                          CustomStyles.AwayBlackColor,
                          {fontSize: 14, marginTop: 7},
                        ]}>
                        {k.away.name}
                      </Text>
                    </View>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

export default CustomLiveCard;
