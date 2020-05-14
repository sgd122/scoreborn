//* 유저사진

import React, { useEffect, useContext } from 'react';
import { View, Image, Text } from 'react-native';
import PageContext, { PageProvider } from '../Context';

//* 공통 컴포넌트
import ScoreInput from '../../../components/Text/ScoreInput';
import RoundImage from '../../../components/Image/RoundImage';

//* 스타일
import styles from '../../../styles/common.module.scss';

export default function UserNickName({ CustomStyles }) {
    const {
        state,
        setState,
        actions: { callMyPage },
    } = useContext(PageContext);

    return (
        <View style={CustomStyles.UserNickNameView}>
            <Text style={{ fontSize: 20 }}>닉 우스터</Text>
            <View style={CustomStyles.UserNickNameOuter}>
                <View style={CustomStyles.UserNickNameInner}>
                    <Text style={{ fontSize: 10, color: '#042B6C' }}>변경</Text>
                </View>
            </View>
        </View>
    );
}
