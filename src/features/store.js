import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../API/apiSlice";
import { combineReducers } from "redux";

import authReducer from "./authSlice.js";
import userReducer from "../features/userSlice.js";
import ThemeReducer from "./ThemeSlice.js";
import FriendsReducer from './friendsSlice.js'
import MessagesSlice from './messageSlice.js'

// Root Reducer
const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducer,
    theme: ThemeReducer,
    friends: FriendsReducer,
    messages: MessagesSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});


export default store;
