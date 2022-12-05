import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import HeaderWithPL from '../components/HeaderWithPL'
import NavBar from '../components/NavBar'
import appleImage from '../assets/apple.png'
import googleImage from '../assets/google.png'
import StockBox from '../components/StockBox'
import getPriceFromApi from '../components/ApiCall'
import homeImage from '../assets/home.png'
import userImage from '../assets/user.png'
import addImage from '../assets/add.png'
import searchImage from '../assets/search.png'
import favoriteImage from '../assets/favorites.png'
import marketImage from '../assets/chart.png'
import { useNavigation } from '@react-navigation/native';
import Container from '../components/Container'
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

const arr = [{title: 'Test', name: 'GOOG', price: '23',image: googleImage},{title: 'Test', name: 'AAPPL', price: '22',image: appleImage}]

class HomeScreen extends Component {
  loadRouteFavorites = () => this.props.navigation.navigate('Favorites');
  loadRouteAdd = () => this.props.navigation.navigate('Add');
  loadRouteSearch = () => this.props.navigation.navigate('Search');
  loadRouteProfile = () => this.props.navigation.navigate('Profile');

  ticker = getPriceFromApi()
	render() {
		return (
				<Container>
          <HeaderWithPL headingStyle={styles.heading} title="$200,00" loss = "-$20 200%"/>
          {arr.map((item) => (<StockBox name={item.name} price={item.price} image={item.image}/>))}
				</Container>
		);
	}
}

/*
const HomeScreen = ({navigation}) => {
  //loadRouteFavorites = () => this.props.navigation.navigate('Favorites');
  //loadRouteAdd = () => this.props.navigation.navigate('Add');
  //loadRouteProfile = () => this.props.navigation.navigate('Profile');
  //const ticker = getPriceFromApi()
  //console.log(ticker)
  
    const arr = [{title: 'Test', name: 'GOOG', price: '23',image: googleImage},{title: 'Test', name: 'AAPPL', price: '22',image: appleImage}]
          return (
				<Container>
          <HeaderWithPL headingStyle={styles.heading} title="$200,00" loss = "-$20 200%"/>
          {arr.map((item) => (<StockBox name={item.name} price={item.price} image={item.image}/>))}

          <View style={styles.buttonBox}>
							<NavButton 
								color="#black"
                source={homeImage}
								onPress={() => navigation.navigate('Favorites')}
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
          )
      }

*/
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
})
export default HomeScreen;