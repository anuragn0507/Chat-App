import { View, Text } from "react-native";
import React from "react";

import { Avatar, Card, IconButton } from "react-native-paper";

const ChatCard = () => {
  return (
    <View>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="account" />}
        right={(props) => (
          <IconButton {...props} icon="more-vert" onPress={() => {}} />
        )}
      />
    </View>
  );
};

export default ChatCard;
