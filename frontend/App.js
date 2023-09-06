
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/AppNavigation'
import AppProvider from './context/appContext';
import configureStore from './store';
import { store } from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';

// if (process.env.NODE_ENV !== 'production') {
//   // restoreCSRF();
//   // window.csrfFetch = csrfFetch;
//   // window.store = store;
// }

export default function App() {
  return (
    <Provider store={store}>
      <AppProvider>
          <NavigationContainer>
            <AppNavigation/>
          </NavigationContainer>
      </AppProvider>
    </Provider>
  );
}
