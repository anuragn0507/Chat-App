import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { IconButton } from "react-native-paper";
import dateString from "../../helpers/dateString";

const RecievedMessage = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>{item.text}</Text>
        <View>
          <Text style={styles.messageTime}>{dateString(item.createdAt)}</Text>          
        </View>
      </View>
    </View>
  )
}

export default RecievedMessage

const styles = StyleSheet.create({
    container:{
        marginRight:'20%',
        marginTop:2.5,
        marginBottom:2.5,
    },
  messageContainer: {
    
    color: "white",
    backgroundColor: "#3457D5",
    borderRadius: 15,
    padding: 5,    
    borderTopLeftRadius: 1,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 25,
    marginLeft:5,
    padding:10,
  },
  message: {
    textAlign: "left",
    color: "white",
    fontSize:16,
    marginVertical:0,
  },
  messageTime:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'flex-start',
    marginVertical:2,
    color:'white',
    fontSize:11,
  }
});
