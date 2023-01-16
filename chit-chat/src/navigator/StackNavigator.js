import { View, Text } from "react-native";
import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput } from "react-native-paper";
import PhoneAuth from "../components/Auth/PhoneAuth";
import BottomNav from "./BottomNav";
import Navbar from "../components/Navbar";
import UserDetails from "../screens/UserDetails";
import SignOutBtn from "../components/SignOutBtn";
import ChatRoom from "../screens/ChatRoom";
import ClickingPhotofromgallery from "../components/Stories/Clickingphotofromgalery";
import ClickingPhoto from "../components/Stories/clickingphotofromcamera";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={PhoneAuth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignOut"
          component={SignOutBtn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoom}
        />
        <Stack.Screen
          name="ClickingPhotoFromGallery"
          component={ClickingPhotofromgallery}
        />
        <Stack.Screen
          name="ClickingStoryFromCamera"
          component={ClickingPhoto}
        />

        <Stack.Screen
          name="Bottom"
          component={BottomNav}
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Navbar />,
            headerBackVisible:false,
          })}
          // options={{headerBackImageSource:""}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
