import { createContext, useContext, useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { screen } from '../styles/MasterStyles'
import { Modal, View, Text, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Context = {
    loading: boolean;
    setLoading: (v:boolean) => void;
    currentLocation:any;
    setCurrentLocation: (x:any) => void;
    view: string;
    setView: (view:string) => void;
}

const AppContext = createContext<Context | null>(null);

export const useApp = () => useContext(AppContext)

const AppProvider = ({children}) => {
    const [ loading, setLoading ] = useState(false);
    const [ currentLocation, setCurrentLocation] = useState({})
    const [ view, setView ] = useState('map');

    useEffect(() => {
        const getPermissions = async () => {
            let  { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log("Please grant permissions.")
                return
            }
            let currLoc = await Location.getCurrentPositionAsync({})
            setCurrentLocation({
                latitude: currLoc.coords.latitude,
                longitude: currLoc.coords.longitude
            })
        }
        getPermissions()
    }, [])

    return (
        <AppContext.Provider value={{
            currentLocation,
            setCurrentLocation,
            view,
            setView,
            loading,
            setLoading
            }}>
                <Modal
                    visible={loading}
                    // animationType='fade'
                    >
                    <View style={screen.centered}>
                        <MaterialCommunityIcons name="lightning-bolt" size={50} color="#A7AFF4" />
                    </View>
                </Modal>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider
