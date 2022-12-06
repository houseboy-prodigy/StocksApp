import React, { Component, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image,TouchableOpacity,SafeAreaView, ScrollView} from 'react-native';
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
import * as All  from '../assets/'

var objectDict = {}


export default function FavoritesScreen() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      const favarr = [];
      const res = 
      database()
      .ref('UserFavorites')
      .on('value', snapshot => {
      let data = snapshot.val() || {};
      objectDict = {...data};
      //console.log(objectDict)
      favarr.length = 0
      Object.entries(objectDict).forEach(([key, value]) => {
          //console.log(value)
          let tempObj = {name: value.name, price: value.value}
          favarr.push(tempObj)
         })
      //console.log(favarr)
      setData(favarr)
      // this.setState({...arr})
      })
    }, []);
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView>
              <View>
              <Header headingStyle={styles.heading} headingStyleL={styles.ba} title="Favorites"/>
              {data.map((item,index) => (<StockBox key={index} name={item.name} price={item.price} image={All[`${item.name}`]}/>))}
              </View>
              </ScrollView>
            </SafeAreaView>
    )
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
    button: {
        paddingTop: 50,
        width: 80,
        height: 20,
        },
})
