import { createContext, useContext, useEffect, useState } from 'react';
import { Vehicle, Location } from '../models';
import { vehicles } from '../models';

type Context = {
    saveVehicle: (vehicle: Vehicle) => void;
    deleteVehicle: (id: number) => void;
    editVehicle: (vehicle: Vehicle) => void;
    myVehicles: {};
    view: string;
    setView: (view:string) => void;
    locationsOn: boolean,
    setLocationsOn: (toggle: boolean) => void,
    currentLocation: Location,
    setCurrentLocation: (location: Location) => void,
}

const AppContext = createContext<Context | null>(null);

export const useApp = () => useContext(AppContext)

const AppProvider = ({children}) => {
    const [ myVehicles, setMyVehicles ] = useState({})
    const [ view, setView ] = useState('map');
    const [ locationsOn, setLocationsOn ] = useState(true);
    const [ currentLocation, setCurrentLocation ] = useState(null)
    console.log(myVehicles)

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

    return (
        <AppContext.Provider value={{
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
