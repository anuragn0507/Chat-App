import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import PhoneAuth from "./Auth/PhoneAuth";

// Store the phone authentication data in async storage
export const removeData = async () => {
  try {
    // const jsonValue = JSON.stringify(value);
    await AsyncStorage.removeItem("phoneAuth");
  } catch (e) {
    console.log(`Error while storing the data ${value} in async storage`, e);
  }
};

// for getting the data from the async storage

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    // console.log("value store is async storate", jsonValue);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(
      `Error while fetching data from async storage of key ${key} `,
      e
    );
  }
};

const SignOutBtn = () => {
  const navigation = useNavigation();

  useEffect(()=>{
    signOut();
  },[])

  const signOut = () => {
    console.log("inside the signout function");
    removeData();
    navigation.navigate("Login");
  };

  return (
    <View>
      <Button
        mode="contained"
        onPress={() => {
          console.log("Sign Out button is clicked");
          signOut();
        }}
      >
        Sign out
      </Button>
    </View>
  );
};

export default SignOutBtn;

const styles = StyleSheet.create({});
