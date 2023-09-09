// import { csrfFetch } from "./csrf";

// const SET_USER = "session/setUser";
// const REMOVE_USER = "session/removeUser";

// const setUser = (user) => ({
//     type: SET_USER,
//     payload: user,
// })

// const removeUser = () => ({
//     type: REMOVE_USER,
// })

// // export const thunkSignIn = (user) => async (dispatch) => {
// //   const response = await csrfFetch("/api/session", {
// //     method: "POST",
// //     body: JSON.stringify(user),
// //   });

// //   try {
// //     const data = await response.json();
// //     dispatch(setUser(data.user));
// //     return response;
// //   } catch(e) {
// //     console.log(e)
// //   }

// // };

// // const initialState = { user: null };

// // const sessionReducer = (state = initialState, action) => {
// //   let newState;
// //   switch (action.type) {
// //     case SET_USER:
// //       newState = Object.assign({}, state);
// //       newState.user = action.payload;
// //       return newState;
// //     case REMOVE_USER:
// //       newState = Object.assign({}, state);
// //       newState.user = null;
// //       return newState;
// //     default:
// //       return state;
// //   }
// // };

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index'
import { csrfFetch } from './csrf';
import Cookies from 'js-cookie';
import { useAppDispatch } from './hooks';

type RequestState = 'pending' | 'fulfilled' | 'rejected'
type User = {
  username: string,
  email: string
}

type UserCredentials = {
  username: string,
  password: string
}

interface SessionState {
  status: string,
  user: User
}

export const thunkSignIn = createAsyncThunk<User, UserCredentials>(
  `/session`,
  async (credentials, { rejectWithValue }) => {
    const res = await fetch('http://localhost:8000/api/session/', {
      method: "POST",
      body: JSON.stringify(credentials)
    })
    const response = await res.json();
    console.log(response);
    // if (res.ok) {
    //   const data = await res.json();
    //   return data;
    // } else {
    //   const error = await res.json()
    //   console.log(error)
    // }
})



const initialState: SessionState = {
  status: null,
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
  },
  extraReducers: (builder) => {
    builder.addCase(thunkSignIn.pending, (state) => {
      state.status = "pending"
    })
    builder.addCase(thunkSignIn.fulfilled, (state, action) => {
      state.status = "fulfilled"
      state.user = action.payload
    })
    builder.addCase(thunkSignIn.rejected, (state) => {
      state.status = "rejected"
    })

  }
})

export const { setUser, clearUser } = sessionSlice.actions

export const getUser = (state: RootState) => state.session.user;
export const getStatus = (state: RootState) => state.session.status;

export default sessionSlice.reducer
// export default sessionReducer;
