import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Statusdata from "../components/Stories/statuspage";
import ChatRoom from "../screens/ChatRoom";
import HomeChat from "../screens/HomeChat";
import Stories from "../screens/Stories";

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "chat",
      title: "Chats",
      focusedIcon: "chat",
    //   unfocusedIcon: "heart-outline",
    },
    { key: "stories", title: "Stories", focusedIcon: "camera-iris" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    chat: HomeChat,
    stories: Statusdata,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    
  );
};

export default BottomNav;
