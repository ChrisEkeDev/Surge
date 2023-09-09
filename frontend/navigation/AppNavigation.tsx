import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CarsNavigator, StationsNavigator, SettingsNavigator } from './Navigators';
import { useAppSelector } from '../store/hooks';
import { getUser } from '../store/session';
import Authentication from './Authentication';

  const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    const user = useAppSelector(state => getUser(state))
    console.log(user)

    return (
        <>
        {
            user ?
            <Tab.Navigator
            initialRouteName="StationsTab"
            backBehavior='order'
            sceneContainerStyle={styles.container}
            screenOptions={{
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.tabLabel,
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
                            return <MaterialIcons name='electric-car' size={24} color="#353766"/>
                        } else {
                            return <MaterialCommunityIcons name='car-electric-outline' size={24} color="#c4c4c4"/>
                        }
                    }
                }}
                name='VehiclesTab'
                component={CarsNavigator}
            />
            <Tab.Screen
                options={{
                    title: "Charging Stations",
                    tabBarIcon: (tabInfo) => {
                        if (tabInfo.focused) {
                            return <MaterialCommunityIcons name='map-search' size={24} color="#353766"/>
                        } else {
                            return <MaterialCommunityIcons name='map-search-outline' size={24}   color="#c4c4c4"/>
                        }
                    }
                }}
                name='StationsTab'
                component={StationsNavigator}
            />
            <Tab.Screen
                options={{
                    title: "Settings",
                    tabBarIcon: (tabInfo) => {
                        if (tabInfo.focused) {
                            return <MaterialIcons name='settings' size={24}  color="#353766"/>
                        } else {
                            return <MaterialCommunityIcons name='cog-outline' size={24}  color="#c4c4c4"/>
                        }
                    }
                }}
                name='SettingsTab'
                component={SettingsNavigator}
            />
        </Tab.Navigator> :
        <Authentication/>
        }
        </>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        height: 75,
        paddingBottom: 16
        // padding: 15
    },
    tabLabel: {
        fontSize: 15,
        marginBottom: 16,
        position: "absolute",
        bottom: -16
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

export default AppNavigation
