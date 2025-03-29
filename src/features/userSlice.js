import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [], // Store user data here
    allUsers: [],
    error: null,
    loading: null,
}

export const GetAllUsers = createAsyncThunk(
    'users/all',
    async (_,{rejectWithValue})=> {
        try{
            const response = await axios.get('http://192.168.56.192:5000/api/getalluser',{ withCredentials: true},{})
            console.log('this is respose:',response.data)
            return response.data
        } catch (error) {
            console.log('not worked')
            return rejectWithValue(error.message || 'Unable to get users')
        }
    }
)

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers : ( state, action ) => {
            state.users = action.payload // Update state with fetched users
        },
        setFilteredData: (state, action)=>{
            state.filteredData = action.payload
        }
    },
    extraReducers: (builder)=> {
        builder
        .addCase(GetAllUsers.pending, (state)=> {
            state.loading = true
        })
        .addCase(GetAllUsers.fulfilled, (state, action)=> {
            state.allUsers = action.payload
            state.loading = false
            state.error = false
        })
        .addCase(GetAllUsers.rejected, (state, action)=> {
            state.error = action.payload
            state.loading = false
        })
    }
})

export const {setUsers, setFilteredData} = userSlice.actions
export default userSlice.reducer;