import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
const TypeGame = (props) => {
  let {type, data, CustomStyles} = props;
  if (!type) {
    type = 'pick';
  }

  return (
    <View>
      {data &&
        data.map((k) => {
          return (
            <>
              <View
                style={{
                  marginBottom: 4,
                  marginTop: 4,
                  // marginLeft: 10,
                  // marginRight: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: 5,
                      backgroundColor: '#F7F7F7',
                      borderRadius: 5,
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
                            height: 32,
                            width: 54,
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
            </>
          );
        })}
    </View>
  );
};

export default TypeGame;
