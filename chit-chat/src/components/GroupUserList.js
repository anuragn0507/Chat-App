import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatCard from './chat/ChatCard';
import GroupChatCard from './chat/GroupChatCard';



const GroupUserList = ({users}) => {
  // console.log("users data in userList", users);
  return (
    <View style={styles.container}>
      <FlatList 
      data={users} 
      renderItem={({item}) => <GroupChatCard props={item}  />}
      keyExtractor={item => item.uid}/>      
    </View>
  )
}

export default GroupUserList

const styles = StyleSheet.create({
  container:{
    width: "100%",
    height: Dimensions.get("window").height - 165,
  }
})