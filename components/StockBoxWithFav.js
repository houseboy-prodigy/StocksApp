import React, { Component,useState,useEffect } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
// main content and structure - e.g. text, image &c.
import favoritesImage from '../assets/fav.png'
import favoritesImage2 from '../assets/redfav.png'
import database from '@react-native-firebase/database';



export default function StockBoxWithFav(props){
  const[notaddedyet, setAlternateImage] = useState(true);
  const[isFound, setIsFound] = useState(false);
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

 deletefromdb = (name) => {
  try {
      const path = 'UserFavorites/' + '' + name
      database()
          .ref(path).remove()
          .then(() => console.log('Data removed.'));

  } catch (error) {
      console.log(error.toString())
  }
}

 FavoriteActions = () => {
   if(notaddedyet){
  writeIDtoDB(props.name,props.price);
  changeImage();
   }
   else{
    deletefromdb(props.name,props.price);
    changeImage();
   }
}

queryStock = (name) => {
  try {
    database().ref('UserFavorites').child(name).once("value").then((snapshot) => {
      if (snapshot.exists()) {
        console.log('found')
        setAlternateImage(false)
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
  useEffect(() => {
    queryStock(props.name);
  }, []);

  
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
      {notaddedyet && <Image style={styles.logo} source={favoritesImage} />}
      {!notaddedyet && <Image style={styles.logo} source={favoritesImage2} />}
  </TouchableOpacity>    
  </View>
		);
	}


const styles = StyleSheet.create({
    stockContainer: {
        //flex: 1,
        flexDirection: 'row',
        //alignItems: 'left',
        backgroundColor: 'black',
        borderWidth:0.5,
        borderTopColor: 'lightgrey',
        borderBottomColor: '#7B7B7B',
        //bottombordercolor:'3px solid red',
        borderRadius: 10,
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
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'right',
      },
        paragraph: {
        
        marginTop: 20,
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
      },
    });
