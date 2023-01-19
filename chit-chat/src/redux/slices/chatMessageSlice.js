import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Constants } from "../../settings/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { currentUser } from "../../components/Auth/currentUser";

export const writeMessage = createAsyncThunk(
  "chatmessage/write",
  async (data) => {
    console.log("message details arrived in asycn thunk", data)
    try {
      await firestore().collection("Messages").add(data);
      return true;
    } catch (e) {
      console.log(
        "Error while sending message to firestore from async thunk",
        e
      );
    }
  }
);

const chatMessageSlice = createSlice({
  name: "chatMessage",
  initialState: {
    writeMessageStatus: Constants.IDLE,
    chatMessages: [],
    writeMessageError: "Something went wrong!",
  },
  reducers: {
    setChatMessages: (state, action) => {
      state.chatMessages = [...action.payload];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(writeMessage.pending, (state) => {
        state.writeMessageStatus = Constants.LOADING;
        console.log("send messages is in pending state");
      })
      .addCase(writeMessage.fulfilled, (state) => {
        state.writeMessageStatus = Constants.FULFILLED;
        console.log("send messages is saved Sucessfull");
      })
      .addCase(writeMessage.rejected, (state) => {
        state.writeMessageStatus = Constants.REJECTED;
        action?.error?.message &&
          (state.writeMessageError = action?.error?.message);
        console.log("send messages is rejected", action?.error?.message);
      });
  },
});

export const { setChatMessages } = chatMessageSlice.actions;
export default chatMessageSlice.reducer;
