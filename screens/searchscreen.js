import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image,TouchableOpacity, TextInput, ScrollView} from 'react-native';
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
import Container from '../components/Container'
import StockBoxFav from '../components/StockBoxWithFav'

// container for screen content and components

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
            isLoading: true,
            searchResult: {
              price: responseJson.results[0].o,
              name: responseJson.ticker
            }
          })
        )
        .catch(error => this.setState({ error }));
    };

    searchAgain = () => {
      this.setState({
        searchInput: "",
        searchResult: null,
        error: "",
        isLoading: false
      });
    }

    render() {
        
        const { searchInput, searchResult, error, isLoading } = this.state;
        
        if (searchResult && isLoading) {
          return (
            
            <Container>
              <View>
              <Header headingStyle={styles.heading} title="Search Results"/>
              <StockBoxFav name={searchResult.name}
              price={searchResult.price}
              />
              <Button
  onPress={this.searchAgain}
  title="Search Again"
  color="#1D519C"

  accessibilityLabel="Learn more about this purple button"
/>
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