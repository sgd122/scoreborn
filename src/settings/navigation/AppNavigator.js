// router.js
import React, {useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

//* mobx
import AuthContext, {AuthProvider} from './AuthContext';
import {Observer, observer, inject} from 'mobx-react';

//* Tab
import MyAuthLogin from './Tab/MyAuthLogin'; //* 인증 화면
import MyMainTab from './Tab/MyMainTab'; //* 앱 메인 화면

function Router() {
  const {mainState, dispatch} = useContext(AuthContext);
  return (
    <Observer>
      {() => (
        <NavigationContainer>
          {mainState.token == null ? <MyAuthLogin /> : <MyMainTab />}
        </NavigationContainer>
      )}
    </Observer>
  );
}

export default inject('userStore')(({userStore}) => {
  return (
    <AuthProvider userStore={userStore}>
      <Router />
    </AuthProvider>
  );
});
