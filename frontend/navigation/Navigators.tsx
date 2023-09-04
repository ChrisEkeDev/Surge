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
import SettingsDeleteProfile from "../components/settings/settingsDeleteProfile";
import { Pressable, Text, View, TextInput} from "react-native";

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import SearchBar from "../styles/Search";
import Back from "../styles/Back"
import Logo from "../styles/Logo";
import { elements } from "../styles/Elements";
import DeleteVehicleScreen from "../components/vehicles/settingsDeleteVehicle";
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
            <Stack.Screen name="Vehicles"  options={{
                    title: 'Vehicles',
                    headerStyle: elements.header,
                    headerTitleStyle: elements.headerTitle,
                    headerLeft: () => <Logo icon={<MaterialCommunityIcons name='car-electric-outline' size={24}  color="white"/>} />
                }} component={VehiclesScreen}/>
            <Stack.Screen name="My Vehicle" options={({route, navigation}) => ({
                    title: `Vehicle`,
                    headerStyle: elements.header,
                    headerTitleStyle: elements.headerTitle,
                    headerLeft: () => <Back navigation={navigation}/>
                })} component={VehicleDetailsScreen}/>
            <Stack.Screen name="Add Vehicle" options={({navigation}) => ({
                    title: 'Add New Vehicle',
                    headerStyle: elements.header,
                    headerTitleStyle: elements.headerTitle,
                    headerLeft: () => <Back navigation={navigation}/>
                })} component={NewVehicleScreen}/>
            <Stack.Screen name="Edit Vehicle" options={({route, navigation}) => ({
                    title: `Edit Vehicle`,
                    headerStyle: elements.header,
                    headerTitleStyle: elements.headerTitle,
                    headerLeft: () => <Back navigation={navigation}/>
                })} component={EditVehicleScreen}/>
            <Stack.Screen name="Delete Vehicle" options={({route, navigation}) => ({
                    title: `Delete Vehicle`,
                    headerStyle: elements.header,
                    headerTitleStyle: elements.headerTitle,
                    headerLeft: () => <Back navigation={navigation}/>
                })} component={DeleteVehicleScreen}/>
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
                    headerTitleStyle: elements.headerTitle,
                    headerLeft: () => <Logo icon={<MaterialCommunityIcons name='cog-outline' size={24}  color="white"/>}/>
                }}  component={SettingsScreen}/>
            <Stack.Screen name="Profile" options={({navigation}) => ({
                    title: 'Profile',
                    headerStyle: elements.header,
                    headerTitleStyle: elements.headerTitle,
                    headerLeft: () => <Back navigation={navigation}/>
                })} component={SettingProfile}/>
            <Stack.Screen name="Edit Profile" options={({navigation}) => ({
                    title: 'Edit Profile',
                    headerStyle: elements.header,
                    headerTitleStyle: elements.headerTitle,
                    headerLeft: () => <Back navigation={navigation}/>
                })} component={SettingsEditProfile}/>
            <Stack.Screen name="Delete Profile" options={({navigation}) => ({
                    title: 'Delete Profile',
                    headerStyle: elements.header,
                    headerTitleStyle: elements.headerTitle,
                    headerLeft: () => <Back navigation={navigation}/>
                })} component={SettingsDeleteProfile}/>
        </Stack.Navigator>
    )
}

export { SettingsNavigator };
