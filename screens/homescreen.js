import React, { Component, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image,TouchableOpacity,  SafeAreaView, ScrollView} from 'react-native';
import HeaderWithPL from '../components/HeaderWithPL'
import NavBar from '../components/NavBar'
import HeaderWithSub from '../components/HeaderWithPL2'

import StockBoxLG from '../components/StockBoxLG'
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
          
          pl+= 10 * parseInt(value.quant)
          let tempObj = {name: value.name, price: value.cost.toFixed(2)}
          total += value.cost
          favarr.push(tempObj)
          console.log(currPrice)
         })
      console.log(`finalpl: ${pl}`)
      //console.log(favarr)
      setData(favarr)
      setTotal(total.toFixed(2))
      setProfitLoss(pl)
      // this.setState({...arr})
      })
    }, []);
    if(data.length == 0){
      return (
                <View style={styles.container}>
                <HeaderWithPL headingStyle={styles.heading} start = {{x:0.5, y: 0.55}} colors={['transparent','#D9DAD9']} headingStyleL={styles.background} title={`$${total}`} profit = {`$${profitloss}`}/>
                {data.map((item,index) => (<StockBoxLG key={index} colors={['transparent','#20BF55']} name={item.name} price={item.price} image={All[`${item.name}`]}/>))}

                
                
                
                <Text style={styles.paragraph}>
                No Stocks added yet, Please go to the Add screen to start your portfolio
              </Text>
              </View>
              
      );
      }

    else if(profitloss > 200){
    return (
      
      <SafeAreaView style={styles.container}>
      <ScrollView>
              <View>
              <HeaderWithPL headingStyle={styles.heading} start = {{x:0.7, y: 0.4}} colors={['transparent','#C30202']} headingStyleL={styles.background} title={`$${total}`} loss = {`-$${profitloss}`}/>
    
              {data.map((item,index) => (<StockBoxLG key={index} colors={['transparent','#F53844']} name={item.name} price={item.price} image={All[`${item.name}`]}/>))}

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
                <HeaderWithPL headingStyle={styles.heading} start = {{x:0.3, y: 0.4}} colors={['transparent','#5BD17B']} headingStyleL={styles.background} title={`$${total}`} profit = {`$${profitloss}`}/>
                {data.map((item,index) => (<StockBoxLG key={index} colors={['transparent','#20BF55']} name={item.name} price={item.price} image={All[`${item.name}`]}/>))}
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
    paragraph: {
      margin: 24,
      marginTop: 200,
      fontSize: 20,
      
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
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
