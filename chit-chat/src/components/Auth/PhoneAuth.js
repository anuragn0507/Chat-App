import { StyleSheet, Text, View, Alert } from "react-native";
import {
  Avatar,
  TextInput,
  icon,
  Button,
  List,
  IconButton,
  MD3Colors,
} from "react-native-paper";
import React, { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { currentUser } from "./currentUser";

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

const PhoneAuth = ({ navigation }) => {
  // if null, no sms has sent
  const [confirm, setConfirm] = useState("");
  const [code, setCode] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [phoneVerified, setPhoneVerified] = useState(false);

  // Handle the button press
  async function signInWithPhoneNumber() {
    setPhoneVerified(true);
    const num = "+91 " + phoneNum;
    console.log("num is ", num);

    if (num.length === 14) {
      const confirmation = await auth().signInWithPhoneNumber(num);
      // console.log("confirmation ", confirmation);
      setConfirm(confirmation);
      navigation.setOptions({
      headerTitle:true,
    })
    } else {
      Alert.alert("Entered Wrong Number", "Please Enter 10 Digit Number", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    setPhoneNum("");
  }

  async function confirmCode() {
    console.log("confirmcode is called");
    try {
      const res = await confirm.confirm(code);
      console.log("you are verified now", res);
      // currentUser = {...currentUser, ...res};
      storeData(res);
      setCode("");
      getLocalData();
    } catch (error) {
      console.log("Invalid code.");
    }
  }

  const getLocalData = async () => {
    const userData = await getData("phoneAuth");
    console.log("userData", userData);
    if (userData != null) {
      navigation.navigate("UserDetails");
    }
  };

  useEffect(() => {
    console.log("Confirm kya hai", phoneVerified);
    setPhoneVerified(false);
    getLocalData();
  }, []);
  useEffect(()=>{
    // navigation.setOptions({
    //   headerTitle:params?.displayName,
    // })
  },[])

  return (
    <View style={styles.container}>
      {phoneVerified ? (
        <>
          <TextInput
            value={code}
            onChangeText={(text) => setCode(text)}
            style={styles.otp}
          />

          <Button
            mode="contained"
            style={styles.codeBtn}
            onPress={() => confirmCode()}
          >
            Confirm Code
          </Button>
        </>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>
              Enter your phone number to get started
            </Text>
            <Text style={styles.desc}>
              You will receive a verification code. Carrier rates may apply
            </Text>

            <TextInput mode="outlined" label="India" type="text" />
            <View style={styles.phoneNumInput}>
              <View style={styles.countryCode}>
                <TextInput mode="outlined" label="+91" type="number" />
              </View>
              <View style={styles.phoneNum}>
                <TextInput
                  value={phoneNum}
                  mode="outlined"
                  label="Phone number"
                  type="number"
                  onChangeText={(newText) => setPhoneNum(newText)}
                />
              </View>
            </View>
            <Button
              mode="contained"
              style={styles.signUpButton}
              disabled={phoneNum.length != 10 ? true : false}
              onPress={() => signInWithPhoneNumber()}
            >
              Next
            </Button>
          </View>
        </>
      )}
    </View>
  );
};

export default PhoneAuth;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 30,
  },
  desc: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 30,
  },
  phoneNumInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  countryCode: {
    width: "20%",
  },

  phoneNum: {
    width: "77%",
  },

  signUpButton: {
    padding: 5,
    marginVertical: 15,
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
