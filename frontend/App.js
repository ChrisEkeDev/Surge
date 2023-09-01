import { StatusBar } from 'expo-status-bar';
import BottomNavigation from './navigation/bottomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import VehicleStack from './stacks/vehicleStack';
import StationsStack from './stacks/stationsStack';
import AppProvider from './context/appContext';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        {/* <VehicleStack/> */}
        <StationsStack/>
      </NavigationContainer>
    </AppProvider>
  );
}
