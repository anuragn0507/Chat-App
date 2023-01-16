import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Constants } from "../../settings/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { currentUser } from "../../components/Auth/currentUser";

// for getting the data from the async storage

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    // console.log("value store is async storate", jsonValue);r
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(
      `Error while fetching data from async storage of key ${key} `,
      e
    );
  }
};

export const signUp = createAsyncThunk("user/signup", async (data) => {
  console.log("data which is going to save in firestore before", data);
  const obj = {
    displayName: data?.displayName,
    uid: data?.uid,
    isgroup: false,
    members: null,
    phoneNumber: data?.phoneNumber,
  };
  console.log("data which is going to save in firestore object after", obj);
  try {
    await firestore()
      .collection("Users")
      .doc("" + obj?.uid)
      .set(obj);
  } catch (e) {
    console.log("Error while pushing the user to firestore", e);
  }

  return true;
});

export const addInitialUser = createAsyncThunk(
  "user/currentUser", async(data)=>{

    console.log("55555555data is coming in addintial user thunk before", data)
    const obj = {
      displayName: data?.displayName,
      uid: data?.uid,
      isgroup: false,
      members: null,
      phoneNumber: data?.phoneNumber,
    };
    try{
      return obj;
    }catch (e) {
      console.log("Error while getting the action.payload", e);
    }
  }
  
);

let initialUser = {};
console.log("current user", currentUser);



const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    userStatus: Constants.IDLE,
    userError: "Unkown Error Occured!",
    signOutStatus: Constants.IDLE,
    signOutError: "Unkown Error Occured!",
  },
  reducer: {
    resetUserState: (state) => {
      state.userStatus = Constants.IDLE;
      state.signOutStatus = Constants.IDLE;
      state.userError = "Unknown Error Occured";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signUp.pending, (state, action) => {
        state.userStatus = Constants.LOADING;
        console.log("In pending state signup");
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.userStatus = Constants.FULFILLED;
        // state.user = initialUser;
        console.log("In fullfilled state yyyyyyyyyyyyyyy");
      })
      .addCase(signUp.rejected, (state, action) => {
        state.userError = "Something went wrong";
        console.log("kuch gadbad hui hai xxxxxxxxxxxxxxxxxxxx");
      })
      .addCase(addInitialUser.pending, (state, action) => {
        console.log("current user id adding through slice in pending state");
      })
      .addCase(addInitialUser.fulfilled, (state, action) => {
        // state.user = action.payload
        state.user ={...state.user,...action.payload}
        console.log("addInitial user action k andr kya haiyyyyyyyy",action.payload);
        
      })
      .addCase(addInitialUser.rejected, (state, action) => {
        console.log("rejected the user additionxxxxxxxxx", action.error.message);
      });
  },
});

export const { resetUserState } = userSlice.actions;
export default userSlice.reducer;
