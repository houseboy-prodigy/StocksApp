import homeImage from '../assets/home.png'
import userImage from '../assets/user.png'
import addImage from '../assets/add.png'
import favoritesImage from '../assets/favorites.png'
import chartImage from '../assets/chart.png'
import searchImage from '../assets/search.png'
import React, { useState,Component } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity,TextInput} from 'react-native';

class NavButton extends Component {

    render(){
      return(
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={this.props.onPress}>
      <Image style= {styles.button}
       source={this.props.source}
      />
  
  </TouchableOpacity>
      )
    }
  }

class NavBar extends Component {
    render(){
      return(
            <View style={styles.buttonBox}>
            <NavButton 
              color="#black"
              source={homeImage}
              onPress={this.loadRoute}
            />
            <NavButton 
            color="#black"
            source={favoritesImage}
          //onPress={this.loadRoute}
          />
          <NavButton 
          color="#black"
          source={searchImage}
        //onPress={this.loadRoute}
        />
        <NavButton 
        color="#black"
        source={chartImage}
      //onPress={this.loadRoute}
      />
      <NavButton 
      color="#black"
      source={userImage}
    //onPress={this.loadRoute}
    />

                          </View>
      )
    }
  }

const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: 'lightgrey',
	},
    buttonBox: {
        flex: 1,
        flexDirection: 'row',
        width: 150,
        paddingTop: 250,
        alignItems: 'center',
        justifyContent: 'flex-start',
        },
    button: {
    paddingTop: 50,
    width: 80,
    height: 20,
  },
})
export default NavBar;