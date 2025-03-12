import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../API/apiSlice";


import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

import userReducer from '../features/userSlice.js'
import ThemeSlice from "./ThemeSlice.js"

//auth import 

import  authReducer from './authSlice.js'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["auth"], // Only persisting auth state
}

// Root Reducer
const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducer,
    theme: ThemeSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,

})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer, // Persisted reducer
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false, // For Redux persist
        }).concat(apiSlice.middleware),
})

export const persistor = persistStore(store)