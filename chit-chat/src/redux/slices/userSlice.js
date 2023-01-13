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
  // console.log("data which is going to save in firestore", data);
  const obj = {
    displayName: data?.user?.displayName,
    uid: data?.user?.uid,
    isgroup: false,
    members: null,
    phoneNumber: data?.user?.phoneNumber,
  };
  console.log("data which is going to save in firestore", obj);
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
    const obj = {
      displayName: data?.user?.displayName,
      uid: data?.user?.uid,
      isgroup: false,
      members: null,
      phoneNumber: data?.user?.phoneNumber,
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

// const getLocalData = async () => {
//   try {
//     const userData = await getData("phoneAuth");
//     console.log("userData in home", userData);
//     initialUser = {...initialUser,
//       displayName: userData.user.displayName,
//       phoneNum: userData.user.phoneNumber,
//       isGroup: false,
//     };
//     console.log("returning initialUser", initialUser);
//     return initialUser;
//   } catch {
//     (e) => console.log("error in getting data from asyncstorage ", e);
//   }
// };

// console.log("intialUser 1", initialUser);

// const getIntialUser =() => {
//   return getLocalData();
// };

// console.log("get Initial user returning " , getIntialUser());

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
        console.log("In pending state");
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.userStatus = Constants.FULFILLED;
        state.user = initialUser;
        console.log("In fullfilled state");
      })
      .addCase(signUp.rejected, (state, action) => {
        state.userError = "Something went wrong";
        console.log("kuch gadbad hui hai");
      })
      .addCase(addInitialUser.pending, (state, action) => {
        console.log("current user id adding through slice");
      })
      .addCase(addInitialUser.fulfilled, (state, action) => {
        // state.user = action.payload
        console.log("action k andr kya hai",action.payload);
        state.user ={...state.user, ...action.payload}
      })
      .addCase(addInitialUser.rejected, (state, action) => {
        console.log("rejected the user addition", action.error.message);
      });
  },
});

export const { resetUserState } = userSlice.actions;
export default userSlice.reducer;
