import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CarsNavigator, StationsNavigator, SettingsNavigator } from './Navigators';

  const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Stations"
            backBehavior='order'
            sceneContainerStyle={styles.container}
            screenOptions={{
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.tabLabel,
                headerShown: false
            }}
            >
            <Tab.Screen

                options={{

                }}
                name='Vehicles'
                component={CarsNavigator}
            />
            <Tab.Screen
                options={{
                }}
                name='Stations'
                component={StationsNavigator}
            />
            <Tab.Screen
                options={{
                }}
                name='Settings'
                component={SettingsNavigator}
            />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        // position: 'absolute',
        bottom: 0,
    },
    tabLabel: {
        paddingBottom: 6
    },
    tabBarLabel: {

    },
    tabBarIconStyle: {

    },
    container: {
        height: '100%'
    }

})

export default BottomNavigation
