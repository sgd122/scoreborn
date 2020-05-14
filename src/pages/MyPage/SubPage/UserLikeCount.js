//* 유저사진

import React, { useEffect, useContext } from 'react';
import { View, Image, Text } from 'react-native';
import PageContext, { PageProvider } from '../Context';

//* 공통 컴포넌트
import ScoreInput from '../../../components/Text/ScoreInput';
import RoundImage from '../../../components/Image/RoundImage';

//* 스타일
import styles from '../../../styles/common.module.scss';

export default function UserLikCount({ CustomStyles, img, count, title }) {
    const {
        state,
        setState,
        actions: { callMyPage },
    } = useContext(PageContext);

    return (
        <View
            style={CustomStyles.UserLikeCountView}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Image
                    source={img}
                    style={{ width: 12, height: 8, marginRight: 5 }}
                    resizeMode="contain"></Image>
                <Text style={{ fontSize: 20 }}>{count}</Text>
            </View>
            <Text style={{ fontSize: 12, color: '#ADADAD', marginTop: 5 }}>
                {title}
            </Text>
        </View>
    );
}
