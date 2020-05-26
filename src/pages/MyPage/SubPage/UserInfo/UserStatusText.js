//* 유저사진

import React, { useEffect, useContext } from 'react';
import { View, Image, Text } from 'react-native';
import PageContext, { PageProvider } from '../../Context';

//* 공통 컴포넌트
import ScoreInput from '../../../../components/Text/ScoreInput';
import RoundImage from '../../../../components/Image/RoundImage';

//* 스타일
import styles from '../../../../styles/common.module.scss';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function UserStatusText({ CustomStyles, navigation }) {
    const {
        state,
        setState,
        actions: { callMyPage },
    } = useContext(PageContext);

    return (
        <TouchableOpacity style={CustomStyles.UserStatusTextView}
            onPress={() => navigation.navigate('MyPage/StatusMessageChange')}
        >
            <Text style={CustomStyles.UserStatusTexttext}>
                개인 채팅 확인 잘 안합니다.
              </Text>
            <Text style={CustomStyles.UserStatusTextRight}>
                >
              </Text>
        </TouchableOpacity>
    );
}
