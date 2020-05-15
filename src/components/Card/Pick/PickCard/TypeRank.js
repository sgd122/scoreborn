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
const TypeRank = (props) => {
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
              <Card containerStyle={[CustomStyles.defaultCard]}>
                <View style={{flexDirection: 'column'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <RoundImage
                        source={require('../../../../img/game/game1.png')}
                      />
                      <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={[
                              CustomStyles.defualtFont,
                              {fontSize: 14, marginRight: 10},
                            ]}>
                            {k.name}
                          </Text>
                          <Text
                            style={[
                              CustomStyles.defualtFont,
                              {fontSize: 12, color: '#ADADAD'},
                            ]}>
                            {k.rankScore}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Icon
                            name="star"
                            size={10}
                            style={{color: '#042B6C', marginTop: 5}}
                          />
                          <Text
                            style={[
                              CustomStyles.defualtFont,
                              {fontSize: 10, color: '#042B6C'},
                            ]}>
                            {k.cnt}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <TouchableWithoutFeedback
                        onPress={() => {
                          func.onLikeClick(k, type, props.navigation);
                        }}>
                        <Icon name="star" size={18} style={{color: 'red'}} />
                      </TouchableWithoutFeedback>
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

export default TypeRank;
