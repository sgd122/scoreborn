import React, {useState} from 'react';

export const onCardClick = (data, type) => {
  alert('1');
};
export const onLikeClick = (data, type, navigation) => {
  navigation.navigate('Profile/Expert');
};
