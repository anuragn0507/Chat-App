import {
    Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  IconButton,
  TextInput,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import GroupChatCard from "../chat/GroupChatCard";
import { createGroupInFirebase } from "../../redux/slices/groupSlice";
import { useNavigation } from "@react-navigation/native";

const EnterGroupName = () => {
    const [groupName, setGroupName ] = useState("");

    const dispatch = useDispatch();
    const navigation = useNavigation();

  const { userSelected } = useSelector((state) => state.groupReducer);
  const { user } = useSelector((state)=> state.userReducer);

  useEffect(() => {
    console.log("userSelected in Enter group name", userSelected);
  }, []);

  const createGroup=()=>{
    console.log("createGroup function is called", groupName)
    const {displayName, phoneNumber, uid} = user;

    let data={
        uid:Date.now().toString(),
        displayName:groupName,
        phoneNumber:null,
        isgroup:true,
        members: JSON.stringify([
            {name:displayName, phoneNumber, uid},
            ...userSelected,]),
        adminId: user.uid,
        createdAt: Date.now(),
    }

    dispatch(createGroupInFirebase(data))
    navigation.navigate("Bottom")

  }

  return (
    <View>
      <TextInput
        value={groupName}
        onChangeText={(text) => setGroupName(text)}
        label="Enter Group Name"
        right={<TextInput.Icon icon="emoticon-happy-outline" />}
        left={<TextInput.Icon icon="camera" />}
      />

      <Text style={styles.members}>Members</Text>
      <FlatList
        data={userSelected}
        renderItem={({ item }) => <SelectedUserList props={item} />}
        keyExtractor={(item) => item.uid}
        style={styles.selectedUserList}
      />

      <Button
        mode="contained"
        style={styles.createBtn}
        onPress={() => createGroup()}
      >
        Create
      </Button>
    </View>
  );
};

const SelectedUserList = ({ props }) => {
  // console.log("display in Selected user component", props.displayName);
  const name = props.displayName.substr(0, 2);

  return (
    <View>
      <TouchableOpacity onLongPress={() => selectUser()}>
        <Card.Title
          title={props.displayName}
          subtitle={props.phoneNumber}
          left={(props) => <Avatar.Text size={45} label={name.toUpperCase()} />}
        />
      </TouchableOpacity>
    </View>
  );
};

export default EnterGroupName;

const styles = StyleSheet.create({
  members: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
  selectedUserList:{
    width: "100%",
    maxHeight: Dimensions.get("window").height - 250,
  },

  createBtn:{
    padding: 3,
    margin: 130,
    marginVertical: 10,
  },
});
