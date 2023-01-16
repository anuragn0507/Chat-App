import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Filter from "./components/Filter/Filter";
import Invite from "./components/Invite/Invite";
import Notification from "./components/notification/Notification";
import Settings from "./components/Settings/Settings";
import SideBox from "./components/SideBox/SideBox";

export default function App() {
  return (
    <View style={styles.container}>
        {/* <Notification /> */}
        <StatusBar style="light" hidden={false} backgroundColor='black'  />
        <SideBox />
        {/* <Invite /> */}
        {/* <Settings /> */}
        {/* <Filter /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c3744',
    alignItems: "center",
    justifyContent: "center",
  },
});
