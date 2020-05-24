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
import VerticalGrayThineLine from '../../../../components/Line/VerticalGrayThineLine';
import HorizontalLine from '../../../../components/Line/HorizontalLine';
import CustomTextList from '../../../../components/ListItem/CustomTextList';

//* 스타일
import styles from '../../../../styles/common.module.scss';
import { Fonts } from '../../../../settings/fonts';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import CustomperPersonList from '../../../../components/ListItem/CustomListPerson'
import RoundImage from '../../../../components/Image/RoundImage';

const max = 16;
function ChatingRoom({ userStore, navigation }) {
    const { state, setState, } = useContext(PageContext);

    useEffect(() => {
        //* Navigation
        setState((prev) => ({ ...prev, navigation: navigation }));

        setState((prev) => ({
            ...prev,
            list: [
                {
                    name: '김덕중',
                    detail: '세상에서 제일 쉬운 조합만 모아서 준비했어요',
                    arriveTime: '14:26',
                    readflag: false
                },
                {
                    name: '스포츠 어드벤쳐',
                    detail: '세상에서 제일 쉬운 조합만 모아서 준비했어요ddddddddssss',
                    arriveTime: '1시간 전',
                    readflag: true
                },
                {
                    name: '김덕중',
                    detail: '세상에서 제일 쉬운 조합만 모아서 준비했어요',
                    arriveTime: '1시간 전',
                    readflag: false
                },
                {
                    name: '스포츠 어드벤쳐',
                    detail: '세상에서 제일 쉬운 조합만 모아서 준비했어요',
                    arriveTime: '14:26',
                    readflag: true
                },
                {
                    name: '김덕중',
                    detail: '세상에서 제일 쉬운 조합만 모아서 준비했어요',
                    arriveTime: '14:26',
                    readflag: false
                },
                {
                    name: '스포츠 어드벤쳐',
                    detail: '세상에서 제일 쉬운 조합만 모아서 준비했어요',
                    arriveTime: '14:26',
                    readflag: true
                },
                {
                    name: '김덕중',
                    detail: '세상에서 제일 쉬운 조합만 모아서 준비했어요',
                    arriveTime: '14:26',
                    readflag: true
                },
                {
                    name: '스포츠 어드벤쳐',
                    detail: '세상에서 제일 쉬운 조합만 모아서 준비했어요',
                    arriveTime: '14:26',
                    readflag: false
                },

            ],
        }));
    }, []);

    return (
        <Observer>
            {() => (
                <View style={[styles.container]}>
                    <View style={{ backgroundColor: '#F7F7F7', flex: 1 }}>

                        <FlatList
                            data={state.list}
                            renderItem={({ item, index }) => followList(item, index)}
                            showsVerticalScrollIndicator={true}
                        //TODO:나중에 데이터가 많아지면 페이지네이션으로 고치기
                        // initialNumToRender={15}
                        // maxToRenderPerBatch={15}
                        // onEndReachedThreshold={0.1}
                        // onEndReached={({ distanceFromEnd }) => this.moreData()}
                        />
                    </View>
                </View>
            )}
        </Observer>
    );
}

export default inject('userStore')(({ userStore, navigation }) => {
    return (
        <PageProvider>
            <ChatingRoom userStore={userStore} navigation={navigation} />
        </PageProvider>
    );
});

const followList = (item, index) => {
    return (
        <View style={
            item.readflag ?
                CustomStyles.flatlistroot1
                : CustomStyles.flatlistroot2
        }>
            <View style={{
                flexDirection: 'row',
                alignContent: 'center',
            }}>
                <RoundImage
                    source={require('../../../../img/game/game1.png')}
                />
                <View style={CustomStyles.flatlistTextContent}>

                    <Text
                        style={[
                            CustomStyles.defualtFont,
                            { fontSize: 14, marginRight: 10 },
                        ]}
                    >
                        {item.name}
                    </Text>

                    <View style={{ flexDirection: 'row', alignContent: 'center', }}>
                        <Text
                            style={[CustomStyles.defualtFont, { color: '#ADADAD', fontSize: 12, width: '80%' }]
                            }
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            {item.detail}
                        </Text>
                        <Text
                            style={[
                                CustomStyles.defualtFont,
                                { fontSize: 14, color: '#ADADAD', position: 'absolute', right: 0 },
                            ]}
                        >
                            {item.arriveTime}
                        </Text>
                    </View>

                </View>

            </View>
            <VerticalGrayThineLine />
        </View>
    );
};

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
    flatlistroot1: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 16,
        paddingTop: 12
    },
    flatlistroot2: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        paddingHorizontal: 16,
        paddingTop: 12
    },
    flatlistTextContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1
    }

});





