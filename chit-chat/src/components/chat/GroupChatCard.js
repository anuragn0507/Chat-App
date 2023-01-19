import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import { Avatar, Card, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ChatRoom from "../../screens/ChatRoom";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedUser, removeSelectedUser } from "../../redux/slices/groupSlice";

const GroupChatCard = ({ props }) => {
  const [clicked, setClicked] = useState(false);
  const [radioClicked, setRadioClicked] = useState(false);
  const [radioIcon, setRadioIcon] = useState("radiobox-blank");

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { userSelected } = useSelector((state) => state.groupReducer);

    

  const selectUser = () => {
    setRadioClicked(!radioClicked);
    if (radioClicked) {
        setRadioIcon("radiobox-blank")
    } else {
        setRadioIcon("radiobox-marked")
    }
  };

  useEffect(() => {
    console.log("userselected in groupChat card", userSelected)
    if (radioClicked) {
        dispatch(addSelectedUser({...props}));
    } else {
        dispatch(removeSelectedUser({...props}));
    }
  }, [radioClicked]);

  return (
    <View>
      <TouchableOpacity onLongPress={() => selectUser()}>
        <Card.Title
          title={props.displayName}
          subtitle={props.phoneNumber}
          left={(props) => <Avatar.Icon {...props} icon="account" />}
          right={(props) => (
            <IconButton
              {...props}
              icon={radioIcon}
              onPress={() => selectUser()}
            />
          )}
        />
      </TouchableOpacity>
    </View>
  );
};

export default GroupChatCard;
