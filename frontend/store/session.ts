

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index'
import { User } from '../models';

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
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE' },
      credentials: 'include',
      body: JSON.stringify(credentials),
    })

    if (res && res.ok) {
      let response = await res.json();
      console.log(response)
      if (response.status === 200) {
        dispatch(setUser(response.data))
      }
    } else {
      let errors = await res.json();
      return errors
    }
}

export const thunkSignOut = () => async (dispatch:any) => {
  const res = await fetch('http://localhost:8000/api/session', {
      method: "DELETE",
      credentials: 'include',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE' },
    })
    const response = await res.json();
    if (response.status === 200) {
      dispatch(clearUser())
    }
}

export const thunkSignUp = (user: User) => async (dispatch: any) => {
  const res = await fetch("http://localhost:8000/api/users", {
    method: "POST",
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE' },
    credentials: 'include',
    body: JSON.stringify(user),
  })

  if (res && res.ok) {
    let response = await res.json();
    if (response.status === 200) {
      dispatch(setUser(response.data))
    }
  } else {
    let errors = await res.json();
      console.log(errors)
      return errors
  }
}

// export const thunkSignOff = (id: number) => async (dispatch: any) => {
//   const res = await fetch(`http://localhost:8000/api/users/${id}`, {

//   })
// }




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
