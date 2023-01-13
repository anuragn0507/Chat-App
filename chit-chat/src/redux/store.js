import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import usersReducer from './slices/usersSlice'
import chatMessageReducer from './slices/chatMessageSlice'


export const store = configureStore({
    reducer:{
        userReducer,
        usersReducer,
        chatMessageReducer,
    },
})