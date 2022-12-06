import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
// main content and structure - e.g. text, image &c.
class StockBox extends Component {
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
        marginLeft:0,
        height: 50,
        width: 50,
      },
      para: {
        margin: 10,
        marginTop: 20,
        marginLeft: 'auto',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
        color: 'black'
      },
        paragraph: {
        margin: 10,
        marginTop: 20,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'black'
      },
    });
export default StockBox;