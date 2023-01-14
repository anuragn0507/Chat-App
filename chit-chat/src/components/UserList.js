import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatCard from './chat/ChatCard';



const UserList = ({users}) => {
  // console.log("users data in userList", users);
  return (
    <View>
      <FlatList 
      data={users} 
      renderItem={({item}) => <ChatCard props={item}  />}
      keyExtractor={item => item.uid}/>      
    </View>
  )
}

export default UserList

const styles = StyleSheet.create({})