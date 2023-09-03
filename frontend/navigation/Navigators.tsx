import { createNativeStackNavigator } from "@react-navigation/native-stack";
//
import StationsScreen from "../components/stations/stationsScreen";
import StationLocation from "../components/stations/stationsLocation";
//
import VehiclesScreen from "../components/vehicles/vehiclesScreen";
import VehicleDetailsScreen from "../components/vehicles/vehicleDetailsScreen";
import NewVehicleScreen from "../components/vehicles/newVehicleScreen";
import EditVehicleScreen from "../components/vehicles/editVehicleScreen";
//
import SettingsScreen from "../components/settings/settingsScreen";
import SettingProfile from "../components/settings/settingsProfile"
import SettingsEditProfile from "../components/settings/settingsEditProfile";
import { Pressable, Text, View, TextInput} from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import SearchBar from "../styles/Search";
import { elements } from "../styles/Elements";
//
const Stack = createNativeStackNavigator();

const StationsNavigator = () => {
    return (
        <Stack.Navigator  initialRouteName="Stations">
            <Stack.Screen
                name="Stations"
                component={StationsScreen}
                options={{
                    title: ' ',
                    headerStyle: elements.header,
                    headerRight: () => (
                        <SearchBar/>
                    )
                }}
                />
            <Stack.Screen name="Location" component={StationLocation}/>
        </Stack.Navigator>
    )
}

export { StationsNavigator };


const CarsNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Vehicles">
            <Stack.Screen name="Vehicles" options={{}} component={VehiclesScreen}/>
            <Stack.Screen name="My Vehicle" options={{}} component={VehicleDetailsScreen}/>
            <Stack.Screen name="Add Vehicle" options={{}} component={NewVehicleScreen}/>
            <Stack.Screen name="Edit Vehicle" options={{}} component={EditVehicleScreen}/>
        </Stack.Navigator>
    )
}

export  { CarsNavigator }

const SettingsNavigator = () => {
    return (
        <Stack.Navigator  initialRouteName="Settings">
            <Stack.Screen name="Settings" options={{
                    title: 'Settings',
                    headerStyle: elements.header,
                    headerTitleStyle: elements.headerTitle
                    // headerRight: () => (
                    //     <Profile/>
                    // )
                }}
                component={SettingsScreen}/>
            <Stack.Screen name="Profile" component={SettingProfile}/>
            <Stack.Screen name="Edit Profile" component={SettingsEditProfile}/>
        </Stack.Navigator>
    )
}

export { SettingsNavigator };
