import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, Vehicle } from '../../models'

type UserCredential = {
    username: string,
    password: string
}

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'https://surge-luab.onrender.com/api/'}),
    endpoints: (builder) => ({
        getUserVehicles: builder.query<Vehicle[], void>({
            query: () => `/vehicles` //||  { url: '/posts', method: 'POST, body: newPost}
        }),
        getUserVehicleById: builder.query<Vehicle, string>({
            query: (id) => `/vehicles/${id}`
        })
        // saveNewVehicle: builder.mutation<Vehicle, Partial<Vehicle>>({
        //     query: (body) => ({
        //         url: `vehicles`,
        //         method: 'POST',
        //         body
        //     })
        // })
    })
})

export const { useGetUserVehiclesQuery, useGetUserVehicleByIdQuery } = apiSlice;
