// router.js
import React, {useEffect, useContext} from 'react';
import {Button, View, Text} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Sider from '../../../pages/Sider';
export default function SiderContent(props) {
  return (
    // <DrawerContentScrollView {...props}>
    //   {/* <DrawerItemList {...props} /> */}
    //   <DrawerItem
    //     label="라이브"
    //     onPress={() => props.navigation.navigate("Live")}
    //   />
    //   <DrawerItem
    //     label="픽"
    //     onPress={() => props.navigation.navigate("Pick")}
    //   />
    //   <DrawerItem
    //     label="채팅"
    //     onPress={() => props.navigation.navigate("Chat")}
    //   />
    //   <DrawerItem
    //     label="마켓"
    //     onPress={() => props.navigation.navigate("Market")}
    //   />
    // </DrawerContentScrollView>

    <Sider />
  );
}
