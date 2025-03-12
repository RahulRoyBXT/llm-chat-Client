import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name: 'themes',
    initialState: {theme: 'dark'},
    reducers: {
        dark : (state) => {state.theme = 'dark'},
        light: (state) => {state.theme = 'light'},
        dracula : (state) => {state.theme = 'dracula'},
        aqua : (state) => {state.theme = 'aqua'},
        coffee: (state) => {state.theme = 'coffee'},
        night: (state) => {state.theme = 'night'},
        abyss: (state) => {state.theme = 'abyss'},
        synthwave: (state) => {state.theme = 'synthwave'}
    }
})

export const {dark, light, dracula, aqua, coffee, night, abyss, synthwave} = ThemeSlice.actions

export default ThemeSlice.reducer
