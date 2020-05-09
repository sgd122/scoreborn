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
  if (type == 'live') {
    navigation.navigate('Live/Live');
  } else if (type == 'upcoming') {
    navigation.navigate('Live/UpComing');
  } else if (type == 'end') {
    navigation.navigate('Live/End');
  }
};

export const onLikeClick = (data, type) => {
  alert('2=>' + type);
};
