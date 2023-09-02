import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StationsScreen from "../components/stations/stationsScreen";
import StationLocation from "../components/stations/stationsLocation";

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
