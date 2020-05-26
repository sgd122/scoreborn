// router.js
import React, { useEffect, useContext, Fragment } from 'react';
import { Button, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//* mobx
import AuthContext, { AuthProvider } from '../../../../settings/navigation/AuthContext';
import { Observer, observer, inject } from 'mobx-react';

// import SplashScreen from '../../../pages/Splash/Splash';


// import Favorits from './Favorits'
// import ChatingRoom from './ChatingRoom'
import Follow from '../Follow'
import { color } from 'react-native-reanimated';
import Favorits from './Favorits';
import ChatingRoom from './ChatingRoom';
import LikeTab from '../../../../pages/Pick/likeTab';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Htab = createMaterialTopTabNavigator();

const options = {
    headerStyle: {},
    headerTitleStyle: {
        fontWeight: 'bold',
        color: '#F00',
    },
};

/**
 * * 앱 메인 화면
 */

export default function FavoritPage({ navigation }) {
    return (
        <Fragment>
            <SafeAreaView style={{ flex: 0, backgroundColor: '#001943' }} />
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <Htab.Navigator>
                    <Htab.Screen
                        name="Pick"
                        component={Favorits}
                        options={{
                            tabBarLabel: '유저',
                        }}
                    />
                    <Htab.Screen
                        name="Game"
                        component={ChatingRoom}
                        options={
                            { tabBarLabel: '채팅방' }
                        }
                    />
                    <Htab.Screen
                        name="Like"
                        component={LikeTab}
                        options={{ tabBarLabel: '전문가' }}
                    />
                </Htab.Navigator>
            </SafeAreaView>
        </Fragment>
    );
}

