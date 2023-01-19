import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import firestore from "@react-native-firebase/firestore";
import {
  setChatMessages,
  writeMessage,
} from "../redux/slices/chatMessageSlice";
import SentMessage from "../components/chat/SentMessage";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import ChatInputBox from "../components/chat/ChatInputBox";
import { useNavigation, useRoute } from "@react-navigation/native";
import RecievedMessage from "../components/chat/RecievedMessage";
import ChatImageHeader from "../components/ChatImageHeader";

const GroupChatRooms = () => {
  const dispatch = useDispatch();

  const params = useRoute().params;

  console.log("params value in group chat room ", params);

  const navigation = useNavigation();
  const { user } = useSelector((state) => state.userReducer);
  const { chatMessages, writeMessageStatus, writeMessageError } = useSelector(
    (state) => state.chatMessageReducer
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: (params) => <ChatImageHeader {...params} />,
    });
  }, []);

  useEffect(() => {
    const firestoremessagecollection = firestore()
      .collection("Messages")
      .where("groupId", "in", [params.uid]);

    return firestoremessagecollection.onSnapshot((querySnapshot) => {
      if (querySnapshot !== null) {
        let result = [];
        querySnapshot.forEach((documentSnapshot) => {
          const data = documentSnapshot.data();
          result.push({
            docId: documentSnapshot.id,
            ...data,
          });
        });

        result.sort((a, b) => a.createdAt - b.createdAt);
        dispatch(setChatMessages(result));
      }
    });
  }, []);

  useEffect(() => {
    console.log("chatmessaged  in Grouppppppppp room useeffect", chatMessages);
  }, []);

  const SingleChatMessage = ({ item }) => {
    console.log("u are in singlechat message and item is ", item);
    return item.sentId === user.uid ? (
      <View>
        {/* <Text>Hii</Text> */}
        <SentMessage item={item} />
      </View>
    ) : (
      <View>
        <RecievedMessage item={item} />

        {/* <Text>Recievied message</Text> */}
      </View>
    );
  };

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

export default GroupChatRooms;

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
});
