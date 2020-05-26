//* 마이페이지

import React, { useEffect, useContext } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image
} from 'react-native';
import { Observer, observer, inject } from 'mobx-react';
import PageContext, { PageProvider } from '../../Context';

//* 공통 컴포넌트
import VerticalGrayLine from '../../../../components/Line/VerticalGrayLine';
import HorizontalLine from '../../../../components/Line/HorizontalLine';
import CustomTextList from '../../../../components/ListItem/CustomTextList';

//* 스타일
import styles from '../../../../styles/common.module.scss';
import { Fonts } from '../../../../settings/fonts';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import CustomperPersonList from '../../../../components/ListItem/CustomListPerson'


const max = 16;
function Favorits({ userStore, navigation }) {
    const { state, setState, } = useContext(PageContext);

    useEffect(() => {
        //* Navigation
        setState((prev) => ({ ...prev, navigation: navigation }));

        setState((prev) => ({
            ...prev,
            list: [
                {
                    img: require('../../../../img/userImage/eaImage.png'),
                    content: '스포츠 EASY',
                    favorit: require('../../../../img/icon/Star.png')
                },
                {
                    img: require('../../../../img/userImage/defaultThubnail.png'),
                    content: '스포츠 EASY',
                    favorit: require('../../../../img/icon/Star.png')
                },
                {
                    img: require('../../../../img/userImage/myImage.png'),
                    content: '스포츠 EASY',
                    favorit: require('../../../../img/icon/Star.png')
                },
                {
                    img: require('../../../../img/userImage/user4.png'),
                    content: '스포츠 EASY',
                    favorit: require('../../../../img/icon/Star.png')
                },

            ],
        }));
    }, []);

    return (
        <Observer>
            {() => (
                <View style={[styles.container]}>
                    <View style={{ backgroundColor: '#F7F7F7', flex: 1 }}>
                        <CustomperPersonList data={state.list} use='favorits' />
                    </View>
                </View>
            )}
        </Observer>
    );
}

export default inject('userStore')(({ userStore, navigation }) => {
    return (
        <PageProvider>
            <Favorits userStore={userStore} navigation={navigation} />
        </PageProvider>
    );
});


const CustomStyles = StyleSheet.create({

    defualtFont: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: Fonts.NotoSans,
    },
    detailFont: {
        fontSize: 14,
        lineHeight: 20,
        color: '#929394',
        fontFamily: Fonts.NotoSans,
        margin: 5,
    },

});

