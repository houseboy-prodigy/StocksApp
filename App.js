 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import 'react-native-gesture-handler';
//  import { firebase } from './firebase/config'
//  import * as firebase from 'firebase/app';
import firebase from '@react-native-firebase/app';
//  import screens here
 import LoginScreen from './Screens/LoginScreen';
 import HomeScreen from './Screens/HomeScreen';
 import { firebaseConfig } from './firebase-key/config'


// const firebaseConfig = {
//   apiKey: "AIzaSyD7xuivhSxMJ5nrDkrENecGTh0hPIOOt7A",
//   authDomain: "stocksapp-442f9.firebaseapp.com",
//   projectId: "stocksapp-442f9",
//   storageBucket: "stocksapp-442f9.appspot.com",
//   messagingSenderId: "1019181909612",
//   appId: "1:1019181909612:web:bc8cdd5b79371c4cbbba49",
//   measurementId: "G-V7BJYTBZWL"
// };

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
      <Stack.Navigator initialRouteName="Login"> 
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
 
