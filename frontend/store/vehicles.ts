import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index'
import { Vehicle } from '../models';


interface SessionState {
    vehicle: Vehicle
    vehicles: any
  }


  const initialState: SessionState = {
    vehicle: null,
    vehicles: {}
  }

  export const thunkGetUserVehicles = () => async (dispatch:any) => {
    const res = await fetch('http://localhost:8000/api/vehicles', {
        method: "GET",
        credentials: 'include',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    })
    const response = await res.json();
    if (response.status === 200) {
      dispatch(getUserVehicles(response.data))
    }
  }

  export const thunkEditUserVehicle = (vehicle: Vehicle) => async (dispatch: any) => {
    const res = await fetch(`http://localhost:8000/api/vehicles/${vehicle.id}`, {
      method: "PUT",
      credentials: 'include',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(vehicle)
    })
    console.log(vehicle)
    const response = await res.json();
    if (response.status === 200) {
      dispatch(editUserVehicle(response.data))
    }
  }

  export const vehiclesSlice = createSlice({
    name: "vehicles",
    initialState,
    reducers: {
      getUserVehicles: (state, action: PayloadAction<Vehicle[]>) => {
        action.payload.forEach(vehicle => state.vehicles[vehicle.id] = vehicle)
      },
      editUserVehicle: (state, action: PayloadAction<Vehicle>) => {
        state.vehicles[action.payload.id] = action.payload
      }
    }
  })

  export const { getUserVehicles, editUserVehicle } = vehiclesSlice.actions

//   export const getUser = (state: RootState) => state.session.user;

  export default vehiclesSlice.reducer
