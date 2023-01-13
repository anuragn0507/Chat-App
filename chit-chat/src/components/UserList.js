import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatCard from './chat/ChatCard';

// const DATA = [
//     {
//       id: 'Hii kya haal hai',
//       title: 'Anurag',
//     },
//     {
//       id: 'Kya kar rhe ho',
//       title: 'Anu',
//     },
//     {
//       id: 'Kya chal rha hai',
//       title: 'Prince',
//     },
//     {
//       id: 'Construct week ki presention ready ho gai ',
//       title: 'Shakti',
//     },
//     {
//       id: 'Kitna kaam hua ',
//       title: 'Vikas',
//     },
//     {
//       id: 'Saturday tak pura ho payega ya nhi ',
//       title: 'Bhaskar',
//     },
//   ];

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