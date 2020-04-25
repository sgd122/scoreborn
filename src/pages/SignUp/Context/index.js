import React, { useState, createContext } from 'react';
import useApiCall from "./useApiCall";
import initial from "./initial";
import { inject } from "mobx-react";
import useActions from "./useActions";


export const PageContext = createContext();


const PageProvider = inject("userStore")(({ children, userStore }) => {
  const [state, setState] = useState(initial);

  useApiCall({ state, setState, userStore });

  const actions = useActions({ state, setState, userStore });

  return (
    <PageContext.Provider value={{ state, setState, actions }}>
      {children}
    </PageContext.Provider>
  );
});

const { Consumer: PageConsumer } = PageContext;

export {
  PageProvider,
  PageConsumer,
};

export default PageContext;
