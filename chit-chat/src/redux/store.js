import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import usersReducer from './slices/usersSlice'
import chatMessageReducer from './slices/chatMessageSlice'
import usersStoryReducer from './slices/userStorySlice'
import groupReducer from './slices/groupSlice'


export const store = configureStore({
    reducer:{
        userReducer,
        usersReducer,
        chatMessageReducer,
        usersStoryReducer,
        groupReducer,
        },
})