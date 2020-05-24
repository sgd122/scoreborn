import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {Card, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../../../styles/common.module.scss';
import {Fonts} from '../../../../settings/fonts';
import RoundImage from '../../../Image/RoundImage';
import * as func from './func';
/**
 * @param {*} props
 *
 */
const TypePick = (props) => {
  let {type, data, CustomStyles} = props;
  if (!type) {
    type = 'pick';
  }

  const onPress = () => {
    func.onCardClick(k, type, props.navigation);
  };

  return (
    <View>
      {data &&
        data.map((k) => {
          return (
            <View style={{margin: 10}}>
              {/* <Card containerStyle={[CustomStyles.defaultCard]}> */}
              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', marginBottom: 5}}>
                  <RoundImage
                    source={require('../../../../img/game/game1.png')}
                  />
                  <View style={{flexDirection: 'column', marginLeft: 5}}>
                    <Text
                      style={[
                        CustomStyles.defualtFont,
                        {
                          fontWeight: 'bold',
                          lineHeight: 20,
                        },
                      ]}>
                      {k.name}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={[
                          [CustomStyles.defualtFont],
                          {
                            fontSize: 12,
                            lineHeight: 17,
                            color: '#929394',
                            marginRight: 10,
                          },
                        ]}>
                        {k.subtitle}
                      </Text>
                      <TouchableWithoutFeedback
                        onPress={() => {
                          func.onLikeClick(k, type, props.navigation);
                        }}>
                        <Icon name="star" size={18} style={{color: 'red'}} />
                      </TouchableWithoutFeedback>
                      <Text
                        style={[
                          {
                            fontFamily: Fonts.NotoSans,
                            fontSize: 12,
                            lineHeight: 17,
                            letterSpacing: -0.065,
                            color: '#FF1634',
                            alignItems: 'center',
                            marginLeft: 2,
                          },
                        ]}>
                        {k.cnt}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: '#F7F7F7',
                    borderRadius: 5,
                    padding: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'column',
                      }}>
                      <Text
                        style={[
                          [CustomStyles.defualtFont],
                          {
                            fontSize: 12,
                            lineHeight: 17,
                            letterSpacing: -0.04,
                            color: '#ADADAD',
                            marginBottom: 8,
                          },
                        ]}>
                        {k.leagueName}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={[[CustomStyles.gameFont]]}>
                          {k.home.name}
                        </Text>
                        <Text style={[[CustomStyles.gameFont]]}> vs </Text>
                        <Text style={[[CustomStyles.gameFont]]}>
                          {k.away.name}
                        </Text>
                      </View>
                    </View>
                    {k.money && (
                      <TouchableOpacity
                        onPress={() => {
                          func.onCardClick(k, type, props.navigation);
                        }}>
                        <View
                          style={{
                            flex: 1,
                            backgroundColor: '#E5F0FF',
                            borderRadius: 5,
                            padding: 8,
                            height: 38,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Image
                            style={{
                              width: 11.17,
                              height: 11.17,
                              marginRight: 2,
                            }}
                            source={require('../../../../img/icon/krw.png')}
                          />
                          <Text style={CustomStyles.moneyFont}>{k.money}</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
              {/* </Card> */}
            </View>
          );
        })}
    </View>
  );
};

export default TypePick;
