import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
// main content and structure - e.g. text, image &c.
class StockBoxWithPL extends Component {
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
      <Text style={styles.para2}>
      {console.log(this.props.pl)}
      {this.props.pl}
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
        marginTop: 0,
        marginLeft: 200,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
      },
        paragraph: {
        margin: 10,
        marginTop: 20,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
      },
      para2 :{
        marginTop:30,
        marginRight: 50
      }
    });
export default StockBoxWithPL;