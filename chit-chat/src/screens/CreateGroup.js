import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import GroupUserList from '../components/GroupUserList';
import { TextInput } from 'react-native-paper';

const CreateGroup = () => {


    const { user} = useSelector((state)=> state.userReducer);
    const { users } = useSelector( state => state.usersReducer);

    
    

  return (
    <SafeAreaView>
      <TextInput
      style={styles.upperTextInput}
      mode="outlined"
      label="Name or Number"
      placeholder="Type name or number"
      right={<TextInput.Icon icon="keyboard" />} />

      
      <GroupUserList users={users} />
    </SafeAreaView>
  )
}

export default CreateGroup

const styles = StyleSheet.create({
  upperTextInput:{
    margin:5, 
  }
})