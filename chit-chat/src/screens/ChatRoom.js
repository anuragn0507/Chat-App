import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import ChatInputBox from "../components/chat/ChatInputBox";
import SentMessage from "../components/chat/SentMessage";
import RecievedMessage from "../components/chat/RecievedMessage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import firestore from "@react-native-firebase/firestore";
import { setChatMessages } from "../redux/slices/chatMessageSlice";
import { useHeaderHeight } from "@react-navigation/elements";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import ChatImageHeader from "../components/ChatImageHeader";

const ChatRoom = () => {
  const [message, setMessage] = useState("");

  const { height: WINDOW_HEIGHT } = Dimensions.get("window");
  const { width: WINDOW_WIDTH } = Dimensions.get("window");

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const params = useRoute().params;
  // console.log("params value", params);
  const { user } = useSelector((state) => state.userReducer);
  const { chatMessages, writeMessageStatus, writeMessageError } = useSelector(
    (state) => state.chatMessageReducer
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle:(params) => <ChatImageHeader {...params} />,
    });
  }, []);

  useEffect(() => {
    const firestoremessagecollection = firestore()
      .collection("Messages")
      .where("receivedId", "in", [params.uid, user.uid]);

    return firestoremessagecollection.onSnapshot((querySnapshot) => {
      if (querySnapshot !== null) {
        let result = [];
        querySnapshot.forEach((documentSnapshot) => {
          const data = documentSnapshot.data();
          result.push(data);
          // console.log("ek message", result);
        });

        result = result.filter(
          (a) => a.sentId === params.uid || a.sentId === user.uid
        );
        result.sort((a, b) => a.createdAt - b.createdAt);
        console.log("all chat  message@@@@@@@@@@@", result);

        dispatch(setChatMessages(result));
      }
    });
  }, []);

  useEffect(() => {
    console.log("chatmessaged  in chat room useeffect", chatMessages);
  }, []);

  const SingleChatMessage = ({ item }) => {
    console.log("item sent in single chat message", item);
    console.log("user in single chat message", user);
    console.log("item.sentId === user.uid", item.sentId === user.uid);
    return item.sentId === user.uid ? (
      <View>
        {/* <Text>{item.text}</Text> */}
        <SentMessage item={item} />
      </View>
    ) : (
      <View>
        <RecievedMessage item={item} />
      </View>
    );
  };
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        {/* <Text>ChatRoom</Text> */}
        <View style={styles.messageList}>
          <FlatList
            data={chatMessages}
            inverted
            contentContainerStyle={{ flexDirection: "column-reverse" }}
            renderItem={(item) => <SingleChatMessage item={item.item} />}
          />
        </View>

        <View style={[styles.inputBoxContainer]}>
          <ChatInputBox props={params} />
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  messageList: {
    width: "100%",
    height: Dimensions.get("window").height - 155,
  },
  inputBoxContainer: {
    // position: "absolute",
    // height: 80,
    // left: 0,
    // top: Dimensions.get("window").height -155,
    // width: Dimensions.get("window").width,
  },
});
