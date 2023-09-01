import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VehiclesScreen from "../components/vehicles/vehiclesScreen";
import VehicleDetailsScreen from "../components/vehicles/vehicleDetailsScreen";
import NewVehicleScreen from "../components/vehicles/newVehicleScreen";
import EditVehicleScreen from "../components/vehicles/editVehicleScreen";

const Stack = createNativeStackNavigator();

const VehicleStack = () => {
    return (
        <Stack.Navigator initialRouteName="Vehicles">
            <Stack.Screen name="Vehicles" component={VehiclesScreen}/>
            <Stack.Screen name="My Vehicle" component={VehicleDetailsScreen}/>
            <Stack.Screen name="Add Vehicle" component={NewVehicleScreen}/>
            <Stack.Screen name="Edit Vehicle" component={EditVehicleScreen}/>
        </Stack.Navigator>
    )
}

export default VehicleStack
