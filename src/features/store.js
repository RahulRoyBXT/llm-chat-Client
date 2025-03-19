import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../API/apiSlice";
import { combineReducers } from "redux";

import userReducer from "../features/userSlice.js";
import ThemeSlice from "./ThemeSlice.js";
import authReducer from "./authSlice.js";

// Root Reducer
const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducer,
    theme: ThemeSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
