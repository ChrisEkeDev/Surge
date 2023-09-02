
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './navigation/bottomNavigation'
import AppProvider from './context/appContext';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomNavigation/>
      </NavigationContainer>
    </AppProvider>
  );
}
