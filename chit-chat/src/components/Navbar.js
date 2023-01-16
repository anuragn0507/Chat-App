import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { IconButton, Searchbar } from "react-native-paper";
import ClickingPhoto from "./Stories/clickingphotofromcamera";
import { useNavigation } from "@react-navigation/native";
import SideBox from "./SideBox/SideBox";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const onChangeSearch = (query) => setSearchQuery(query);

  const openSettingPage = () => {
    console.log("profile icon is clicked");
    navigation.navigate("SettingScreen");
  };

  const signOut=()=>{
    setModalVisible(false)
    navigation.navigate("SignOut")
  }

  const OpenModal = () => {
    return (
      <>
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

                  <Pressable onPress={() =>signOut()}>
                    <Text style={styles.text}>Sign Out</Text>
                  </Pressable>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
      </>
    );
  };

  return !modalVisible ? (
    <View style={styles.container}>
      <View style={styles.profile}>
        <IconButton
          mode="contained-tonal"
          icon="account"
          size={30}
          onPress={openSettingPage}
        />
      </View>

      <View style={styles.appName}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Gappe</Text>
      </View>
      <View style={styles.pencil}>
        <IconButton
          icon="pencil"
          size={25}
          onPress={() => {
            console.log("Pencil Icon is clicked on navbar");
          }}
        />
      </View>
      <View style={styles.storyCamera}>
        <IconButton
          icon="camera"
          size={25}
          onPress={() => {
            console.log("Strory camera Icon is clicked on navbar");
            navigation.navigate("ClickingStoryFromCamera");
          }}
        />
      </View>
      <View style={styles.dots}>
        <IconButton
          style={{ margin: 0 }}
          icon="dots-vertical"
          size={25}
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
    </View>
  ) : (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <IconButton
            mode="contained-tonal"
            icon="account"
            size={30}
            onPress={openSettingPage}
          />
        </View>

        <View style={styles.appName}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Gappe</Text>
        </View>
        <View style={styles.pencil}>
          <IconButton
            icon="pencil"
            size={25}
            onPress={() => {
              console.log("Pencil Icon is clicked on navbar");
            }}
          />
        </View>
        <View style={styles.storyCamera}>
          <IconButton
            icon="camera"
            size={25}
            onPress={() => {
              console.log("Strory camera Icon is clicked on navbar");
              navigation.navigate("ClickingStoryFromCamera");
            }}
          />
        </View>
        <View style={styles.dots}>
          <IconButton
            style={{ margin: 0 }}
            icon="dots-vertical"
            size={25}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </View>

      <OpenModal />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
  },
  profile: {
    flex: 1,
  },
  appName: {
    flex: 3,
    marginTop: 15,
    marginLeft: 5,
  },
  accSearch: {
    flex: 1,
  },
  storyCamera: {
    flex: 1,
    marginTop: 5,
    marginLeft: 0,
    marginRight: 0,
  },
  pencil: {
    flex: 1,
    marginTop: 5,
    marginLeft: 0,
    marginRight: 0,
  },
  dots: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    marginLeft: 0,
    marginRight: 10,
  },

  locate: {
    position: "absolute",
    top: 70,
    right: 20,
  },
  box: {
    backgroundColor: "#ddd",
    padding: 15,
    borderRadius: 20,
    // height:240,
    // width:'65%',
  },

  text: {
    // color: "#fff",
    fontSize: 18,
    padding: 8,
  },
});
