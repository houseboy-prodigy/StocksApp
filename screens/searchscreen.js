import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image,TouchableOpacity, TextInput} from 'react-native';
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import appleImage from '../assets/apple.png'
import googleImage from '../assets/google.png'
import StockBox from '../components/StockBox'
import getPriceFromApi from '../components/ApiCall'
import homeImage from '../assets/home.png'
import userImage from '../assets/user.png'
import addImage from '../assets/add.png'
import favoriteImage from '../assets/favorites.png'
import marketImage from '../assets/chart.png'
import { useNavigation } from '@react-navigation/native';
/*
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
*/
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

class SearchScreen extends Component {
    
    constructor() {
      super();
      this.ApiKey = "g14DIhw20yIUFfTGwdYPz0UGT8SIwODp"
      this.state = {
        searchInput: "",
        searchResult: null,
        error: "",
        isLoading: false
      };
    }
  
    searchStock = async () => {
      this.setState({
        isLoading: true
      });
      const url = `https://api.polygon.io/v2/aggs/ticker/${this.state.searchInput}/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=${this.ApiKey}`;
      await fetch(url)
        .then(res => res.json())
        .then(responseJson =>
          this.setState({
            isLoading: false,
            searchResult: {
              price: responseJson.results[0].o,
              name: responseJson.ticker
            }
          })
        )
        .catch(error => this.setState({ error }));
    };

    render() {
        
        const { searchInput, searchResult, isLoading, error } = this.state;
    
        if (searchResult) {
          return (
            <Container>
              <View>
              <Header headingStyle={styles.heading} title="Search Results"/>
              <StockBox name={searchResult.name}
              price={searchResult.price}
              />
              <NavBar/>
              </View>
            </Container>
          );
        } else {
          return (
            <Container>
            <View>
            <Header headingStyle={styles.heading} title="Search Stock"/>
                <TextInput
                style={{padding: 15,backgroundColor: 'white',borderColor: 'black',borderWidth: 2}}
                  placeholder="Find Your Stock.."
                  
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={searchInput => {
                    this.setState({ searchInput });
                  }}
                  onSubmitEditing={this.searchStock}
                  value={searchInput}
                />
            </View>

            </Container>
          );
        }
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
    })

export default SearchScreen