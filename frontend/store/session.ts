

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index'

type User = {
  id: number,
  username: string,
  password: string
}

type UserCredentials = {
  username: string,
  password: string
}

interface SessionState {
  user: User
}

export const thunkSignIn = (credentials: UserCredentials) => async (dispatch:any) => {
    const res = await fetch('http://localhost:8000/api/session', {
      method: "POST",
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      credentials: 'include',
      body: JSON.stringify(credentials),
    })
    const response = await res.json();
    if (response.status === 200) {
      dispatch(setUser(response.data))
    }
}

export const thunkSignOut = () => async (dispatch:any) => {
  const res = await fetch('http://localhost:8000/api/session', {
      method: "DELETE",
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    })
    const response = await res.json();
    if (response.status === 200) {
      dispatch(clearUser())
    }
}




const initialState: SessionState = {
  user: null
}

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    clearUser: (state) => {
      state.user = null
    }
  }
})

export const { setUser, clearUser } = sessionSlice.actions

export const getUser = (state: RootState) => state.session.user;

export default sessionSlice.reducer
