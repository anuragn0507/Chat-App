import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  PermissionsAndroid,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import PhoneAuth from "./components/Auth/PhoneAuth";
import Notification from "./components/notification/Notification";
import SignOutBtn from "./components/SignOutBtn";
import StackNavigator from "./navigator/StackNavigator";
import UserDetails from "./screens/UserDetails";

const requestCameraPermission = async () => {
  if (PermissionsAndroid.RESULTS.GRANTED) {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Chit Chat App Camera Permission",
          message: "Chit Chat App need access to your camera to add the story",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the Camera");
      } else {
        console.log("Camera Permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }
};

export default function App() {
  useEffect(() => {
    requestCameraPermission();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <StackNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  otp: {
    borderWidth: 0.5,
    width: 200,
    marginBottom: 20,
    marginTop: 250,
    alignSelf: "center",
  },
  codeBtn: {
    padding: 5,
    margin: 40,
    marginVertical: 10,
  },
});
