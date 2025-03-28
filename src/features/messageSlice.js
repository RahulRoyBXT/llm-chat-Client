import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    messageContent : [], // DB stored message
    temMessages : [], // Temporary Messages
    loading : null,
    error: null
}

export const GetMessages = createAsyncThunk(
    'messages/all',
    async (URL, {rejectWithValue})=> {
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_GET_USER_MESSAGES}${URL}`)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data?.message || 'Something Went Wrong')
        }
    }
)


// Send Messages

export const sendMessage = createAsyncThunk(
    'messages/send',
    async ({ senderId, receiverId, content, uniqueId}, {rejectWithValue})=> {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_USER_SEND_MESSAGES}`,
                {senderId, receiverId, content, uniqueId}
            )
            return response.data.data

        } catch (error) {
            return rejectWithValue( error.response?.data?.message || 'Failed to send message')
        }
    }
) 


const MessagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        updateTempMessage: (state, action) => {
            state.temMessages.push(action.payload)
            console.log('messages: ', state.temMessages)
        }
    },
    extraReducers: (builder) => {
        builder
        // Send Messages
        .addCase(sendMessage.pending, (state)=> {
            state.loading = true
        })
        .addCase(sendMessage.fulfilled, (state, action) => {
            state.loading = false
                // Check if the message with the same uniqueId exists
                const index = state.temMessages.findIndex(msg => msg.uniqueId === action.payload.uniqueId);
                
                if (index !== -1) {
                    // If found, update the existing message in place
                    state.temMessages[index] = action.payload;
                }
            
            state.messageContent = action.payload
        }
        )
        .addCase(sendMessage.rejected, (state, action)=> {
            state.loading = false
            state.error = action.payload
        })  

        // Get messages
        .addCase(GetMessages.pending, (state)=> {
            state.loading = true
        })
        .addCase(GetMessages.fulfilled, (state, action)=>{
            state.loading = false
            state.messageContent = action.payload
            state.temMessages = action.payload
        })
        .addCase(GetMessages.rejected, (state, action)=> {
            state.loading = false
            state.error = action.payload
        })

    }
})

export const { updateTempMessage } = MessagesSlice.actions
export default MessagesSlice.reducer;