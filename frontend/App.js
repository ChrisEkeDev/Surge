import { StatusBar } from 'expo-status-bar';
import { createNavigator } from './navigation/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './navigation/bottomNavigation'
import AppProvider from './context/appContext';

export default function App() {
  return (
    <AppProvider>
      <StatusBar/>
      <NavigationContainer>
        <BottomNavigation/>
      </NavigationContainer>
    </AppProvider>
  );
}
