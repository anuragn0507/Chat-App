import { View, Text } from "react-native";
import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput } from "react-native-paper";
import PhoneAuth from "../components/Auth/PhoneAuth";
import BottomNav from "./BottomNav";
import Navbar from "../components/Navbar";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "black" }}>Home Screen</Text>
      <TextInput mode="outlined" label="India" />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bottom">
        <Stack.Screen
          name="Bottom"
          component={BottomNav}
          options={{ headerTitle:()=> <Navbar />}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
