import { createContext, useContext, useState } from 'react';
import { Vehicle } from '../models';

type Context = {
    saveVehicle: (vehicle: Vehicle) => void;
    deleteVehicle: (id: number) => void;
    editVehicle: (vehicle: Vehicle) => void;
    myVehicles: {};
    view: string;
    setView: (view:string) => void;
    locationsOn: boolean,
    setLocationsOn: (toggle: boolean) => void
}

const AppContext = createContext<Context | null>(null);

export const useApp = () => useContext(AppContext)

const AppProvider = ({children}) => {
    const [ myVehicles, setMyVehicles ] = useState({})
    const [ view, setView ] = useState('map');
    const [ locationsOn, setLocationsOn ] = useState(true)

    const saveVehicle = (vehicle: Vehicle) => {
        setMyVehicles({...myVehicles, [vehicle.id]: vehicle})
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

    return (
        <AppContext.Provider value={{
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
