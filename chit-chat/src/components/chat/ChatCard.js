import { View, Text,  TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import { Avatar, Card, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ChatRoom from "../../screens/ChatRoom";

const ChatCard = ({ props }) => {
  const [clicked, setClicked] = useState(false);

  const navigation = useNavigation();

  // console.log("chat card k props me kya aya hai", props);

  const toggleClicked = () => {
    // console.log("toggle clicked is called ", props);
    setClicked((value) => !value);
  };

  useEffect(() => {
    // console.log("useeffect is called", clicked);
    if (clicked === true) {
      navigation.navigate("ChatRoom", props);
    }
  }, [clicked]);

  return (
    <View>
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
    </View>
  );
};

export default ChatCard;
