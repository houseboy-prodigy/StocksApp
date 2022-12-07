import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import HeaderWithPL from '../components/HeaderWithPL'
import NavBar from '../components/NavBar'
import appleImage from '../assets/apple.png'
import googleImage from '../assets/google.png'
import StockBox from '../components/StockBox'
import getPriceFromApi from '../components/ApiCall'
import Header from '../components/Header'
import homeImage from '../assets/home.png'
import userImage from '../assets/user.png'
import addImage from '../assets/add.png'
import favoriteImage from '../assets/favorites.png'
import marketImage from '../assets/chart.png'
class Container extends Component {
	render() {
		return (
			<View style={styles.container}>
				{this.props.children}
			</View>
		);
	}
}
class ProfileScreen extends Component {

	loadRoute = () => this.props.navigation.navigate('Home');
  loadRouteFavorites = () => this.props.navigation.navigate('Favorites');

	render() {
		return (
				<Container>
				<Header headingStyle={styles.heading} headingStyleL={styles.background} title="MRKT"/>
				<StockBox name= 'Log Out'
         price=''
         image={userImage}/>
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
    buttonBox: {
        flex: 1,
        paddingTop: 80,
        flexDirection: 'row',
        width: 150,
        alignItems: 'center',
        justifyContent: 'flex-start',
        },
    heading: {
		//flex: 0,
		alignItems: 'center',
		margin: 5,
		padding: 100,
		backgroundColor: '#1D519C',
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: 300,
	  },
    button: {
        paddingTop: 50,
        width: 80,
        height: 20,
        },
})
export default ProfileScreen;