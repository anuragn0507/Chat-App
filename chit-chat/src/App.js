import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import PhoneAuth from "./components/Auth/PhoneAuth";
import Notification from "./components/notification/Notification";
import SignOutBtn from "./components/SignOutBtn";
import StackNavigator from "./navigator/StackNavigator";
import UserDetails from "./screens/UserDetails";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      
      <StackNavigator />
      {/* <PhoneAuth /> */}
      {/* <UserDetails /> */}
      {/* <SignOutBtn /> */}
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
    margin:40,
    marginVertical: 10,
  },
});
