import React, { Component,useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
// main content and structure - e.g. text, image &c.
import favoritesImage from '../assets/fav.png'
import favoritesImage2 from '../assets/redfav.png'
import database from '@react-native-firebase/database';



export default function StockBoxWithFav(props){
  const[alternateImage, setAlternateImage] = useState(true);
  const changeImage = () => {
    console.log('here in changeimage')
    setAlternateImage(alternateImage => !alternateImage);
  }
  writeIDtoDB = (name, value) => {
    try {
        const path = 'UserFavorites/' + '' + name
        database()
            .ref(path)
            .set({
                name: name,
                value: value,
        }).then(() => console.log('here in write')
        
        );

    } catch (error) {
        console.log(error.toString())
    }
 }
 FavoriteActions = () => {
  writeIDtoDB(props.name,props.price);
  changeImage();
}

		return (
      <View style={styles.stockContainer}>
      <Image style={styles.logo} source={props.image} />
      <Text style={styles.paragraph}>
        {props.name}
      </Text>
      <Text style={styles.para}>
        {props.price}
      </Text>
      <TouchableOpacity onPress={FavoriteActions}>
      {alternateImage && <Image style={styles.logo} source={favoritesImage} />}
        {!alternateImage && <Image style={styles.logo} source={favoritesImage2} />}
      
  </TouchableOpacity>    
  </View>
		);
	}


const styles = StyleSheet.create({
    stockContainer: {
        //flex: 1,
        flexDirection: 'row',
        //alignItems: 'left',
        backgroundColor: '#D9D9D9',
        borderWidth:1,
        bottomborder:'3px solid black',
        padding: 10,
      },  
      logo: {
        
        height: 50,
        width: 50,
      },
      para: {
        margin: 10,
        marginTop: 20,
        marginLeft: 'auto',
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'right',
      },
        paragraph: {
        
        marginTop: 20,
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
      },
    });
