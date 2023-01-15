import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { IconButton, Searchbar } from "react-native-paper";
import { useRoute } from "@react-navigation/native";

const ChatImageHeader = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const params = useRoute().params;
  useEffect(() => {
    console.log("------chat Imageheader me kya params aa rhe hai ", params);
  }, []);

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <IconButton
          mode="contained-tonal"
          icon="account"
          size={30}
          style={{ marginHorizontal: 0 }}
        />
      </View>

      <View style={styles.appName}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {params.displayName}
        </Text>
      </View>

      <IconButton
        icon="phone"
        size={25}
        style={[styles.call, { marginHorizontal: 0 }]}
      />

      <IconButton
        icon="video"
        size={25}
        style={[styles.videoCall, { marginHorizontal: 0 }]}
      />
      <IconButton
        icon="dots-vertical"
        size={25}
        style={[styles.dotsVertical, { marginHorizontal: 0 }]}
      />
    </View>
  );
};

export default ChatImageHeader;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    right:35,
    flexDirection: "row",
    width: "97%",
    marginHorizontal: 0,
    // borderWidth:1,
    paddingHorizontal: 5,
  },
  profile: {
    flex: 1,
  },
  appName: {
    flex: 2,
    marginTop: 15,
    marginLeft:-15,
  },
  call: {
    flex: 0.6,
  },
  videoCall: {
    flex: 0.6,
  },
  dotsVertical:{
    flex: 0.7,
  }
});
