import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import ChatInputBox from "../components/chat/ChatInputBox";
import SentMessage from "../components/chat/SentMessage";
import RecievedMessage from "../components/chat/RecievedMessage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import firestore from "@react-native-firebase/firestore";

const ChatRoom = () => {
  const[message, setMessage] = useState('');


  const navigation = useNavigation();
  const dispatch = useDispatch();

  const params = useRoute().params;
  console.log("params value", params);
  const { user } = useSelector((state) => state.userReducer);
  const { setChatMessages } = useSelector((state)=> state.chatMessageReducer);

  
  useEffect(()=>{
    const firestoremessagecollection = firestore()
    .collection('Messages')
    .where('receivedId', 'in',[params.uid, user.uid]);

    return firestoremessagecollection.onSnapshot(querySnapshot =>{
      if(querySnapshot !== null){
        let result =[];
        querySnapshot.forEach(documentSnapshot =>{
          const data = documentSnapshot.data();
          result.push(data);
          console.log("ek message", result);
        });

        result = result.filter(
          a => a.sentId === uid || a.sentId === user.uid,
        )

        result.sort((a,b) => a.createdAt - b.createdAt);
        console.log("message arrays", result);

        // here i will dispatch the chat messages 
        dispatch( setChatMessages(result));
      }
    })

  },[])

  useEffect(()=>{
    console.log("user in chat room useeffect", user);
  },[])



  return (
    <View>
      <Text>ChatRoom</Text>
      <ScrollView>
        {/* <SentMessage />
        <RecievedMessage />
        <SentMessage />
        <RecievedMessage />
        <SentMessage />
        <RecievedMessage />
        <SentMessage />
        <RecievedMessage />
        <SentMessage />
        <RecievedMessage /> */}
        
      </ScrollView>

      <View style={styles.inputBoxContainer}>
        <ChatInputBox props={params}/>
      </View>
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  inputBoxContainer: {
    marginTop: 560,
  },
});
