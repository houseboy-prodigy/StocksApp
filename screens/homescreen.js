import React, { Component, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image,TouchableOpacity,  SafeAreaView, ScrollView} from 'react-native';
import HeaderWithPL from '../components/HeaderWithPL'
import NavBar from '../components/NavBar'

import StockBox from '../components/StockBox'
import getPriceFromApi from '../components/ApiCall'
import Header from '../components/Header'
// import styles from '../Styles/styles'
import {Form, Input, Item, Label} from 'native-base';
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import * as firebase from 'firebase/app';
import database from '@react-native-firebase/database';
import { RotateInUpLeft } from 'react-native-reanimated';
import { route } from '@react-navigation/native';
import Container from '../components/Container'
import Swipeable from 'react-native-gesture-handler/Swipeable';
// container for screen content and components
import * as All  from '../assets/'

var objectDict = {}
 

export default function HomeScreen() {
    
    const [data, setData] = useState([]);
    const [total,setTotal] = useState();
    const [currPrice,setCurrPrice] = useState();
    const [profitloss,setProfitLoss] = useState();
    useEffect(() => {

      async function searchStockPrice(name) {
        console.log(name)
        const url = `https://api.polygon.io/v2/aggs/ticker/${name}/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=g14DIhw20yIUFfTGwdYPz0UGT8SIwODp`;
        await fetch(url)
          .then(res => res.json())
          .then(responseJson => 
            setCurrPrice(responseJson.results[0].o)
      )
          .catch(error => this.setState({ error }));
      }
      const favarr = [];
      const res = 
      database()
      .ref('UserPortfolio')
      .on('value', snapshot => {
      let data = snapshot.val() || {};
      objectDict = {...data};
      console.log(objectDict)
      let total = 0
      let pl = 0
      favarr.length = 0
      Object.entries(objectDict).forEach(([key, value]) => {
          //console.log(value)
          //searchStockPrice(value.name)
          pl+= 10 * parseInt(value.quant)
          let tempObj = {name: value.name, price: value.cost.toFixed(2)}
          total += value.cost
          favarr.push(tempObj)
         })
      console.log(`finalpl: ${pl}`)
      //console.log(favarr)
      setData(favarr)
      setTotal(total.toFixed(2))
      setProfitLoss(pl)
      // this.setState({...arr})
      })
    }, []);
    if(profitloss > 200){
    return (
      
      <SafeAreaView style={styles.container}>
      <ScrollView>
              <View>
              <HeaderWithPL headingStyle={styles.heading} title={`$${total}`} loss = {`$${profitloss}`}/>
              {data.map((item,index) => (<StockBox key={index} name={item.name} price={item.price} image={All[`${item.name}`]}/>))}
              </View>
              </ScrollView>
            </SafeAreaView>
    );
    }
    else{
      return (
      
        <SafeAreaView style={styles.container}>
        <ScrollView>
                <View>
                <HeaderWithPL headingStyle={styles.heading} title={`$${total}`} profit = {`$${profitloss}`}/>
                {data.map((item,index) => (<StockBox key={index} name={item.name} price={item.price} image={All[`${item.name}`]}/>))}
                </View>
                </ScrollView>
              </SafeAreaView>
      );
    }
  }
const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: 'flex-start',
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
    heading: {
		//flex: 0,
		alignItems: 'center',
		margin: 5,
		padding: 75,
    backgroundColor: 'black',
    
    },
    button: {
        paddingTop: 50,
        width: 80,
        height: 20,
        },
})
