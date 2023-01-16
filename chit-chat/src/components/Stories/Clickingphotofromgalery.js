import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useSelector } from 'react-redux';

export default function ClickingPhotofromgallery() {
  const [images, setimages] = useState("");
    let options = {
      storageOption: {
        path : 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
      
    }

    // getting the current user details from redux store 
    
    const { user } = useSelector((state)=> state.userReducer);


    launchImageLibrary(options, response =>{
      console.log(response)
      if(response.didCancel){
        console.log("users canceled image picker")
      }
      else if(response.error){

      }
      else if(response.customButton){

      }
      else{
        const source = response.assets[0].base64
        firestore()
          .collection('users')
          .doc(""+ user?.uid) // given document ID
          .set({
            status: `data:image/jpeg;base64,${source}`,
            displayName:user?.displayName,
            uid: user?.uid,
          })
          .then(() => {
            console.log('status added!');
          });
      }
    })
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




// const [images, setimages] = useState("");

//   function clickedongalery(){
//     let options = {
//       storageOption: {
//         path : 'images',
//         mediaType: 'photo',
//       },
//       includeBase64: true,
//     }

//     launchImageLibrary(options, response =>{
//       console.log(response)
//       if(response.didCancel){
//         console.log("users canceled image picker")
//       }
//       else if(response.error){

//       }
//       else if(response.customButton){

//       }
//       else{
//         const source = response.assets[0].base64
//         console.log(source);
//       }
//     })
//   }
//   const [image, setimage] = useState("")
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Pressable onPress={clickedongalery}>
//          <View><Text>go to gallery</Text></View>
//       </Pressable>
//     </View>
//   );