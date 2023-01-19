import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import { Avatar, Card, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ChatRoom from "../../screens/ChatRoom";
import { useSelector } from "react-redux";

const ChatCard = ({ props }) => {
  const [clicked, setClicked] = useState(false);

  const navigation = useNavigation();
  const { users } = useSelector((state) => state.usersReducer);

  console.log("chat card k props me kya aya hai", props);

  useEffect(() => {
    // console.log("chat card k users me kya aya hai", users);
  }, [users]);

  const toggleClicked = () => {
    // console.log("toggle clicked is called ", props);
    setClicked((value) => !value);
  };

  const gotoChatRoom = () => {
    navigation.navigate("Chat Room", props);
  };

  useEffect(() => {
    // console.log("useeffect is called", clicked);
    if (clicked === true) {
      navigation.navigate("ChatRoom", props);
    }
  }, [clicked]);

  return (
    <View>
      {!props.isgroup ? (
        <TouchableOpacity onPress={toggleClicked}>
          <Card.Title
            title={props.displayName}
            subtitle={props.phoneNumber}
            left={(props) => <Avatar.Icon {...props} icon="account" />}
            right={(props) => (
              <IconButton {...props} icon="check-all" onPress={() => {}} />
            )}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={gotoChatRoom}>
          <Card.Title
            title={props.displayName}
            subtitle="Group"
            left={(props) => <Avatar.Icon {...props} icon="account" />}
            right={(props) => (
              <IconButton
                mode="contained"
                {...props}
                icon="delete"
                onPress={() => {}}
              />
            )}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ChatCard;
