import React, {useState, useEffect} from "react"
import {View, Text, StyleSheet, FlatList, Pressable} from "react-native";
import firestore from '@react-native-firebase/firestore';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


var tmpcolor = ""
const col= () => {
    const backcolo = [ "#b3ffb3", "#f2ccff", "#b3b3ff"]

    var cols = backcolo[Math.floor(Math.random()*backcolo.length)]
    tmpcolor = cols
    return cols 
}
const textcol = () =>{
    if(tmpcolor==="#b3ffb3"){
        return "#206600"
    }
    if(tmpcolor==="#f2ccff"){
        return "#730099"
    }
    if(tmpcolor==="#b3b3ff"){
        return "#1a1aff"
    }
}
function Newmessage ({ navigation}){
    const [items, setitem] = useState([]);
    useEffect(()=>{
        const me = firestore().collection('users').get().then(querySnapshot => {
            let data = [];
            querySnapshot.forEach(documentSnapshot => {
              data.push({
                  name:documentSnapshot.data().name,
                  lastname: documentSnapshot.data().lastname,
                  number:documentSnapshot.data().number,
                  id:documentSnapshot.data().id
              });
            });
            setitem(prev => data);
        
          }).catch(e => console.log(e)) 
  },[])

  function Capitalaplha(first){
    const firstap = String(first.first);
    const secondap = String(first.second);
    const firstalpha =  firstap.substring(0,1).toUpperCase();
    const secondalpha =  secondap.substring(0,1).toUpperCase();
    return <Text>{firstalpha+secondalpha}</Text>
  }


  return (<View style={Styles.container}>
    <View style={Styles.upperbar}>


         <View style={Styles.arrowleft}>
             <Pressable onPress={()=>{ goBack()}}>
                <View><AntDesign name="arrowleft" size={30} /></View>
            </Pressable>
         </View>

        <View style={Styles.messagenew}>
            <Text style={{fontSize:23, fontWeight:"700"}} >New Message</Text>
        </View>

         <View style={Styles.threedot}>
            <Pressable>
                <View><Entypo name="dots-three-vertical" size={30}/></View>
            </Pressable>
         </View>


    </View>


    <View style={Styles.groupbox}>

         <View style={Styles.groupiconbox}>
            <View style={Styles.groupiconboxiner}>
                <MaterialIcons name="groups" color={"white"} size={32} />
            </View>
         </View>

         <View style={Styles.newgroupbox}>
            <Text style={{fontSize:20,fontWeight:"500", marginLeft : 10}}>New Group</Text>
        </View>

    </View>


    <FlatList 
    data={items}
    renderItem={({item}) => (
        <Pressable onPress={()=>{navigation.navigate("chat", {
            name : item.name,
            number:item.number, 
            id:item.id
           })}} > 
            <View style={{ flexDirection:"row", width:"95%", alignSelf:"center", marginVertical:15}}>
            <View style={{...Styles.capitalletter,  backgroundColor : col()}}>
                <Text style={{fontSize:24, fontWeight:"700", color:textcol()}}><Capitalaplha first={item.name} second={item.lastname} /></Text>
            </View>
            <View style={Styles.numberandname}>
               <View> 
                 <Text style={{fontWeight:"600", fontSize:18}}>{item.name} {item.lastname}</Text>
                </View>
               <View>
                  <Text style={{color:"#A9A9A9"}}>{item.number}</Text>
                </View>
            </View>
        </View>
        </Pressable>
     )}
    />
  </View>)
}

const Styles = StyleSheet.create({
    container : {
        marginTop : 25,
    },
    capitalletter:{
        alignItem:"center",
        justifyContent:"center",
        padding:5,
        borderRadius : 50,
        width:47,
    },
    numberandname:{
        marginLeft : 15
    },
    groupbox:{
        flexDirection:"row",
        width : "95%",
        alignSelf : "center",
        marginVertical : 15
    },
    groupiconbox:{
        flex:1,
        alignItem : "center",
    },
    groupiconboxiner:{
        backgroundColor: "#A9A9A9",
        borderRadius:80,
        padding:4,
    },
    newgroupbox:{
        flex:9,
        justifyContent:"center",
    },
    upperbar : {
        flexDirection : "row",
        alignItem : "center"
    },
    arrowleft : {
        flex : 1,
        justifyContent:"center",
        alignItem:"center",
        padding:5,
    },
    messagenew:{
        flex:8,
        justifyContent:"center",
        alignItem:"center",
        padding:5,
        paddingLeft : 10
    },
    threedot:{
        flex:1,
        justifyContent:"center",
        alignItem:"center",
        padding:5
    }
})

export default Newmessage;