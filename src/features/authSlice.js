import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
}


// Async Thunk for logging in 

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({email, password}, {rejectWithValue}) => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=> { // Mco Async Behavior
                const storedUser = JSON.parse(localStorage.getItem('user'))
                console.log('data Stored:', !storedUser)
                console.log(storedUser.email, email)
                if(!storedUser || storedUser.email !== email) {
                    reject(rejectWithValue('User not found'))
                } else if(storedUser.password !== password) {
                    reject(rejectWithValue('Incorrect password'))
                } else {
                    resolve(storedUser)
                }
            },1000)
        })
    }
)


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        registerUser: (state, action)=>{
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logoutUser: (state)=>{
            state.user = null,
            localStorage.removeItem('user')
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state, action)=>{
                state.loading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action)=> {
                state.loading = false
                state.user = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const {registerUser, logoutUser} = authSlice.actions
export default authSlice.reducer;