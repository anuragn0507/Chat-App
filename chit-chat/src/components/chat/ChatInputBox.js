import { FlatList, StyleSheet, Text, View , KeyboardAvoidingView} from "react-native";
import React, { useEffect, useState } from "react";
import { IconButton, TextInput } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { writeMessage } from "../../redux/slices/chatMessageSlice";

const ChatInputBox = ({props}) => {
  const [message, setMessage] = useState("");

  const navigation = useNavigation();
  const dispatch = useDispatch();

  console.log("params in send message button", props)

  const { user } = useSelector((state) => state.userReducer);
  const {chatMessages, writeMessageStatus, writeMessageError} = useSelector(
    (state) => state.chatMessageReducer,
  );

  useEffect(()=>{
    console.log("user in chat input box", user);
  },[])

  const sendMessage = () => {
    console.log("user in chat input box", user);
    let messageTime;
    messageTime = Date.now();

    dispatch(
      writeMessage({
        text: message,
        receivedId: props?.uid,
        sentId: user?.uid,
        createdAt: messageTime,
        groupId: null,
        likes: [],
      })
    );
    setMessage("");
  };

  return (
    <KeyboardAvoidingView behavior={'height'} enabled >
      <View style={styles.inputBoxContainer}>
        <IconButton style={styles.addBtn} icon="sticker-emoji" size={25} />
        <IconButton style={styles.emojiBtn} icon="plus" size={25} />
        <TextInput
          style={styles.messageInputBox}
          mode="outlined"
          outlineColor="white"
          placeholder="Write Message Here"
          type="text"
          value={message}
          onChangeText={(t) => setMessage(t)}
        />
        <IconButton style={styles.cameraBtn} icon="camera" size={25} />
        <IconButton style={styles.micBtn} icon="microphone" size={25} />
        <IconButton style={styles.sendBtn} icon="send" size={25}
        onPress={sendMessage} />
      </View>
      </KeyboardAvoidingView >
  );
};

export default ChatInputBox;

const styles = StyleSheet.create({
  inputBoxContainer: {
    width: "98%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DEDEDE",
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  emojiBtn: {
    flex: 1,
    marginHorizontal: 0,
  },
  messageInputBox: {
    flex: 7,
    marginHorizontal: 0,
    marginBottom: 5,
  },
  cameraBtn: {
    flex: 1,
    marginHorizontal: 0,
  },
  micBtn: {
    flex: 1,
    marginHorizontal: 0,
  },
  addBtn: {
    flex: 1,
    marginHorizontal: 0,
  },
  sendBtn: {
    flex: 1,
    marginHorizontal: 0,
  },
});
