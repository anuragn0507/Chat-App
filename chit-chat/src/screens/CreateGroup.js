import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import GroupUserList from '../components/GroupUserList';

const CreateGroup = () => {


    const { user} = useSelector((state)=> state.userReducer);
    const { users } = useSelector( state => state.usersReducer);
    

  return (
    <View>
      <GroupUserList users={users} />
    </View>
  )
}

export default CreateGroup

const styles = StyleSheet.create({})