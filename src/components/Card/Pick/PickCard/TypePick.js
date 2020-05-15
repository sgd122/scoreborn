import React from 'react';
import {
  View,
  Text,
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
const TypePick = (props) => {
  let {type, data, CustomStyles} = props;
  if (!type) {
    type = 'pick';
  }

  return (
    <View>
      {data &&
        data.map((k) => {
          return (
            <TouchableOpacity
              onPress={() => {
                func.onCardClick(k, type);
              }}>
              <View style={{margin: 10}}>
                {/* <Card containerStyle={[CustomStyles.defaultCard]}> */}
                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row'}}>
                    <RoundImage
                      source={require('../../../../img/game/game1.png')}
                    />
                    <View style={{flexDirection: 'column'}}>
                      <Text style={[CustomStyles.defualtFont]}>{k.name}</Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={[
                            [CustomStyles.defualtFont],
                            {fontSize: 12, color: '#929394', marginRight: 10},
                          ]}>
                          {k.subtitle}
                        </Text>
                        <TouchableWithoutFeedback
                          onPress={() => {
                            func.onLikeClick(k, type);
                          }}>
                          <Icon name="star" size={18} style={{color: 'red'}} />
                        </TouchableWithoutFeedback>
                        <Text
                          style={[
                            {
                              fontFamily: Fonts.NotoSans,
                              fontSize: 12,
                              color: '#FF1634',
                              alignItems: 'center',
                              lineHeight: 0,
                              marginLeft: 5,
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
                            {fontSize: 12, color: '#ADADAD'},
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
                      <View
                        style={{
                          backgroundColor: '#E5F0FF',
                          borderRadius: 5,
                          padding: 5,
                          height: 30,
                        }}>
                        <Text style={CustomStyles.moneyFont}>₩ {k.money}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                {/* </Card> */}
              </View>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

export default TypePick;
