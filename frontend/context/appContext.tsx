import { createContext, useContext, useState } from 'react';
import { Vehicle } from '../models';

type Context = {
    saveVehicle: (vehicle: Vehicle) => void;
    deleteVehicle: (id: number) => void;
    editVehicle: (vehicle: Vehicle) => void;
    myVehicles: {};
}

const AppContext = createContext<Context | null>(null);

export const useApp = () => useContext(AppContext)

const AppProvider = ({children}) => {
    const [ myVehicles, setMyVehicles ] = useState({})

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
        <AppContext.Provider value={{myVehicles, saveVehicle, deleteVehicle, editVehicle}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider
