/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState,Component } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity,TextInput} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homescreen'
const Stack = createStackNavigator();
// container for screen content and components
class Container extends Component {
	render() {
		return (
			<View style={styles.container}>
				{this.props.children}
			</View>
		);
	}
}

class StockBox extends Component {
	render() {
		return (
      <View style={styles.stockContainer}>
      <Image style={styles.logo} source={this.props.image} />
      <Text style={styles.paragraph}>
        {this.props.name}
      </Text>
      <Text style={styles.para}>
        {this.props.price}
      </Text>
    </View>
		);
	}
}

 // generic text content with custom style
 class ContentText extends Component {
	render() {
		return (
			<Text style={this.props.textStyle}>
				{this.props.children}
			</Text>
		);
	}
}
// header content and structure
class Header extends Component {
	render() {
		return (
			<View style={this.props.headingStyle}>
				<ContentText textStyle={styles.headingText}>
					{this.props.title}
				</ContentText>
			</View>
		);
	}
}

class App extends Component {
	render() {
		return (
      <NavigationContainer>
		    <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Welcome' }}
          />
        </Stack.Navigator>	
			</NavigationContainer>
    );
   }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  stockContainer: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: ' flex-start',
    backgroundColor: '#D9D9D9',
    borderWidth:1,
    bottomborder:'3px solid black',
    padding: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
