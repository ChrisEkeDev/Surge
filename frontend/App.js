
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/AppNavigation'
import AppProvider from './context/appContext';
import Authentication from './navigation/Authentication';
import { useApp } from './context/appContext';

export default function App() {
  return (
    <AppProvider>
        <NavigationContainer>
          <AppNavigation/>
        </NavigationContainer>
    </AppProvider>
  );
}
