import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Alert,
  Modal,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const SideBox = () => {
  const [modalVisible, setModalVisible] = useState(false);

 

  return (
    <>
      {/* <Pressable
        style={styles.dotIcon}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <MaterialCommunityIcons
          name={"dots-vertical"}
          size={40}
          color={"#fff"}
        />
      </Pressable> */}

      <View>
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <TouchableOpacity
            style={{ backgroundColor: "rgba(153, 153, 102, 0.1)", flex: 1 }}
            onPress={() => setModalVisible(false)}
          >
            <View style={styles.locate}>
              <View style={styles.box}>
                <TouchableOpacity
                  onPress={() => alert("Modal has been closed.")}
                >
                  <Text style={styles.text}>New group</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => alert("Modal has been closed.")}
                >
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

                <Pressable onPress={() => setModalVisible(false)}>
                  <Text style={styles.text}>close</Text>
                </Pressable>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </>
  );
};

export default SideBox;

const styles = StyleSheet.create({
  myScreen: {
    backgroundColor: "black",
    flex: 1,
    width: "100%",
    height: "100%",
    transparent: "false",
  },
  dotIcon: {
    position: "absolute",
    top: 40,
    right: 5,
  },
  locate: {
    position: "absolute",
    top: 70,
    right: 20,
  },
  box: {
    backgroundColor: "#3c3744",
    padding: 15,
    borderRadius: 20,
    // height:240,
    // width:'65%',
  },
  testingtext: {
    color: "#ccc",
    fontSize: 24,
    padding: 14,
    marginVertical: 20,
    textAlign: "justify",
    marginTop: 100,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    padding: 8,
  },
});
