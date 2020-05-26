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
const TypeRank = (props) => {
  let {type, data, CustomStyles} = props;
  if (!type) {
    type = 'pick';
  }

  const CustomIcon = ({type}) => {
    if (type == 'none') {
      return (
        <Image
          style={{width: 6, height: 1}}
          source={require('../../../../img/icon/Line_183.png')}
        />
      );
    } else if (type == 'new') {
      return (
        <Image
          style={{width: 16, height: 12}}
          source={require('../../../../img/icon/new.png')}
          resizeMode="contain"
        />
      );
    } else if (type == 'up') {
      return (
        <Image
          style={{width: 6, height: 6}}
          source={require('../../../../img/icon/Up.png')}
          resizeMode="contain"
        />
      );
    } else if (type == 'down') {
      return (
        <Image
          style={{width: 6, height: 6}}
          source={require('../../../../img/icon/Down.png')}
          resizeMode="contain"
        />
      );
    }
    return <></>;
  };

  return (
    <View>
      {data &&
        data.map((k) => {
          return (
            <>
              <TouchableOpacity
                style={{backgroundColor: '#F5F5F5'}}
                onPress={() => {
                  func.onCardClick(k, type);
                }}>
                <Card containerStyle={[CustomStyles.defaultCard, {height: 58}]}>
                  <View style={{flexDirection: 'column', height: '100%'}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: '100%',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginRight: 10,
                          }}>
                          <CustomIcon type={'new'} />
                        </View>
                        <RoundImage
                          size={48}
                          source={require('../../../../img/game/game1.png')}
                        />
                        <View
                          style={{
                            marginLeft: 5,
                          }}>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={[
                                CustomStyles.defualtFont,
                                {fontSize: 14, marginRight: 4},
                              ]}>
                              {k.name}
                            </Text>
                            <Text
                              style={[
                                CustomStyles.defualtFont,
                                {fontSize: 12, color: '#ADADAD'},
                              ]}>
                              +{k.rankScore}
                            </Text>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <Icon
                              name="star"
                              size={10}
                              style={{
                                color: '#042B6C',
                                marginTop: 5,
                                marginRight: 2,
                              }}
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
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
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
            </>
          );
        })}
    </View>
  );
};

export default TypeRank;
