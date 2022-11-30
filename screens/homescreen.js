import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import HeaderWithPL from '../components/HeaderWithPL'
import NavBar from '../components/NavBar'
import appleImage from '../assets/apple.png'
import googleImage from '../assets/google.png'
import StockBox from '../components/StockBox'
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

class HomeScreen extends Component {

  loadRouteFavorites = () => this.props.navigation.navigate('Favorites');
  loadRouteAdd = () => this.props.navigation.navigate('Add');
  loadRouteProfile = () => this.props.navigation.navigate('Profile');

	render() {
		return (
				<Container>
          <HeaderWithPL headingStyle={styles.heading} title="$200,00" loss = "-$20 200%"/>
          <StockBox name='AAPL'
          price='210.1'
          image={appleImage}/>
          <StockBox name='GOOG'
          price='111.1'
          image={googleImage}/>
          <NavBar/>
				</Container>
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
})
export default HomeScreen;