import React, {useState, createContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
// import useApiCall from './useApiCall';
import initial from './initial';
import {inject} from 'mobx-react';
// import useActions from './useActions';

export const AuthContext = createContext();

const AuthProvider = inject('userStore')(({children, userStore}) => {
  const [mainState, dispatch] = useState(initial);
  const bootstrapAsync = async () => {
    let userToken;
    try {
      userToken = await AsyncStorage.getItem('userToken');
    } catch (e) {
      // Restoring token failed
    }
    // console.log('::AsyncStorage::', AsyncStorage.getAllKeys());

    // After restoring token, we may need to validate it in production apps

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // dispatch({type: 'RESTORE_TOKEN', token: userToken});
    if (userToken != mainState.token) {
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    }
  };

  bootstrapAsync();

  //   useApiCall({mainState, dispatch, userStore});

  //   const actions = useActions({mainState, dispatch, userStore});

  return (
    <AuthContext.Provider value={{mainState, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
});

const {Consumer: AuthConsumer} = AuthContext;

export {AuthProvider, AuthConsumer};

export default AuthContext;
