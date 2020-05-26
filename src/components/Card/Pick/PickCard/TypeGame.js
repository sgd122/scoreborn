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
    <View style={{backgroundColor: '#F5F5F5'}}>
      {data &&
        data.map((k) => {
          return (
            <Card
              containerStyle={[
                CustomStyles.defaultCard,
                {
                  marginBottom: 4,
                  marginTop: 4,
                  marginLeft: 17,
                  marginRight: 17,
                },
              ]}>
              <View style={{flexDirection: 'column'}}>
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
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={[[CustomStyles.gameFont]]}>
                        {k.home.name}
                      </Text>
                      <RoundImage
                        size={18}
                        source={require('../../../../img/game/game1.png')}
                        style={{marginLeft: 3.6, marginRight: 8}}
                      />
                      <Text style={[[CustomStyles.gameFont]]}> vs </Text>
                      <RoundImage
                        size={18}
                        source={require('../../../../img/game/game2.png')}
                        style={{marginLeft: 8, marginRight: 3.6}}
                      />
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
                          width: 54,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image
                          style={{
                            width: 9.68,
                            height: 11.4,
                            marginRight: 3,
                          }}
                          source={require('../../../../img/icon/Trophy.png')}
                        />
                        <Text style={CustomStyles.moneyFont}>{k.money}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </Card>
          );
        })}
    </View>
  );
};

export default TypeGame;
