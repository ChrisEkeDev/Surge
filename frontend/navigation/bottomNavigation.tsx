import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CarsNavigator, StationsNavigator, SettingsNavigator } from './Navigators';

  const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="VehiclesTab"
            backBehavior='order'
            sceneContainerStyle={styles.container}
            screenOptions={{
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.tabLabel,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#353766",
                tabBarHideOnKeyboard: true,
                headerShown: false
            }}
            >
            <Tab.Screen
                options={{
                    title: "Vehicles",
                    tabBarIcon: (tabInfo) => {
                        if (tabInfo.focused) {
                            return <MaterialIcons name='electric-car' size={32} color="#353766"/>
                        } else {
                            return <MaterialCommunityIcons name='car-electric-outline' size={32} color="#c4c4c4"/>
                        }
                    }
                }}
                name='VehiclesTab'
                component={CarsNavigator}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: (tabInfo) => {
                        if (tabInfo.focused) {
                            return <MaterialCommunityIcons name='map-search' size={32} color="#353766"/>
                        } else {
                            return <MaterialCommunityIcons name='map-search-outline' size={32}   color="#c4c4c4"/>
                        }
                    }
                }}
                name='StationsTab'
                component={StationsNavigator}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: (tabInfo) => {
                        if (tabInfo.focused) {
                            return <MaterialIcons name='settings' size={32}  color="#353766"/>
                        } else {
                            return <MaterialCommunityIcons name='cog-outline' size={32}  color="#c4c4c4"/>
                        }
                    }
                }}
                name='SettingsTab'
                component={SettingsNavigator}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        height: 75,
        // padding: 15
    },
    tabLabel: {
        fontSize: 15,
        marginBottom: 12
    },
    tabBarLabel: {

        backgroundColor: "blue"
    },
    tabBarIconStyle: {
        backgroundColor: "green"
    },
    container: {
        height: '100%'
    }

})

export default BottomNavigation
