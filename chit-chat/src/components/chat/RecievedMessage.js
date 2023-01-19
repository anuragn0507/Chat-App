import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { IconButton } from "react-native-paper";
import dateString from "../../helpers/dateString";
import { useSelector } from "react-redux";

const RecievedMessage = ({ item }) => {
  const [sentUserName, setSentUserName] = useState("");

  const { users } = useSelector((state) => state.usersReducer);

  useEffect(() => {
    console.log("What is there in recieved message itemmmmmmmmmmmmmmmm", item);
    const UserName = users.filter((value) => value.uid === item.sentId);
    setSentUserName(UserName);
  }, []);

  useEffect(()=>{
    console.log("what is sentUserNameeeeeeeeeeeeeeeeeeeeeeeee", sentUserName);
  },[setSentUserName])

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        {sentUserName && (
          <View style={styles.messageTime}>
            {/* Date and time we will implement here */}
            <Text style={styles.messageTime}>Sent by : {sentUserName[0].displayName}</Text>
          </View>
        )}

        <Text style={styles.message}>{item.text}</Text>
        <View>
          <Text style={styles.messageTime}>{dateString(item.createdAt)}</Text>
        </View>
      </View>
    </View>
  );
};

export default RecievedMessage;

const styles = StyleSheet.create({
  container: {
    marginRight: "20%",
    marginTop: 2.5,
    marginBottom: 2.5,
  },
  messageContainer: {
    color: "white",
    backgroundColor: "#3457D5",
    borderRadius: 15,
    padding: 5,
    borderTopLeftRadius: 1,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 25,
    marginLeft: 5,
    padding: 10,
  },
  message: {
    textAlign: "left",
    color: "white",
    fontSize: 16,
    marginVertical: 0,
  },
  messageTime: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 2,
    color: "white",
    fontSize: 11,
  },
});
