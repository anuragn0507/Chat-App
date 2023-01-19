import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from "@react-native-firebase/firestore";

export const createGroupInFirebase = createAsyncThunk(
  "group/create",

  async (data) => {
    console.log("Inside createGroupInFirebase async thunk ", data);

    await firestore().collection("Users").doc("", data.uid).set(data);
  }
);

const groupSlice = createSlice({
  name: "group",
  initialState: {
    userSelected: [],
    createGroupState:"Loading",
  },
  reducers: {
    addSelectedUser: (state, action) => {
      console.log("addselected user action is called ");
      state.userSelected = [...state.userSelected, action.payload];
    },
    removeSelectedUser: (state, action) => {
      console.log("addselected user action is called ");
      const newArray = state.userSelected.filter(
        (item) => item.uid != action.payload.uid
      );
      state.userSelected = [...newArray];
    },
  },
  extraReducers(builder){
    builder
    .addCase(createGroupInFirebase.pending,( state, action )=>{
        console.log("create group in firebase is in pending state")
        createGroupState="Pending"
    })
    .addCase(createGroupInFirebase.fulfilled,( state, action )=>{
        createGroupState="Success"
        console.log("create group in firebase is in fulfilled state")
    })
    .addCase(createGroupInFirebase.rejected,( state, action )=>{
        console.log("create group in firebase is rejected")
        createGroupState="Rejected"
    })
  }
});

export const { addSelectedUser, removeSelectedUser } = groupSlice.actions;
export default groupSlice.reducer;
