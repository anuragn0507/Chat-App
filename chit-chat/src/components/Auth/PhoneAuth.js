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
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";


const PhoneAuth = () => {
  // if null, no sms has sent
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");
  const [phoneNum, setPhoneNum] = useState(0);
  const [phoneError, setPhoneError] = useState(false);

  // Handle the button press
  async function signInWithPhoneNumber() {
    console.log(phoneNum)
    if (phoneNum.toString.length === 10) {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    }else{
      Alert.alert("Entered Wrong Number", "Please Enter 10 Digit Number", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]);
    }
  }

  async function confirmCode() {
    try {
      const res = await confirm.confirm(code);
      console.log("you are verified now", res);
    } catch (error) {
      console.log("Invalid code.");
    }
  }

  

  return (
    <View>
      {!confirm ? (
        <>
          {/* <Button
            mode="contained"
            style={styles.signUpButton}
            onPress={() => signInWithPhoneNumber("+91 914-482-8978")}
          >
            Phone Number Sign In
          </Button> */}

          <View style={styles.inputContainer}>
            <Text>Enter your phone number to get started</Text>
            <Text>
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
              onPress={() =>signInWithPhoneNumber()}
            >
              Next
            </Button>
          </View>
        </>
      ) : (
        <>
          <TextInput
            value={code}
            onChangeText={(text) => setCode(text)}
            style={styles.otp}
          />
          <Button title="Confirm Code" onPress={() => confirmCode()} />
        </>
      )}
    </View>
  );
};

export default PhoneAuth;

const styles = StyleSheet.create({
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
    marginBottom: 50,
  },
});
