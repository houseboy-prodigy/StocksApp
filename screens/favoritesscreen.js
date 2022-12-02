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
class FavoritesScreen extends Component {

  loadRoute = () => this.props.navigation.navigate('Home');
  loadRouteAdd = () => this.props.navigation.navigate('Add');
  loadRouteProfile = () => this.props.navigation.navigate('Profile');
	render() {
		return (
		<Container>
          <Header headingStyle={styles.heading} title="Favorites"/>
          <StockBox name='AAPL'
          price='210.1'
          image={appleImage}/>
          <View style={styles.buttonBox}>
          <NavButton 
              color="#black"
source={homeImage}
              onPress={this.loadRoute}
/>
<NavButton 
              color="#black"
source={favoriteImage} 
              onPress={this.loadRouteFavorites}
/>
<NavButton 
              color="#black"
source={addImage} 
              onPress={this.loadRouteAdd}
/>
          <NavButton 
              color="#black"
source={marketImage} 
              onPress={this.loadRouteProfile}
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
    button: {
        paddingTop: 50,
        width: 80,
        height: 20,
        },
})
export default FavoritesScreen;