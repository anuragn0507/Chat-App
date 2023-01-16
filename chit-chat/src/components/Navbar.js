import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IconButton, Searchbar } from "react-native-paper";
import ClickingPhoto from "./Stories/clickingphotofromcamera";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const navigation = useNavigation();

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <IconButton mode="contained-tonal" icon="account" size={30} />
      </View>

      <View style={styles.appName}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Gappe</Text>
      </View>
      <View style={styles.pencil} >
        <IconButton icon="pencil" size={25} 
        onPress={()=>{console.log("Pencil Icon is clicked on navbar")}}
        />
      </View>
      <View style={styles.storyCamera}>
        <IconButton  icon="camera" size={25}
        onPress={()=>{console.log("Strory camera Icon is clicked on navbar");
            navigation.navigate("ClickingStoryFromCamera")
        }} />
      </View>
      <View style={styles.dots}>
        <IconButton style={{margin:0}} icon="dots-vertical" size={25} />
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
    marginLeft:5,

  },
  accSearch: {
    flex: 1,
  },
  storyCamera:{
    flex:1,
    marginTop:5,
    marginLeft:0,
    marginRight:0,
  },
  pencil:{
    flex:1,
    marginTop:5,
    marginLeft:0,
    marginRight:0,
  },
  dots: {
    flex: 1,
    alignItems:'center',
    marginTop:10,
    marginLeft:0,
    marginRight:10,
  },
});
