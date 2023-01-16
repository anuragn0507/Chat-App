import React, { useState } from "react";
import { View, ScrollView, Text, Alert, Modal, StyleSheet, Pressable, TouchableOpacity  } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const SideBox = () => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>

      <View style={styles.myScreen}>
        <ScrollView>
          <Text style={styles.testingtext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum culpa veritatis quam sit aperiam ea repudiandae vel molestias consequatur illum nostrum amet, fuga maxime hic iusto! Facilis eos architecto dolorem.
          Aperiam vero dicta ut, corporis quibusdam consequatur aliquam omnis asperiores culpa tempora quae sequi commodi quo! Quos, quia sequi deleniti rerum qui molestias non odio aperiam placeat nostrum excepturi molestiae?
          Assumenda recusandae repudiandae officia aliquam, numquam totam nesciunt deserunt cumque sint velit provident dolor porro doloremque laborum! Reprehenderit consequatur illum animi ea minus itaque doloremque dolores. Illum a asperiores ab!
          Laborum explicabo odit doloremque quia labore expedita, magnam animi autem nemo at ipsam repellendus vel. Sapiente odit id vitae quam dolorem deleniti molestiae cum, commodi architecto atque soluta aut? Corrupti!
          Nesciunt illo, iste in obcaecati mollitia consequuntur magnam cum odit pariatur esse porro! Provident beatae laborum incidunt debitis eos rem laudantium quaerat mollitia ipsum nihil similique, quos voluptas? Dicta, nemo!
          A soluta molestias quas cum inventore, aliquam error architecto similique dignissimos tempora eveniet omnis doloribus incidunt porro nesciunt at illo reprehenderit adipisci? Mollitia ducimus facere aliquid, dignissimos veritatis magnam molestiae.
          Saepe, quidem autem eum quam obcaecati iure, a eos quae quos ipsam deleniti quia vitae est debitis voluptas natus ratione sit possimus, magni ducimus? Provident veritatis vel repellat at repudiandae!
          Velit laboriosam iure totam nam quaerat ducimus corporis minus dolore consequuntur reiciendis ratione commodi voluptatem rerum quasi excepturi veritatis libero, tenetur nostrum esse autem ipsum aut necessitatibus incidunt quidem. Illo?
          Ea voluptas distinctio obcaecati, aliquam totam commodi assumenda enim ullam, omnis natus saepe alias necessitatibus consequatur excepturi perferendis, quidem ut! Vero culpa, quaerat omnis numquam molestias in molestiae laborum error.
          Veritatis perspiciatis, voluptatem unde similique, blanditiis dolor est deleniti quasi numquam dolorem sed eos fugiat aut a neque quam esse quos officia? Quaerat, voluptatem! Quia maiores illo commodi laborum explicabo?</Text>
        </ScrollView>  
      </View>

      <Pressable style={styles.dotIcon} onPress={() => setModalVisible(!modalVisible)} >
        <MaterialCommunityIcons name={'dots-vertical'} size={40} color={'#fff'} />
      </Pressable>

      <View >
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={ () => {
            setModalVisible(false);
          }}
    
        >
          <TouchableOpacity
          style={{ backgroundColor: "rgba(153, 153, 102, 0.1)", flex: 1 }}
          onPress={() => setModalVisible(false)}
        >

       
          <View style={styles.locate}>
            <View style={styles.box}>

              <TouchableOpacity onPress={ () => alert("Modal has been closed.")} >
                <Text style={styles.text}>New group</Text>
              </TouchableOpacity>
                
              <TouchableOpacity onPress={ () => alert("Modal has been closed.")}>
                <Text style={styles.text}>Mark all read</Text>
              </TouchableOpacity>
                
              <TouchableOpacity>
                <Text style={styles.text}>Invite friends</Text>
              </TouchableOpacity>
                
              <TouchableOpacity>
                <Text style={styles.text}>Settings</Text>
              </TouchableOpacity>
                
              <TouchableOpacity>
                <Text style={styles.text}>Notification profile</Text>
              </TouchableOpacity>

              <Pressable onPress={() => setModalVisible(false)} >
                <Text style={styles.text}>close</Text>
              </Pressable>
              
            </View>
          </View>
          
          </TouchableOpacity>

        </Modal>
      </View>
      
    </>
  )
}

export default SideBox

const styles = StyleSheet.create({
    myScreen : {
      backgroundColor:'black',
      flex:1,
      width:'100%',
      height:'100%',
      transparent:'false',

    },
    dotIcon:{
        position: 'absolute',
        top:40,
        right:5,
    },
    locate:{
        position: 'absolute',
        top:70,
        right:20,
    },
    box:{
        backgroundColor:'#3c3744',
        padding:15,
        borderRadius:20,
        // height:240,
        // width:'65%',
       
    },
    testingtext:{
      color:'#ccc',
      fontSize:24,
      padding:14,
      marginVertical:20,
      textAlign:'justify',
      marginTop:100,

    },
    text:{
        color:'#fff',
        fontSize:24,
        padding:8
    },
    
})
