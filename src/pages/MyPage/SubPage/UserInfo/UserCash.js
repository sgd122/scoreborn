//* 유저사진

import React, { useEffect, useContext } from 'react';
import { View, Image, Text } from 'react-native';
import PageContext, { PageProvider } from '../../Context';

//* 공통 컴포넌트
import ScoreInput from '../../../../components/Text/ScoreInput';
import RoundImage from '../../../../components/Image/RoundImage';

//* 스타일
import styles from '../../../../styles/common.module.scss';
import { Fonts } from '../../../../settings/fonts';

export default function UserCash({ CustomStyles }) {
    const {
        state,
        setState,
        actions: { callMyPage },
    } = useContext(PageContext);

    return (
        <View style={CustomStyles.UserCashView}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={CustomStyles.UserCashText}>
                    나의 캐시
                </Text>
                <Image
                    source={require('../../../../img/icon/money.png')}
                    style={{ width: 12, height: 12 }}
                    resizeMode="contain"></Image>
            </View>
            <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 30, fontFamily: Fonts.NotoSans }}>300</Text>
                <View style={CustomStyles.UserCashCharge}>
                    <Text style={{ fontSize: 14, color: '#042B6C' }}>충전하기</Text>
                </View>
            </View>
        </View>
    );
}
