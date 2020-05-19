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
            <Follow userStore={userStore} navigation={navigation} />
        </PageProvider>
    );
});

const followList = (item, index) => {
    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
                width: '90%', height: 58, backgroundColor: '#FFF', marginTop: 16, flexDirection: 'row',
                justifyContent: 'flex-start', alignItems: 'center'
            }}>
                <Image source={item.img} style={{ width: 48, height: 48, borderRadius: 24, marginLeft: 16, marginRight: 16 }}></Image>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.content}</Text>
                <View style={{ position: 'absolute', right: 16, }}>
                    <TouchableOpacity style={{ height: 58, width: 28, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={item.favorit} style={{ width: 20, height: 20, }}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const moreData = () => {
    // if (this.state.scrollOffset === this.state.combine_personList_data.length - 1) {
    //     return
    // }
    // const allData = this.state.combine_personList_data //전체 배열 데이터
    // const addData = allData[this.state.scrollOffset + 1] //더하는 인덱스의 데이터
    // const combineData = this.state.personList_data.concat(addData) //함치기

    // this.setState({
    //     personList_data: combineData, //pagenation
    //     scrollOffset: this.state.scrollOffset + 1//index+1
    // })
}

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

