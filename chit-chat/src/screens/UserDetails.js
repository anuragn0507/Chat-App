import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, IconButton, TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/slices/userSlice";

// Store the phone authentication data in async storage
export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("phoneAuth", jsonValue);
  } catch (e) {
    console.log(`Error while storing the data ${value} in async storage`, e);
  }
};

// for getting the data from the async storage

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    // console.log("value store is async storate", jsonValue);r
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(
      `Error while fetching data from async storage of key ${key} `,
      e
    );
  }
};

const UserDetails = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userAuth, setUserAuth] = useState({});

  const dispatch = useDispatch();

  const getLocalData = async () => {
    try {
      const userData = await getData("phoneAuth");
      console.log("userData", userData);
      setUserAuth(userData);
    } catch {
      (e) => console.log("error in getting data from asyncstorage ", e);
    }
  };

  useEffect(() => {
    getLocalData();
    // gotoHomePage()
  }, []);

  const setUserName = () => {
    setUserAuth((prev) => {
      console.log("prev", prev);
      return { ...prev, user: { ...prev?.["user"], displayName: displayName } };
    });
    setDisplayName("");
  };

  useEffect(() => {
    userAuth != null && storeData(userAuth);
    addName();
  }, [setUserAuth, userAuth]);

  const addName = () => {
    storeData(userAuth);
    gotoHomePage();
  };

  const gotoHomePage = async () => {
    const userData = await getData("phoneAuth");
    console.log("current user in userDetails", userData);
    //using the async function signUp or userReducer
    dispatch(signUp(userData));
    userData?.user?.displayName != null && navigation.navigate("Bottom");
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <Text>
          Profiles are visible to people you message, Contacts and groups. Learn
          more
        </Text>
        <View style={styles.profileImageContainer}>
          <IconButton style={styles.profileImage} icon="account" size={100} />
          <IconButton
            mode="contained-tonal"
            style={styles.cameraIcon}
            icon="camera"
            iconColor="black"
            size={25}
          />
        </View>
        {/* <Text>Hello {user ? user.displayName : "Guest"}!</Text> */}
        <View>
          <TextInput
            value={displayName}
            onChangeText={(t) => setDisplayName(t)}
            mode="outlined"
            label="First name (required)"
            type="text"
            required
          />
          <TextInput
            value={lastName}
            onChangeText={(t) => setLastName(t)}
            mode="outlined"
            label="Last name (optional)"
            type="text"
          />
          <Button
            mode="contained"
            style={styles.signUpButton}
            disabled={displayName.length === 0 ? true : false}
            onPress={() => {
              console.log("User Details are filled");
              setUserName();
            }}
          >
            Next
          </Button>
        </View>
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 30,
    marginTop: 20,
  },
  profileImageContainer: {
    alignItems: "center",
    margin: 15,
    marginTop: 40,
  },
  profileImage: {
    backgroundColor: "#CBC3E3",
  },
  cameraIcon: {
    position: "absolute",
    left: "55%",
    top: "55%",
  },
  signUpButton: {
    padding: 5,
    marginVertical: 15,
  },
  googleBtn: {
    padding: 5,
    backgroundColor: "rgb(210, 4, 45)",
  },
});
