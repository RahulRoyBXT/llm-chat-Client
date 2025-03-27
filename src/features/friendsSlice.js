import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FriendList = createAsyncThunk(
    "friends/list",
    async (userId, { rejectWithValue }) => {
        // console.log("Checking data: ", userId);
        try {
            const result = await axios.get(`${import.meta.env.VITE_API_USER_FRIENDS_LIST}${userId}`);
            // console.log("response", result.data);
            return result.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Something went wrong");
        }
    }
);

const FriendSlice = createSlice({
    name: "friend",
    initialState: {
        friends: [],
        loading: false, // Default should be `false`, not `null`
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FriendList.pending, (state) => {
                state.loading = true;
            })
            .addCase(FriendList.fulfilled, (state, action) => {
                state.loading = false;
                state.friends = action.payload;
                state.error = null; // Reset error on success
            })
            .addCase(FriendList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default FriendSlice.reducer;
