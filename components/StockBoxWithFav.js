import React, { Component,useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
// main content and structure - e.g. text, image &c.
import favoritesImage from '../assets/fav.png'
import database from '@react-native-firebase/database';






class StockBoxWithFav extends Component {
  
  writeIDtoDB = (name, value) => {
    try {
        const path = 'UserFavorites/' + '' + name
        database()
            .ref(path)
            .set({
                name: name,
                value: value,
        }).then(() => Alert.alert("Added to Favorites")
        
        );

    } catch (error) {
        console.log(error.toString())
    }
 }


	render() {
		return (
      <View style={styles.stockContainer}>
      <Image style={styles.logo} source={this.props.image} />
      <Text style={styles.paragraph}>
        {this.props.name}
      </Text>
      <Text style={styles.para}>
        {this.props.price}
      </Text>
      <TouchableOpacity onPress={()=>this.writeIDtoDB(this.props.name,this.props.price)}>
      <Image style={styles.logo} source={favoritesImage} />
  </TouchableOpacity>    
  </View>
		);
	}
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
export default StockBoxWithFav;