import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ChatCard from "../components/chat/ChatCard";
import { Avatar, Card, IconButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from "@react-native-firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import UserList from "../components/UserList";
import PhoneAuth from "../components/Auth/PhoneAuth";
import { getAllUsers } from "../redux/slices/usersSlice";
import { addInitialUser } from "../redux/slices/userSlice";
import { currentUser } from "../components/Auth/currentUser";
import SignOutBtn from "../components/SignOutBtn";

// Store the phone authentication data in async storage
export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("phoneAuth", jsonValue);
  } catch (e) {
    console.log(`Error while storing the data ${value} in async storage`, e);
  }
};

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

const HomeChat = ({ navigation }) => {
  console.log("homechat component is called from here");

  const { user } = useSelector((state) => state.userReducer);
  const { users, usersStatus, usersError } = useSelector(
    (state) => state.usersReducer
  );

  const dispatch = useDispatch();

  const getLocalData = async () => {
    try {
      const userData = await getData("phoneAuth");
      
      
    } catch {
      (e) => console.log("error in getting data from asyncstorage ", e);
    }
  };

  useEffect(() => {
    getLocalData();
  }, []);

  useEffect(() => {
    const firestoreusercollection = firestore().collection("Users");

    return firestoreusercollection.onSnapshot((querySnapshot) => {
      if (querySnapshot != null) {
        let result = [];
        querySnapshot.forEach((documentSnapshot) => {
          const data = documentSnapshot.data();
          result.push(data);
        });
        // remove current user from list

        let x = user ? result.filter((item) => item.uid !== user.uid) : result;

        //getting all the users from userSlice
        dispatch(getAllUsers(x));

        // Remove groups that does not belongs to current user will be return here
      }
    });
  }, []);

  useEffect(() => {
    console.log("user in home chatUUUUUUUUUU", user);
    console.log("users in home chat", users);
  }, []);

  

  useEffect(() => {
    if (user === null) {
      navigation.navigate("PhoneAuth");
    } else {
      let x = users.filter((data) => data.uid !== user.uid);
      dispatch(getAllUsers(x));
    
    }
  }, [user]);

  return (
    <View>
      <UserList users={users} />      
    </View>
  );
};

export default HomeChat;
