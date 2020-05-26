//* 마이페이지

import React, { useEffect, useContext } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native';

import { Fonts } from '../../settings/fonts'

export default function CustomListPerson({ data }) {
    return (
        <FlatList
            data={data}
            renderItem={({ item, index }) => followList(item, index)}
            showsVerticalScrollIndicator={true}
        //TODO:나중에 데이터가 많아지면 페이지네이션으로 고치기
        // initialNumToRender={15}
        // maxToRenderPerBatch={15}
        // onEndReachedThreshold={0.1}
        // onEndReached={({ distanceFromEnd }) => this.moreData()}
        />
    );
}

const flatListRenderItem = (item, index) => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ width: '100%', paddingHorizontal: 20, paddingVertical: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.name}</Text>
            </View>
            {index !== 1 ? (
                <View
                    style={{
                        flexDirection: 'row',
                        width: '100%',
                        paddingHorizontal: 20,
                        borderBottomColor: '#F7F7F7',
                        borderBottomWidth: 1,
                    }}
                />
            ) : null}
        </View>
    );
};


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