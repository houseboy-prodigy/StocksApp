/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 
 import type {Node} from 'react';
 import { useColorScheme, Text, View } from 'react-native';
 
 import { Colors } from 'react-native/Libraries/NewAppScreen';
 

 
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     <Text style={{ color: "#0378A6", fontSize: 24 }}>Greetings, Human!</Text>
   </View>
 
   );
 };

 
 export default App;