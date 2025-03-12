import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [], // Store user data here
    filteredData: []
}

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
    }
})


export const {setUsers, setFilteredData} = userSlice.actions;
export default userSlice.reducer;