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
import VerticalGrayLine from '../../../Line/VerticalGrayLine';
import * as func from './func';
/**
 * @param {*} props
 *
 */
const TypeLike = (props) => {
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
              <View
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  // marginBottom: 4,
                  // marginTop: 4,
                }}>
                {/* <Card containerStyle={[CustomStyles.defaultCard]}> */}
                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'column'}}>
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
                            {k.subtitle}
                          </Text>
                        </View>
                        <Text
                          style={[CustomStyles.defualtFont, {fontSize: 12}]}>
                          {k.detail}
                        </Text>
                      </View>
                    </View>
                    <Divider style={{marginTop: 10, marginBottom: 5}} />
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View style={{flexDirection: 'row'}}>
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
                      <View>
                        <Text
                          style={[
                            CustomStyles.defualtFont,
                            {fontSize: 12, color: '#042B6C'},
                          ]}>
                          {k.live}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                {/* </Card> */}
              </View>
              <VerticalGrayLine style={{marginBottom: 15}} />
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

export default TypeLike;
