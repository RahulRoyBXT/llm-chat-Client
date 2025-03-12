import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../API/apiSlice";
import userReducer from '../features/userSlice.js'
import ThemeSlice from "./ThemeSlice.js"


export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        users: userReducer, // added user slice here 
        theme: ThemeSlice,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(apiSlice.middleware),
})