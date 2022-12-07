import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image,TouchableOpacity, TextInput} from 'react-native';
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import StockBox from '../components/StockBox'
import TextInputBox from '../components/TextInputBox'
import database from '@react-native-firebase/database';

import Container from '../components/Container'

class AddScreen extends Component {

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

      writeIDtoDB = (name, cost,quant) => {
        try {
            const path = 'UserPortfolio/' + '' + name
            database()
                .ref(path)
                .set({
                    name: name,
                    cost: cost,
                    quant: quant
            }).then(() => console.log('Data set.'));
    
        } catch (error) {
            console.log(error.toString())
        }
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
          searchResultName: null,
          quantity: null,
          error: "",
          isLoading: false
        });
      }


render() {
    const { searchInput, searchResult, searchResultName,quantity, error, isLoading } = this.state;
    var costval = parseFloat(searchResult?.price)*parseInt(quantity)
    if(searchResult){

        return(
            <Container>
            <Header headingStyle={styles.heading} headingStyleL={styles.background} title="Add"/>
      <TextInput style={{padding: 15,backgroundColor: 'white',borderColor: 'black',borderWidth: 2, color: 'black'}}
        placeholder="Name of the Stock"
          value={searchInput}
        
        //defaultValue={'Quantity'}
      />
      <TextInput style={{padding: 15,backgroundColor: 'white',borderColor: 'black',borderWidth: 2}}
      placeholder="Quantity"
      value={quantity} 
    />
      <Text
      style={{padding: 15,backgroundColor: 'white',borderColor: 'black',borderWidth: 2, color: 'black'}}>
      {searchResult.price}
      
      </Text>
      <Text
      style={{padding: 15,backgroundColor: 'white',borderColor: 'black',borderWidth: 2,color: 'black'}}>
      
      {parseFloat(searchResult.price)*parseInt(quantity)}
      {console.log(costval)}
      
      </Text>

    <Button
        title="Submit"
        onPress={()=>this.writeIDtoDB(searchInput,costval,quantity)}
        //Button Title

      />
      <Button
      onPress={this.searchAgain}
      title="Add more"
      color="#1D519C"
      accessibilityLabel="Add another stock"
    />
    </Container>
        );}
      else{
          return(
              <Container>
              <Header headingStyle={styles.heading} headingStyleL={styles.background} title="Add"/>
              <TextInput style={{padding: 15,backgroundColor: 'white',borderColor: 'black',borderWidth: 2}}
        placeholder="Name of the Stock"
        onChangeText={searchInput => {
            this.setState({ searchInput });
          }}
          
          value={searchInput}
        
        //defaultValue={'Quantity'}
      />

      <TextInput style={{padding: 15,backgroundColor: 'white',borderColor: 'black',borderWidth: 2}}
        placeholder="Quantity"
        keyboardType = 'numeric'
        onChangeText={quantity => {
            this.setState({ quantity });
          }}
        onSubmitEditing={this.searchStock}
        //defaultValue={'Quantity'}
      />
      <TextInput
      style={{padding: 15,backgroundColor: 'white',borderColor: 'black',borderWidth: 2}}
      placeholder="Price"
      keyboardType = 'numeric'
      value={searchResult}
      //defaultValue={'Price'}
    />
      
      <TextInput
       style={{padding: 15,backgroundColor: 'white',borderColor: 'black',borderWidth: 2}}
        placeholder="Cost"
        keyboardType = 'numeric'
        //value={cost}
        //defaultValue={cost}
      />
      <Button
          title="Submit"
          onPress={() => {setCost(price*quantity)}}
          //Button Title

        />
      </Container>
    );
}
}}




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
  background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: 300,
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






















export default AddScreen;