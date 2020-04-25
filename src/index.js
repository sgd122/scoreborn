// App.js
import React, { useEffect } from 'react';
import AppNavigator from './settings/navigation/AppNavigator';
import { Provider } from 'mobx-react';
import rootStore from './settings/stores';
import Splash from './pages/Splash/Splash';
import Splash2 from './pages/Splash/Splash2';
const App = () => {
  useEffect(() => { }, []);

  return (
    <Provider {...rootStore}>
      {/* <Splash2 /> */}
      <AppNavigator />
    </Provider>
  );
};

export default App;
