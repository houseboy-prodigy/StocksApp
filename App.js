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
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeaderWithPL from './components/HeaderWithPL'

import NavBar from './components/NavBar'
import appleImage from './assets/apple.png'
import googleImage from './assets/google.png'
import StockBox from './components/StockBox'
import homeImage from './assets/home.png'
import userImage from './assets/user.png'
import addImage from './assets/add.png'
import favoriteImage from './assets/favorites.png'
import marketImage from './assets/chart.png'
//import HomeScreen from './screens/homescreen'
//import FavoritesScreen from './screens/favoritesscreen'
import { firebaseConfig } from './firebase-key/config'
//  import { firebase } from './firebase/config'
//  import * as firebase from 'firebase/app';
import firebase from '@react-native-firebase/app';
import LoginScreen from './screens/LoginScreen';
const Stack = createNativeStackNavigator();
// container for screen content and components
/*Home screen Code*/

class ContentText extends Component {
	render() {
		return (
			<Text style={this.props.textStyle}>
				{this.props.children}
			</Text>
		);
	}
}
class NavButton extends Component {

  render(){
    return(
      <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={this.props.onPress}>
    <Image style= {styles.button}
     source={this.props.source}
    />

</TouchableOpacity>
    )
  }
}

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


class HomeScreen extends Component {
  loadRouteFavorites = () => this.props.navigation.navigate('Favorites');
  loadRouteAdd = () => this.props.navigation.navigate('Add');
  loadRouteProfile = () => this.props.navigation.navigate('Profile');
  //ticker = getPriceFromApi()
	render() {
		return (
				<Container>
          <HeaderWithPL headingStyle={styles.heading} title="$200,00" loss = "-$20 200%"/>
          <StockBox name='AAPL'
          price='210.1'
          image={appleImage}/>
          <StockBox name='GOOG'
          price='111.2'
          image={googleImage}/>
          <View style={styles.buttonBox}>
							<NavButton 
								color="#black"
                source={homeImage}
								onPress={this.loadRouteFavorites}
              />
              <NavButton 
								color="#black"
                source={favoriteImage} 
								onPress={this.loadRouteFavorites}
              />
              <NavButton 
								color="#black"
                source={addImage} 
								onPress={this.loadRouteFavorites}
              />
                            <NavButton 
								color="#black"
                source={marketImage} 
								onPress={this.loadRouteFavorites}
              />
                            <NavButton 
								color="black"
                source={userImage} 
								onPress={this.loadRouteProfile}
              />
						</View>
				</Container>
		);
	}
}

/*Home Screen Code end*/
/*Favorites Screen Code*/

class FavoritesScreen extends Component {

  loadRouteFavorites = () => this.props.navigation.navigate('Favorites');
  loadRouteAdd = () => this.props.navigation.navigate('Add');
  loadRouteProfile = () => this.props.navigation.navigate('Profile');
	render() {
		return (
		<Container>
          <Header headingStyle={styles.heading} title="Favorites"/>
          <StockBox name='AAPL'
          price='210.1'
          image={appleImage}/>
          <NavBar/>
		</Container>
		);
	}
}
/*FavoritesScreenCodeEnd*/

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
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
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>	
			</NavigationContainer>
    );
   }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: 'lightgrey',
	},
    heading: {
		//flex: 0,
		alignItems: 'center',
		margin: 5,
		padding: 100,
		backgroundColor: '#1D519C',
  },
  
  buttonBox: {
    flex: 1,
    paddingTop: 80,
    flexDirection: 'row',
    width: 150,
    alignItems: 'center',
    justifyContent: 'flex-start',
    },
button: {
paddingTop: 50,
width: 80,
height: 20,
},
headingText: {
  color: '#FFFFFF',
  fontSize: 40,
},
});

export default App;
