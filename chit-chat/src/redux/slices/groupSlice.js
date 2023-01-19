import { createSlice } from "@reduxjs/toolkit";





const groupSlice= createSlice({
    name:'group',
    initialState:{
        userSelected:[],
    },
    reducers:{
        addSelectedUser:(state, action)=>{
            console.log("addselected user action is called ");
            state.userSelected = [...state.userSelected, action.payload];
        },
        removeSelectedUser:(state, action)=>{
            console.log("addselected user action is called ");
            const newArray = state.userSelected.filter( item => item.uid != action.payload.uid);
            state.userSelected = [...newArray];
        }
    }
})

export const {addSelectedUser, removeSelectedUser} = groupSlice.actions;
export default groupSlice.reducer;