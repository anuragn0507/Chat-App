import React, { useState } from 'react';
import {View, Text, StyleSheet, Pressable, Alert, TouchableOpacity, RefreshControl, ScrollView} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo'

const Filter = () => {
   
  return (
    <View style={styles.filterbox}>

        <TouchableOpacity style={styles.topBox} onPress={ () => Alert.alert("Navigate to Main Chat")} >
            <Text style={styles.textColor}>Filtered by unread</Text>
            <Entypo name={'cross'} size={35} color={'#fff'} style={{marginLeft:6}} />
        </TouchableOpacity>

        <View style={styles.ceterBox}>

           <Text style={styles.textColor}>No unread chats</Text>

           <TouchableOpacity onPress={ () => Alert.alert("Navigate to Main Chat")}  style={styles.btnstyle}>
                <Text style={styles.textColor}>Clear filter</Text>
           </TouchableOpacity>

           <TouchableOpacity>
                <Text style={[styles.textColor, {marginTop:15}]}>Tip: Pull down on the chat list to filter</Text>
           </TouchableOpacity>

        </View>
      
    </View>
  )
}

export default Filter;

const styles = StyleSheet.create({
    filterbox:{
        height:'100%',
        width:'100%',
        padding:10,
        marginTop:40,
    },
    topBox :{
        padding:10,
        paddingHorizontal:16,
        borderWidth:1,
        backgroundColor:'#707070',
        borderRadius:18,
        marginTop:40,
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    ceterBox : {
        alignItems:'center',
        flex:1,
        justifyContent:'center',

    },
    textColor:{
        color:'#fff',
        fontSize:20,
    },
    btnstyle: {
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:20,
        paddingHorizontal:14,
        paddingVertical:4,
        marginTop:18,
    },
    iconStyle : {
        margin:15,
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'#2277ee'
    }
})
