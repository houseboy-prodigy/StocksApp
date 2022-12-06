import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image,TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native';
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
import * as All  from '../assets/'
// container for screen content and components

class SearchScreen extends Component {
    
    constructor() {
      super();
      this.ApiKey = "g14DIhw20yIUFfTGwdYPz0UGT8SIwODp"
      this.state = {
        searchInput: "",
        searchResult: null,
        searchResultName: null,
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

    searchStockName = async () => {
      this.setState({
        isLoading: true
      });
      const url = `https://api.polygon.io/v3/reference/tickers/${this.state.searchInput}?apiKey=${this.ApiKey}`;
      await fetch(url)
        .then(res => res.json())
        .then(responseJson =>
          this.setState({
            isLoading: true,
            searchResultName: {
              sname: responseJson.results.name
            }
          })
        )
        .catch(error => this.setState({ error }));
    };

    searchAgain = () => {
      this.setState({
        searchInput: "",
        searchResult: null,
        searchResultName: null,
        error: "",
        isLoading: false
      });
    }

    searchAll = () => {
      this.searchStockName();
      this.searchStock();
    }

    render() {
        
        const { searchInput, searchResult, searchResultName, error, isLoading } = this.state;
        
        if (searchResult && searchResultName) {
          return (
            
            <Container>
              <View>
              <Header headingStyle={styles.heading} title="Search Results"/>
              <StockBoxFav name={searchResult.name}
              price={searchResult.price}
              image={All[`${searchResult.name}`]}
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
                  onSubmitEditing={this.searchAll}
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
            backgroundColor: 'black',
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