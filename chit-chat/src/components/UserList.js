import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatCard from "./chat/ChatCard";
import { useSelector } from "react-redux";

const UserList = () => {
  const { users } = useSelector((state) => state.usersReducer);

  console.log("users data in userList", users);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <ChatCard props={item} />}
        keyExtractor={(item) => item.uid}
      />
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height - 170,
  },
});
