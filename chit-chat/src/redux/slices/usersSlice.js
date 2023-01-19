import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Constants } from '../../settings/config'
import  compareObj from '../../helpers/compareObj'


export const getAllUsers = createAsyncThunk('users/getallusers', async data =>{
    console.log("data coming to getAllUsers sent from homecccccccc", data);
    return data.sort((a,b) => a.displayName.localeCompare(b.displayName));

})

const usersSlice = createSlice({
    name:'users',
    initialState:{
        users:[],
        usersStatus: Constants.IDLE,
        usersError:'Unknown Error Occured!',
    },
    reducers:{
        resetUsersStatus:state=>{
            state.usersStatus = Constants.IDLE;
            state.usersError = 'Unknown Error Occured!';
        },
        resetUsersData: state =>{
            state.users =[];
            state.usersStatus= Constants.IDLE;
            state.usersError = 'Unknown Error Occured!';
        },
    },
    extraReducers(builder){
        builder
        .addCase(getAllUsers.pending, state =>{
            state.usersStatus = Constants.LOADING;
        })
        .addCase(getAllUsers.fulfilled, (state, action)=>{
            state.usersStatus = Constants.FULFILLED;
            if(!compareObj(state.users, action.payload, 'uid')){
                state.users=[...action.payload];
            }else{
                state.users=[...action.payload];
                console.log("Tera getlluser ka fullfilled nhi chal rha hai compareobj k karan", action.payload)
            }
        })
        .addCase(getAllUsers.rejected, (state, action)=>{
            state.usersStatus = Constants.REJECTED;
            action?.error?.message && (state.usersError = action?.error?.message);
            console.log("Tera getlluser asyncthunk reject ho rha hai xxxxxxxxxx", action?.error?.message)
        });
    },
});

export const {resetUsersData, resetUsersStatus} = usersSlice.actions;
export default usersSlice.reducer;
