import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Notification from "./components/notification/Notification";
import SideBox from "./components/SideBox/SideBox";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Notification /> */}
      {/* <StatusBar style="auto" /> */}
      <SideBox />
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
