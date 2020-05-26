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
const TypeExpertPick = (props) => {
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
            <View style={{marginLeft: 10, marginRight: 10, marginTop: 14}}>
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
                    height: 55.69,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      // justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
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
                            textAlign: 'center',
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

                    <TouchableOpacity
                      onPress={() => {
                        func.onCardClick(k, type, props.navigation);
                      }}>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          // justifyContent: 'space-between',
                          marginRight: 10,
                        }}>
                        <Image
                          style={{
                            width: 7,
                            height: 12,
                          }}
                          source={require('../../../../img/icon/RightArrow.png')}
                        />
                      </View>
                    </TouchableOpacity>
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

export default TypeExpertPick;
