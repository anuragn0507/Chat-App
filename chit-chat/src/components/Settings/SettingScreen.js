import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const SettingScreen = () => {
  const { user } = useSelector((state) => state.userReducer);

  const navigation = useNavigation();

  const signOut = () => {
    console.log("Sign Out function is called from setting page");
    navigation.navigate("SignOut");
  };

  return (
    <View style={styles.settingBox}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/4128/4128176.png",
              }}
              resizeMode="cover"
              style={{ width: 80, height: 80, marginTop: 15 }}
            />
          </View>

          <View>
            <Text style={[styles.textColor, { paddingLeft: 25 }]}>
              {user.displayName}
            </Text>
            <Text style={[styles.textColor, { paddingLeft: 25 }]}>
              {user.phoneNumber}
            </Text>
          </View>
        </View>

        <View style={[styles.header, { marginTop: 30 }]}>
          <View>
            <FontAwesome name={"user-circle"} size={30} />
          </View>
          <View>
            <Text style={[styles.textColor, { paddingLeft: 25 }]}>Account</Text>
          </View>
        </View>

        <View style={[styles.header, { marginTop: 20 }]}>
          <View>
            <MaterialIcons name={"device-hub"} size={30} />
          </View>
          <View>
            <Text style={[styles.textColor, { paddingLeft: 25 }]}>
              Linked devices
            </Text>
          </View>
        </View>

        <View style={[styles.header, { marginTop: 20 }]}>
          <View>
            <FontAwesome name={"heart-o"} size={30} />
          </View>
          <View>
            <Text style={[styles.textColor, { paddingLeft: 25 }]}>
              Donate to Signal
            </Text>
          </View>
        </View>

        <View style={{ marginVertical: 25 }}>
          <View style={{ borderWidth: 0.5, borderColor: "#c0c0c0" }}></View>
        </View>

        <View style={[styles.header, { marginTop: 5 }]}>
          <View>
            <Entypo name={"light-up"} size={30} />
          </View>
          <View>
            <Text style={[styles.textColor, { paddingLeft: 25 }]}>
              Appearance
            </Text>
          </View>
        </View>

        <View style={[styles.header, { marginTop: 20 }]}>
          <View>
            <Ionicons name={"md-chatbubble-outline"} size={30} />
          </View>
          <View>
            <Text style={[styles.textColor, { paddingLeft: 25 }]}>Chats</Text>
          </View>
        </View>

        <View style={[styles.header, { marginTop: 20 }]}>
          <View>
            <SimpleLineIcons name={"frame"} size={30} />
          </View>
          <View>
            <Text style={[styles.textColor, { paddingLeft: 25 }]}>Stories</Text>
          </View>
        </View>

        <View style={[styles.header, { marginTop: 20 }]}>
          <View>
            <FontAwesome name={"bell-o"} size={30} />
          </View>
          <View>
            <Text style={[styles.textColor, { paddingLeft: 25 }]}>
              Notifications
            </Text>
          </View>
        </View>

        <View style={[styles.header, { marginTop: 20 }]}>
          <View>
            <Ionicons name={"lock-closed-outline"} size={30} />
          </View>
          <View>
            <Text style={[styles.textColor, { paddingLeft: 25 }]}>Privacy</Text>
          </View>
        </View>

        <View style={[styles.header, { marginTop: 20 }]}>
          <View>
            <MaterialCommunityIcons name={"store-outline"} size={30} />
          </View>
          <View>
            <Text style={[styles.textColor, { paddingLeft: 25 }]}>
              Data and storage
            </Text>
          </View>
        </View>

        <View style={{ marginVertical: 20 }}>
          <View style={{ borderWidth: 0.5, borderColor: "#c0c0c0" }}></View>
        </View>

        <View style={[styles.header, { marginTop: 0 }]}>
          <View>
            <Ionicons name={"card-outline"} size={30} />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.textColor, { paddingLeft: 25 }]}>
              Payments
            </Text>
            <Text style={styles.betastyle}>BETA</Text>
          </View>
        </View>

        <View style={{ marginVertical: 20 }}>
          <View style={{ borderWidth: 0.5, borderColor: "#c0c0c0" }}></View>
        </View>

        <TouchableOpacity onPress={signOut} style={[styles.header, { marginTop: 0 }]}>
          <View>
            <Ionicons name={"md-log-out-outline"} size={30} />
          </View>
          <View >
            <Text style={[styles.textColor, { paddingLeft: 25 }]}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.header, { marginTop: 20 }]}>
          <View>
            <MaterialIcons name={"mail-outline"} size={30} />
          </View>
          <View>
            <Text style={[styles.textColor, { paddingLeft: 25 }]}>
              Invite your friends
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  settingBox: {
    height: "100%",
    width: "100%",
    // padding:10,
  },
  textColor: {
    // color:'#fff',
    fontSize: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    // marginTop:20
  },
  betastyle: {
    fontSize: 14,
    // borderWidth:1,
    borderRadius: 30,
    backgroundColor: "#c0c0c0",
    marginLeft: 5,
    paddingHorizontal: 14,
    paddingVertical: 7,
    // color:'#fff',
    fontWeight: "900",
  },
});
