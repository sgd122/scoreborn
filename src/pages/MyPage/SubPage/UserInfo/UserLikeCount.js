//* 유저사진

import React, { useEffect, useContext } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import PageContext, { PageProvider } from '../../Context';

//* 공통 컴포넌트
import ScoreInput from '../../../../components/Text/ScoreInput';
import RoundImage from '../../../../components/Image/RoundImage';

//* 스타일
import styles from '../../../../styles/common.module.scss';
import { Fonts } from '../../../../settings/fonts';

export default function UserLikCount({ CustomStyles, img, count, title, move, navigation }) {
    const {
        state,
        setState,
        actions: { callMyPage },
    } = useContext(PageContext);

    return (
        <View
            style={CustomStyles.UserLikeCountView}>
            <TouchableOpacity onPress={() => navigation.navigate(move)}>
                <View
                    style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }}
                >

                    <Image
                        source={img}
                        style={{ width: 12, height: 12, }}
                        resizeMode="contain" />
                    <Text style={CustomStyles.UserLikeCountText}>{count}</Text>
                </View>
                <Text style={CustomStyles.UserLikeCountBootomText}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
