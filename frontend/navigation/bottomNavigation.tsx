import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import VehiclesScreen from '../components/vehicles/vehiclesScreen';
import StationsScreen from '../components/stations/stationsScreen';
import SettingsScreen from '../components/settings/settingsScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{tabBarStyle: styles.tabBar, tabBarLabelStyle: styles.tabLabel}}>
            <Tab.Screen name='Vehicles' component={VehiclesScreen}/>
            <Tab.Screen name='Stations' component={StationsScreen}/>
            <Tab.Screen name='Settings' component={SettingsScreen}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 0,
    },
    tabLabel: {
        paddingBottom: 6
    }
})

export default BottomNavigation
