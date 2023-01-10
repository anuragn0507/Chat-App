import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PhoneAuth from "./components/Auth/PhoneAuth";
import Notification from "./components/notification/Notification";

export default function App() {
  return (
    <View style={styles.container}>      
      <StatusBar style="auto" />
      
      <PhoneAuth />
    </View>
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
