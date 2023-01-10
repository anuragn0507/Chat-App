import { StyleSheet, Text, View } from "react-native";
// import {
//   Avatar,
//   TextInput,
//   icon,
//   Button,
//   List,
//   IconButton,
//   MD3Colors,
// } from "react-native-paper";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";
import { Button, TextInput } from 'react-native';

const PhoneAuth = () => {
  // if null, no sms has sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState("");

  return (
    <View>
      {/* <View style={styles.inputContainer}>
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
            <TextInput mode="outlined" label="Phone number" type="number" />
          </View>
        </View>
        <Button mode="contained" style={styles.signUpButton}>
          Next
        </Button>
      </View> */}

      <>
        <TextInput value={code} onChangeText={(text) => setCode(text)} />
        <Button title="Confirm Code" onPress={() => confirmCode()} />
      </>
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
});
