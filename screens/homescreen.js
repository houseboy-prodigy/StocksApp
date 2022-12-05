import React, { Component, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image,TouchableOpacity,  SafeAreaView, ScrollView} from 'react-native';
import HeaderWithPL from '../components/HeaderWithPL'
import NavBar from '../components/NavBar'
import appleImage from '../assets/apple.png'
import googleImage from '../assets/google.png'
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


var objectDict = {}


export default function HomeScreen() {
    const [data, setData] = useState([]);
    const [total,setTotal] = useState();
    useEffect(() => {
      const favarr = [];
      const res = 
      database()
      .ref('UserPortfolio')
      .on('value', snapshot => {
      let data = snapshot.val() || {};
      objectDict = {...data};
      //console.log(objectDict)
      let total = 0
      Object.entries(objectDict).forEach(([key, value]) => {
          //console.log(value)
          let tempObj = {name: value.name, price: value.cost}
          total += value.cost
          favarr.push(tempObj)
         })
      //console.log(favarr)
      setData(favarr)
      setTotal(total)
      // this.setState({...arr})
      })
    }, []);
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView>
              <View>
              <HeaderWithPL headingStyle={styles.heading} title={`$${total}`} loss = "-$20 200%"/>
              {data.map((item) => (<StockBox name={item.name} price={item.price} image={require('../assets/home.png')}/>))}
              </View>
              </ScrollView>
            </SafeAreaView>
    )
    }

const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: '#0C0228',
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
