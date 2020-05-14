//* 라이브
import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Observer, observer, inject } from 'mobx-react';
import PageContext, { PageProvider } from '../Context';

//* 공통 컴포넌트
import RoundImage from '../../../components/Image/RoundImage';

//* 스타일
import styles from '../../../styles/common.module.scss';
import { Fonts } from '../../../settings/fonts';

function NickNameChange({ userStore, navigation }) {
    const {
        state,
        setState,
        actions: { callLogin, callSignUp, callForgot },
    } = useContext(PageContext);

    const max = 16

    useEffect(() => {
        //* Navigation
        setState((prev) => ({ ...prev, navigation: navigation }));

        setState((prev) => ({
            ...prev,
        }));
    }, []);

    return (
        <Observer>
            {() => (
                <View style={[styles.container]}>
                    <View style={CustomStyles.NickNameChangeView}>
                        <View style={{ width: '80%' }}>
                            <Text style={CustomStyles.NickNameChangeViewTitle}>새로운 닉네임</Text>
                            <View>
                                <View style={CustomStyles.NickNameInputBox}>
                                    <TextInput
                                        value={state.inputText}
                                        onChangeText={(text) => setState((prev) => ({ ...prev, inputText: text }))}
                                        style={{ marginLeft: 8, textAlignVertical: 'center', max }}
                                        placeholder={'닉 우스터'}
                                        maxLength={16}
                                    >
                                    </TextInput>
                                    <View style={{ position: 'absolute', right: 12 }}>
                                        <Text>{(state.inputText ? state.inputText.length : 0) + '/' + max}</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={CustomStyles.NickNameChangeViewBottom}>한글, 숫자만 사용하실 수 있습니다.</Text>
                        </View>
                    </View>
                </View>
            )
            }
        </Observer >
    );
}

export default inject('userStore')(({ userStore, navigation }) => {
    return (
        <PageProvider>
            {/* <HeaderScreen navigation={navigation} /> */}
            <NickNameChange userStore={userStore} navigation={navigation} />
        </PageProvider>
    );
});

const CustomStyles = StyleSheet.create({
    defualtFont: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: Fonts.NotoSans,
    },
    NickNameChangeView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32
    },
    NickNameChangeViewTitle: {
        fontFamily: Fonts.NotoSans,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: -0.09,
        color: '#292C30'
    },
    NickNameInputBox: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 5,
        height: 42,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 8
    },
    NickNameChangeViewBottom: {
        fontFamily: Fonts.NotoSans,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: -0.09,
        color: '#ADADAD',
        marginTop: 4
    }
});
