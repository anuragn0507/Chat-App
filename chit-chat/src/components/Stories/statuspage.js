import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import SingleModal from "./Singlestatus";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { resetUsersStories } from "../../redux/slices/userStorySlice";

var tmpcolor = "";
const col = () => {
  const backcolo = ["#9c90b5", "#ddd9e6", "#807498"];
  var cols = backcolo[Math.floor(Math.random() * backcolo.length)];
  tmpcolor = cols;
  return cols;
};

const textcol = () => {
  if (tmpcolor === "#b3ffb3") {
    return "#206600";
  }
  if (tmpcolor === "#f2ccff") {
    return "#730099";
  }
  if (tmpcolor === "#b3b3ff") {
    return "#1a1aff";
  }
};
function Statusdata() {
  const [items, setitem] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalimage, setmodalimage] = useState("");
  const [mystatus, setmystatus] = useState("");

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);
  const { stories, myStory } = useSelector((state) => state.usersStoryReducer);

  useEffect(() => {
    console.log("user in story page component", user);
    console.log("stories in story page component", stories);
  }, []);

  useEffect(() => {
    firestore()
      .collection("users")
      .doc(user?.uid)
      .get()
      .then((querySnapshot) => {
        setmystatus(querySnapshot._data.status);
        // console.log("querysnpshot me kya haii", querySnapshot);
      })
      .catch((err) => {
        console.log("error while finding my story from firestor", err);
      });
  }, [myStory]);

  useEffect(() => {
    const me = firestore()
      .collection("users")
      .get()
      .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((documentSnapshot) => {
          data.push({
            name: documentSnapshot.data()?.displayName,
            lastname: documentSnapshot.data()?.displayName,
            staus: documentSnapshot.data()?.status,
            uid: documentSnapshot.data()?.uid,
          });
        });
        // data = data.filter((story)=> story.uid != user.uid)
        dispatch(resetUsersStories(data));
        setitem((prev) => data);
      })
      .catch((e) => console.log("Error while getting all the story", e));
  }, [myStory]);

  function Capitalaplha(first) {
    const firstap = String(first.first);
    const secondap = String(first.second);
    const firstalpha = firstap.substring(0, 1).toUpperCase();
    const secondalpha = secondap.substring(0, 1).toUpperCase();
    return (
      <Text style={{ fontSize: 24, fontWeight: "400", color: textcol(), textAlign: "center" }}>
        {firstalpha + secondalpha}
      </Text>
    );
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Image
              source={{ uri: modalimage }}
              style={{ height: "100%", width: 400 }}
            />
          </View>
        </View>
      </Modal>

      {mystatus ? (
        <Pressable
          onPress={() => {
            setmodalimage(mystatus);
            setModalVisible(true);
            setTimeout(() => {
              setModalVisible(false);
            }, 2200);
          }}
        >
          <View style={Styles.outermystatusdiv}>
            <View style={Styles.mystatusdiv}>
              <Text style={{ fontSize: 20, marginLeft: 20, fontWeight: "500" }}>
                My story
              </Text>
            </View>
          </View>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("ClickingPhotoFromGallery");
          }}
        >
          <View style={Styles.secondbar}>
            <View style={Styles.name_box_of_second_bar}>
              <View
                style={{
                  borderRadius: 50,
                  padding: 5,
                  backgroundColor: "#ccccb3",
                }}
              >
                <Text
                  style={{ fontSize: 29, fontWeight: "700", color: "#5c5c3d" }}
                >
                  {user.displayName.substring(0, 2).toUpperCase()}
                </Text>
              </View>
            </View>

            <View style={Styles.tapandstorybox}>
              <View>
                <Text style={{ fontWeight: "500", fontSize: 18 }}>
                  My Stories
                </Text>
              </View>
              <View>
                <Text
                  style={{ fontWeight: "400", fontSize: 15, color: "#A9A9A9" }}
                >
                  Tap to add
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      )}
      <FlatList
        data={stories}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              setmodalimage(item.staus);
              setModalVisible(true);
              setTimeout(() => {
                setModalVisible(false);
              }, 2200);
            }}
          >
            <View style={Styles.outerdivofuser}>
              
              <View style={Styles.outerUserName}>
                <View style={[Styles.innerUserName, {backgroundColor: col()}]}>
                <Capitalaplha first={item.name} second={item.name} />
                </View>
              </View>

              <View style={Styles.outerdivofuser_second}>
                <Text style={Styles.storyUserName}>{item.name}</Text>
              </View>

              <View style={Styles.outerdivofuser_third}>
                <Image
                  source={{ uri: item.staus }}
                  style={{ width: 50, height: 80, borderRadius: 10 }}
                />
              </View>
            </View>
            {/* <View style={{ marginVertical: 0 }}>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: "#c0c0c0",
                  borderRadius: 55,
                }}
              ></View>
            </View> */}
          </Pressable>
        )}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  firstbar: {
    flexDirection: "row",
    width: "95%",
    alignSelf: "center",
    marginTop: 20,
  },
  mystatusdiv: {
    height: 50,
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    borderRadius: 25,
    backgroundColor: "#cdc6da",
  },
  outermystatusdiv: {
    borderWidth: 2,
    padding: 2,
    borderColor: "#aca2c1",
    width: "95%",
    alignSelf: "center",
    borderRadius: 28,
    marginTop: 10,
  },
  outerdivofuser: {
    flexDirection: "row",
    width: "95%",
    alignSelf: "center",
    marginVertical: 5,
    // borderWidth: 2,
  },

  outerdivofuser_third: {
    flex: 2,
    alignItems: "flex-end",
    // borderWidth:5,
  },
  secondbar:{
    flexDirection:"row",
    width:"95%",
    alignSelf:"center",
    marginVertical:18
},

  namebox: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  name_box_of_second_bar: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  tapandstorybox: {
    flex: 8,
    justifyContent: "center",
  },
  signalbox: {
    flex: 12,
    justifyContent: "center",
  },
  iconbox: {
    flexDirection: "row",
    flex: 4,
    justifyContent: "space-between",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    flex: 1,
    width: 400,
    backgroundColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  //anurag's css

  storyUserName: {
    fontSize: 20,
    marginTop: 25,
    marginLeft: 10,
  },
  outerUserName: {    
    borderWidth: 2,
    padding: 3,
    borderColor: "#cdc6da",
    alignSelf: "center",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    
    
  },
  innerUserName: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    padding: 8,
    backgroundColor: '#FF9800',
    alignSelf: "center",

  },
});

export default Statusdata;
