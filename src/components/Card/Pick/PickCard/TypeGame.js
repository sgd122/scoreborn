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
            <Card containerStyle={[CustomStyles.defaultCard]}>
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
                  <TouchableOpacity
                    onPress={() => {
                      func.onCardClick(k, type, props.navigation);
                    }}>
                    <View
                      style={{
                        backgroundColor: '#E5F0FF',
                        borderRadius: 5,
                        padding: 5,
                        height: 30,
                      }}>
                      <Text style={CustomStyles.moneyFont}>₩ {k.money}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          );
        })}
    </View>
  );
};

export default TypeGame;
