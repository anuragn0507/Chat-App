import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IconButton, Searchbar } from "react-native-paper";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <IconButton mode="contained-tonal" icon="account" size={30} />
      </View>

      <View style={styles.appName}>
        <Text style={{ fontSize: 20,fontWeight: "bold"  }}>Gappe</Text>
      </View>
      <View>
        {/* <Searchbar
          onChangeText={onChangeSearch}
          value={searchQuery}
        /> */}
        <IconButton icon="account-search" size={30} />
      </View>
      <View style={styles.dots}>
        <IconButton icon="dots-vertical" size={25} />
      </View>
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
  },
  accSearch: {
    flex: 1,
  },
  dots: {
    flex: 1,
  },
});
