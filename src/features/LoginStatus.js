import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


export const LoginStatus = createAsyncThunk(
    'login/status',
    async ()=> {
        try{
            const result = axios.post("http://localhost:5000/api/users/auth/check", { withCredentials: true})
            return result
        } catch (error) {
            return error
        }
        
    }
)
const initialState = {
    user: null,
    error: null,
    loading: false,
}

const login = createSlice({
    name: 'login',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(LoginStatus.pending, (state)=>{
            state.loading = true
        })
        .addCase(LoginStatus.fulfilled, (state, action)=>{
            state.loading = false
            state.user = action.payload
        })
        .addCase(LoginStatus.rejected, (state, action)=>{
            state.error = action.payload
        })
    }
})

export default login.reducer;

