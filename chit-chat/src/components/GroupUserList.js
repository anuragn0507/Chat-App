import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import ChatCard from "./chat/ChatCard";
import GroupChatCard from "./chat/GroupChatCard";
import { IconButton } from "react-native-paper";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const GroupUserList = () => {
  // console.log("users data in userList", users);

  const navigation = useNavigation();

  const { userSelected } = useSelector((state) => state.groupReducer);
  const { users } = useSelector((state) => state.usersReducer);

  useEffect(() => {
    console.log("Users in groupuserlist------------------------------------", users);
  }, []);

  const showSelectedUsers = ({ item }) => {
    return (
      <View>
        <View
          style={{
            margin: 2.5,
            padding: 10,
            borderRadius: 5,
            backgroundColor: "#ddd9e6",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{item.displayName}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {userSelected.length > 0 && (
        <View>
          <FlatList
            horizontal
            data={userSelected}
            renderItem={showSelectedUsers}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.uid}
          />
          <View>
            <IconButton
              mode="contained"
              icon="arrow-right"
              style={{ alignSelf: "center" }}
              onPress={()=> navigation.navigate("Create Group Name")}
            />
          </View>
        </View>
      )}

      <FlatList
        data={users}
        renderItem={({ item }) => <GroupChatCard props={item} />}
        keyExtractor={(item) => item.uid}
      />
    </View>
  );
};

export default GroupUserList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height - 155,
  },
});
