import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import PhoneAuth from "./components/Auth/PhoneAuth";
import Notification from "./components/notification/Notification";
import StackNavigator from "./navigator/StackNavigator";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />

      {/* <PhoneAuth /> */}
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
});
