import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  user: [],
  loading: false,
  error: null,
};


// Async Thunk for check login status (called on app load)

export const checkLoginStatus = createAsyncThunk(
    'auth/checkLoginStatus',
    async (_, {rejectWithValue})=> {
        try{
            const response = await axios.post('http://192.168.179.192:5000/api/users/auth/profile',{}, {withCredentials: true})
            // localStorage.setItem('user', JSON.stringify(response.data)) // Will check this later
            // console.log('response', response.data)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.error || 'Session Expired')
        }
    }
)


// Async Thunk for User Registration

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (fromData, { rejectWithValue }) => {
    // console.log(fromData.password)
    try {
      const response = await axios.post(
        "http://192.168.179.192:5000/api/users/auth/createuser",
          fromData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    alert("User Registered Successfully!");

      const userData = response.data;

      // Store user data in local storage
      // localStorage.setItem('user', JSON.stringify(userData))

      return userData;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Registration Failed"
      );
    }
  }
);

// Async Thunk for logging in

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    // console.log(email, password)
      try {
          const response = await axios.post(
              "http://192.168.179.192:5000/api/users/auth/loginuser",
              { email, password },
              { withCredentials: true }
          );
          // console.log(response.data)
          return response.data;
      } catch (error) {
          // console.error("Login Error:", error);
          return rejectWithValue(
              error?.response?.data?.message || error.message || 'Login Failed'
          );
      }
  }
);



// Async Thunk for Logout
export const LogoutUser = createAsyncThunk(
  "auth/LogoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://192.168.179.192:5000/api/users/auth/logoutuser",
           {},
        {
          withCredentials: true, 
        }
      );
      return response.data.message;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message || "Session Expired");
    }
  }
);


// export const LogoutUser = createAsyncThunk(
//   "auth/LogoutUser",
//   async (_, { rejectWithValue }) => {
//     console.log("Sending request with fetch...");

//     try {
//       const response = await fetch(
//         "http://192.168.179.192:5000/api/users/auth/logoutuser",
//         {
//           method: 'POST',
//           credentials: 'include',  // Cookies are send with request
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           // body: JSON.stringify({
//           //   withCredentials: true,  // I don't have send this
//           // }),
//         }
//       );

//       // Log the request and response details
//       const responseData = await response.json();
//       console.log("Response Data:", responseData);

//       return responseData.message;

//     } catch (error) {
//       console.error("Error during fetch:", error);
//       return rejectWithValue(error.message || "Session Expired");
//     }
//   }
// );





const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetError: (state) => {
        state.error = null
    }
  },

  extraReducers: (builder) => {
    builder
    
        // Handle Login Status

        .addCase(checkLoginStatus.pending, (state)=>{
            state.loading = true
        })
        .addCase(checkLoginStatus.fulfilled, (state, action)=>{
            state.loading = false
            state.user = action.payload
            // console.log(state.user)
        })
        .addCase(checkLoginStatus.rejected, (state)=>{
            state.loading = false
            state.user = null
  
        })

      //Handle User Registrations

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null
        state.error = action.payload;
      })

    //   Handle User Login

      .addCase(loginUser.pending, (state) => {
        // localStorage.removeItem('user')
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null
        state.error = action.payload;
      })

      //Logout

      .addCase(LogoutUser.pending, (state)=>{
        state.loading = true
        state.error = null
      })
      .addCase(LogoutUser.fulfilled, (state, action)=> {
        state.loading = false
        state.user = action.payload
      })
      .addCase(LogoutUser.rejected, (state, action)=> {
        state.loading = false
        state.user = null
        state.error = action.payload
      })
      
  },
});

export const { resetError } = authSlice.actions;
export default authSlice.reducer;
