import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { IconButton } from "react-native-paper";

const SentMessage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>Please ignore  </Text>
        <View style={styles.messageTime}>
          <Text style={styles.messageTime}>10:42 pm</Text>
          <IconButton style={styles.tickIcon} iconColor="white" icon="check-all" size={16}/>
        </View>
      </View>
    </View>
  );
};

export default SentMessage;

const styles = StyleSheet.create({
    container:{
        marginLeft:'20%',
        marginTop:2.5,
        marginBottom:2.5,
    },
  messageContainer: {
    // flex:1,
    // alignSelf:'center',
    flexWrap:'wrap',
    // borderWidth:2,
    color: "white",
    backgroundColor: "#007FFF",
    borderRadius: 15,
    padding: 5,    
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 1,
    borderBottomRightRadius: 25,
    marginRight:5,
    
  },
  message: {
    textAlign: "right",
    color: "white",
    fontSize:16,
    marginVertical:0,
  },
  messageTime:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'flex-end',
    marginVertical:0,
    color:'white',
    fontSize:12,
  },
  tickIcon:{
    margin:0,
  }
});
