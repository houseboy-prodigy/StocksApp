/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
//  import type {Node} from 'react';
//  import { Text, View } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
//  import { createStackNavigator } from 'react-navigation-stack';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import LoginScreen from './Screens/LoginScreen';
 

//  const AppNavigator = createStackNavigator({
//     Home: LoginScreen,
//  },
//  {
//     initialRouteName: 'Home'
//  });

 const Stack = createNativeStackNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
 
//  const App: () => Node = () => {
 
//    return (
//      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//      <Text style={{ color: "#0378A6", fontSize: 24 }}>Greetings, Human!</Text>
//    </View>
 
//    );
//  };

 
//  export default App;