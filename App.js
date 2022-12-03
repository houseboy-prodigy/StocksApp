 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import 'react-native-gesture-handler';
 import { firebaseConfig } from './firebase-key/config'
//  import { firebase } from './firebase/config'
//  import * as firebase from 'firebase/app';
import firebase from '@react-native-firebase/app';
//  import screens here
 import LoginScreen from './Screens/LoginScreen';
 import HomeScreen from './Screens/HomeScreen';
import WriteSuccess from './Screens/WriteSuccess';
 


// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
 

 const Stack = createNativeStackNavigator();

 function App() {

  // initial screen is initialRouteName
  // add screens under stack.navigator
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Success"> 
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Success" component={WriteSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
 
