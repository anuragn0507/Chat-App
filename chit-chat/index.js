import { registerRootComponent } from 'expo';
import messaging from '@react-native-firebase/messaging';
import { Provider as PaperProvider } from "react-native-paper";

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

import App from './src/App';

export default function Main(){
    return(
      <PaperProvider>
        <App />
      </PaperProvider>
    )
  }

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);
