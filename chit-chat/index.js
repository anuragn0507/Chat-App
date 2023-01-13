import { registerRootComponent } from "expo";
import messaging from "@react-native-firebase/messaging";
import { Provider as PaperProvider } from "react-native-paper";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

// Register background handler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log("Message handled in the background!", remoteMessage);
});

import App from "./src/App";

export default function Main() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);
