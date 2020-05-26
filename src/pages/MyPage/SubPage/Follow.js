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
import PageContext, { PageProvider } from '../Context';

//* 공통 컴포넌트
import VerticalGrayLine from '../../../components/Line/VerticalGrayLine';
import HorizontalLine from '../../../components/Line/HorizontalLine';
import CustomTextList from '../../../components/ListItem/CustomTextList';

//* 스타일
import styles from '../../../styles/common.module.scss';
import { Fonts } from '../../../settings/fonts';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import CustomperPersonList from '../../../components/ListItem/CustomListPerson'


const max = 16;
function Follow({ userStore, navigation }) {
    const { state, setState, } = useContext(PageContext);

    useEffect(() => {
        //* Navigation
        setState((prev) => ({ ...prev, navigation: navigation }));

        setState((prev) => ({
            ...prev,
            list: [
                {
                    img: require('../../../img/userImage/eaImage.png'),
                    content: '스포츠 EASY',
                    favorit: require('../../../img/icon/Star.png')
                },
                {
                    img: require('../../../img/userImage/defaultThubnail.png'),
                    content: '스포츠 EASY',
                    favorit: require('../../../img/icon/Star.png')
                },
                {
                    img: require('../../../img/userImage/myImage.png'),
                    content: '스포츠 EASY',
                    favorit: require('../../../img/icon/Star.png')
                },
                {
                    img: require('../../../img/userImage/user4.png'),
                    content: '스포츠 EASY',
                    favorit: require('../../../img/icon/Star.png')
                },

            ],
        }));
    }, []);

    return (
        <Observer>
            {() => (
                <View style={[styles.container]}>
                    <View style={{ backgroundColor: '#F7F7F7', flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
                            <Image source={require('../../../img/icon/person.png')} style={{ width: 12, height: 12, marginRight: 2 }} resizeMode='contain' />
                            <Text style={{ color: '#042B6C', fontSize: 14, fontWeight: 'bold', letterSpacing: -0.07 }}>30명</Text>
                            <Text style={{ color: '#042B6C', fontSize: 14, letterSpacing: -0.07 }}>이 나를 즐겨 찾기를 하고 있습니다.</Text>
                        </View>
                        <CustomperPersonList data={state.list} />
                    </View>
                </View>
            )}
        </Observer>
    );
}

export default inject('userStore')(({ userStore, navigation }) => {
    return (
        <PageProvider>
            <Follow userStore={userStore} navigation={navigation} />
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

