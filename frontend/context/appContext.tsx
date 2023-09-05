import { createContext, useContext, useEffect, useState } from 'react';
import { Vehicle, User } from '../models';
import { vehicles } from '../models';
import * as Location from 'expo-location';
import { getStations } from '../utils/GetStations';

type Context = {
    saveVehicle: (vehicle: Vehicle) => void;
    deleteVehicle: (id: number) => void;
    editVehicle: (vehicle: Vehicle) => void;
    myVehicles: {};
    view: string;
    setView: (view:string) => void;
    stations: any,
    setStations: (stations: any) => void,
    locationsOn: boolean,
    setLocationsOn: (toggle: boolean) => void,
    currentLocation: any,
    setCurrentLocation: (location: any) => void,
    user: User,
    setUser: (user: User) => void
}

const AppContext = createContext<Context | null>(null);

export const useApp = () => useContext(AppContext)

const AppProvider = ({children}) => {
    const [stations, setStations] = useState<any>(null)
    const [ myVehicles, setMyVehicles ] = useState({})
    const [ view, setView ] = useState('map');
    const [ locationsOn, setLocationsOn ] = useState(true);
    const [ currentLocation, setCurrentLocation ] = useState(null);
    const [ user, setUser ] = useState(null)

    const saveVehicle = (vehicle: Vehicle) => {
        const newState = { ...myVehicles, [vehicle.id]: vehicle };
        setMyVehicles(newState)
    }

    const editVehicle = (vehicle: Vehicle) => {
        const newState = {...myVehicles}
        newState[vehicle.id] = vehicle;
        setMyVehicles(newState)
    }

    const deleteVehicle = (id: number) => {
        const newState = { ...myVehicles }
        delete newState[id]
        setMyVehicles(newState)
    }

    const initState = () => {
        const obj = {};
        for (let i = 0; i < vehicles.length; i++) {
            obj[vehicles[i].id] = vehicles[i]
        }
        setMyVehicles(obj)
    }

    useEffect(() => {
        initState()
    }, [])

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
            // const stations = getStations({
            //     latitude: currLoc.coords.latitude,
            //     longitude: currLoc.coords.longitude
            // })
            // setStations(stations)
        }
        getPermissions()
    }, [])

    return (
        <AppContext.Provider value={{
            stations,
            setStations,
            user,
            setUser,
            currentLocation,
            setCurrentLocation,
            locationsOn,
            setLocationsOn,
            view,
            setView,
            myVehicles,
            saveVehicle,
            deleteVehicle,
            editVehicle
            }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider
