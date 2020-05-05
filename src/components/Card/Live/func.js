import React, {useState} from 'react';

/**
 *
 * @param {*} data
 * @param {*} type
 * * live
 * * upcoming
 * * end
 */
export const onCardClick = (data, type, navigation) => {
  // alert('1=>' + type + '///' + navigation);
  if (type == 'live') {
  } else if (type == 'upcomimg') {
  } else if (type == 'end') {
  }
  navigation.navigate('Live/UpComing');
};
export const onLikeClick = (data, type) => {
  alert('2=>' + type);
};
