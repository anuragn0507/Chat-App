import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { IconButton } from "react-native-paper";

const RecievedMessage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>Please ignore  </Text>
        <View style={styles.messageTime}>
          <Text style={styles.messageTime}>10:42 pm</Text>
          
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
    // flex:1,
    // alignSelf:'center',
    flexWrap:'wrap',
    // borderWidth:2,
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
    marginVertical:0,
    color:'white',
    fontSize:12,
  }
});
