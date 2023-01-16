import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Constants } from '../../settings/config'
import  compareObj from '../../helpers/compareObj'



const userStorySlice = createSlice({
    name:'stories',
    initialState:{
        stories:[],
        myStory:{},
    },
    reducers:{
        resetUsersStories:(state, action)=>{
            state.stories = [...action.payload]
            console.log("stories is added in redux store")
        },
        resetMyStory:(state, action)=>{
            state.myStory = {...action.payload};
            console.log("myMtory is added in redux store")
        }
    }
})

export const{ resetUsersStories, resetMyStory} = userStorySlice.actions;

export default userStorySlice.reducer;