import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: ()=> 'users',
            keepUnusedDataFor: 300, // Cached data for 5 minutes
        })
    })
})

export const { useGetAllUsersQuery } = apiSlice