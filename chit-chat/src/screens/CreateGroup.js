import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const CreateGroup = () => {


    const { user} = useSelector((state)=> state.useReducer);
    const { users } = useSelector( state => state.usersReducer);
    

  return (
    <View>
      <Text>CreateGroup</Text>
    </View>
  )
}

export default CreateGroup

const styles = StyleSheet.create({})