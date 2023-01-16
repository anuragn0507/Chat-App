
import React, { useState } from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'


const Invite = () => {

    const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.inviteBox}>

      <View style={styles.content}>
        <Text style={styles.textColor}>Let's switch to Signal:</Text>
        <Text style={styles.textColor}>https://signal.org/install</Text>
        <Text style={styles.textColor}></Text>
      </View>

      {/* style={({ pressed }) => [styles.iconStyle, { opacity: pressed ? 0.2 : 1, backgroundColor: '#2277ee'}]}  */}
      <Pressable 
         onPress={ () => setPressed(!pressed) } 
         style={[styles.iconStyle, {backgroundColor: pressed ? 'gray': 'green', opacity: pressed ? 0.2 : 1}]} >

            <MaterialCommunityIcons name={'share-variant-outline'} size={40} color={'#fff'} />
            <Text style={[styles.textColor, {marginLeft:20}]}>Share</Text>
      </Pressable>

    </View>
  )
}

export default Invite

const styles = StyleSheet.create({
    inviteBox:{
        height:'100%',
        width:'100%',
        padding:10,
        marginTop:40,
    },
    content :{
        padding:10,
        borderWidth:1,
        borderColor:'#aaa',
        borderRadius:8,
        margin:15,
        marginTop:40,
    },
    textColor:{
        color:'#fff',
        fontSize:20,
    },
    iconStyle : {
        margin:15,
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'#2277ee'
    }
})