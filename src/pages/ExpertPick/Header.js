import React, {useEffect, useContext} from 'react';
//* 전문가픽
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {Observer, observer, inject} from 'mobx-react';
import PageContext, {PageProvider} from './Context';

//* 공통 컴포넌트
import PickCard from '../../components/Card/Pick/PickCard';

//* 스타일
import styles from '../../styles/common.module.scss';

export default function ExpertPick({userStore, navigation}) {
  const {
    state,
    setState,
    actions: {callLogin, callSignUp, callForgot},
  } = useContext(PageContext);

  useEffect(() => {}, []);

  return (
    <PickCard
      data={state.header_list}
      style={{backgroundColor: '#fff'}}
      type={'expertPick'}
    />
  );
}
