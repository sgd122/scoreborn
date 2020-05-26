import React, {useState} from 'react';

export const onCardClick = (data, type, navigation) => {
  if (type == 'pick') {
    navigation.navigate('Live/UpComing');
  } else if (type == 'game') {
    navigation.navigate('Live/UpComing');
  }
};
export const onLikeClick = (data, type, navigation) => {
  navigation.navigate('Profile/Expert');
};
