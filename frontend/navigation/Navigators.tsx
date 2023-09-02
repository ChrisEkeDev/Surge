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
//
const Stack = createNativeStackNavigator();

const StationsNavigator = () => {
    return (
        <Stack.Navigator  initialRouteName="Stations">
            <Stack.Screen name="Stations" component={StationsScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Location" component={StationLocation}/>
        </Stack.Navigator>
    )
}

export { StationsNavigator };


const CarsNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Vehicles">
            <Stack.Screen name="Vehicles" component={VehiclesScreen}/>
            <Stack.Screen name="My Vehicle" component={VehicleDetailsScreen}/>
            <Stack.Screen name="Add Vehicle" component={NewVehicleScreen}/>
            <Stack.Screen name="Edit Vehicle" component={EditVehicleScreen}/>
        </Stack.Navigator>
    )
}

export  { CarsNavigator }

const SettingsNavigator = () => {
    return (
        <Stack.Navigator  initialRouteName="Settings">
            <Stack.Screen name="Settings" component={SettingsScreen}/>
            <Stack.Screen name="Profile" component={SettingProfile}/>
            <Stack.Screen name="Edit Profile" component={SettingsEditProfile}/>
        </Stack.Navigator>
    )
}

export { SettingsNavigator };
