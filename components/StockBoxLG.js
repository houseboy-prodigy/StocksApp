import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity,Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import database from '@react-native-firebase/database';

// main content and structure - e.g. text, image &c.
class StockBoxLG extends Component {

  deletefromdb = (name) => {
    try {
        const path = 'UserPortfolio/' + '' + name
        database()
            .ref(path).remove()
            .then(() => console.log('Data removed.')).then(Alert.alert('Stock Deleted from portfolio'));
    } catch (error) {
        console.log('error is here')
        console.log(error.toString())
    }
  }

	render() {
		return (
      <View style={styles.stockContainer}>


      <TouchableOpacity 
 onLongPress={() => {this.deletefromdb(this.props.name)}}
 delayLongPress={300}>
 <Image style={styles.logo} source={this.props.image} />
</TouchableOpacity>

      <Text style={styles.paragraph}>
        {this.props.name}
      </Text>
      <Text style={styles.para}>
        {this.props.price}
      </Text>
      
    </View>
		);
	}
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
        marginLeft:0,
        height: 50,
        width: 50,
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
        },
      para: {
        margin: 10,
        marginTop: 20,
        marginLeft: 'auto',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
        color: 'white'
      },
        paragraph: {
        margin: 10,
        marginTop: 20,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'white'
      },
    });
export default StockBoxLG;