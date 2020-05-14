//* 유저사진

import React, { useEffect, useContext } from 'react';
import { View, Image } from 'react-native';
import PageContext, { PageProvider } from '../Context';

//* 공통 컴포넌트
import ScoreInput from '../../../components/Text/ScoreInput';
import RoundImage from '../../../components/Image/RoundImage';

//* 스타일
import styles from '../../../styles/common.module.scss';

export default function UserImages({ CustomStyles }) {
  const {
    state,
    setState,
    actions: { callMyPage },
  } = useContext(PageContext);

  return (
    <View style={CustomStyles.UserImagesView}>
      <View>
        <RoundImage
          source={require('../../../img/userImage/myImage.png')}
          size={56}
        />
        <Image
          source={require('../../../img/userImage/camera.png')}
          style={CustomStyles.UserImagesCamera}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
