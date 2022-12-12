import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image,TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native';
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native';
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
import Container from '../components/Container'
import StockBoxFav from '../components/StockBoxWithFav'
import * as All  from '../assets/'
import database from '@react-native-firebase/database';
import favoritesImage from '../assets/fav.png'
import favoritesImage2 from '../assets/redfav.png'
import HeaderWithSub from '../components/HeaderWithPL2'
import ChartScreen from '../screens/ChartScreen'

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
        isLoading: false,
        isFound: false,
        ChartArr: []
      };
    }
    searchStock = async () => {
      this.setState({
        isLoading: true
      });
      const url = `https://api.polygon.io/v2/aggs/ticker/${this.state.searchInput}/range/1/day/2021-07-15/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=${this.ApiKey}`;
      await fetch(url)
        .then(res => res.json())
        .then(responseJson =>
          this.setState({
            isLoading: true,
            searchResult: {
              price: responseJson.results[0].o,
              price2: responseJson.results[1].o,
              price3: responseJson.results[2].o,
              price4: responseJson.results[3].o,
              price5: responseJson.results[4].o,
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
        isLoading: false,
        isFound: false
      });
    }

    queryStock = (name) => {
      try {
        database().ref('UserFavorites').child(name).once("value").then((snapshot) => {
          if (snapshot.exists()) {
            console.log('found')
            this.setState({
              
              isFound: true
            });
            console.log('exists');
          } else {
              console.log("doesn't exist");
          }
      });
      } catch (error) {
          console.log('error is here')
          console.log(error.toString())
      }
    }

    searchAll = () => {
      //this.queryStock(this.state.searchInput);
      this.searchStock();
      this.searchStockName();
      
    }

    render() {
        
        const { searchInput, searchResult, searchResultName, error, isLoading,isFound } = this.state;
        
        if (searchResult && searchResultName) {
        console.log(this.state.ChartArr)
        return(
              <Container>
                <View>
                <Header headingStyle={styles.heading} headingStyleL={styles.background} title="Search Results"/>
                <StockBoxFav name={searchResult.name}
                price={searchResult?.price}
                image={All[`${searchResult.name}`]}
                />

                <Button
                  onPress={this.searchAgain}
                  title="Search Again"
                  />
                <Button
                onPress={() => this.props.navigation.navigate('Chart',{name: searchResult.name,})}
                title="Show Chart"
                color="#1D519C"

                accessibilityLabel="Learn more about this purple button"
                />
                </View>
                
              </Container>
              
            );}
          else {
          return (
            <Container>
            <View>
            <Header headingStyle={styles.heading} headingStyleL={styles.background} title="Search Stock"/>
            <TextInput
                style={styles.inputbox}
                  placeholder="Find Your Stock.."
                  placeholderTextColor='white'
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
        background: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 300,
          },
          inputbox:{
            padding: 15,
            backgroundColor: 'black',
            color: 'white',
            fontSize: 15, 
            borderBottomColor: '#7B7B7B', 
            borderColor: 'black',
            borderWidth: 2
          },
    button: {
    paddingTop: 50,
    width: 80,
    height: 20,
    },
    })

export default SearchScreen