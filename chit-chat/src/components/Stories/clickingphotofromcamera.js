import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import firestore from "@react-native-firebase/firestore";

import { launchCamera } from "react-native-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { resetMyStory } from "../../redux/slices/userStorySlice";
import { useNavigation } from "@react-navigation/native";

export default function ClickingPhoto() {
  const [images, setimages] = useState("");
  let options = {
    storageOption: {
      path: "images",
      mediaType: "photo",
    },
    includeBase64: true,
    maxHeight:600,
    maxWidth:800,
  };

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    console.log("user in use clicking photo by camera", user);
  }, []);

  launchCamera(options, (response) => {
    console.log("lauch camera options me kya hai ", options);
    if (response.didCancel) {
      console.log("users canceled image picker");
    } else if (response.error) {
      console.log("Error response image picker", response.error);
      
    } else if (response.customButton) {

    } else {
      // sending back to the story page

      navigation.navigate("Bottom");

      
      const source = response.assets[0].base64;
      
      firestore()
        .collection("users")
        .doc(user?.uid)
        .set({
            status: `data:image/jpeg;base64,${source}`,
            displayName:user?.displayName,
            uid: user?.uid,
        })
        .then(() => {
          console.log("status added in fireStore!");
          dispatch(resetMyStory(
            {
              status: `data:image/jpeg;base64,${source}`,
              displayName:user?.displayName,
              uid: user?.uid,
          }
          ))
        })
        .catch((e) =>
          console.log(
            "Error while saving the story image in firebase using camera",
            e
          )
        );
    }
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
