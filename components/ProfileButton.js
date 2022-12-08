import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class ProfileButton extends Component {

  constructor(props) {
    super(props)
    // this.state = ({
    //   email: '',
    //   password: ''
    // })
  }

  

	render() {
		return (
      <TouchableOpacity style={styles.stockContainer}>
          <Image style={styles.logo} source={this.props.image} />
          <Text style={styles.paragraph}>
            {this.props.name}
          </Text>
    </TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
    stockContainer: {
        flexDirection: 'row',
        backgroundColor: 'black',
        borderWidth:0.5,
        borderTopColor: 'lightgrey',
        borderBottomColor: '#7B7B7B',
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
        paragraph: {
        margin: 10,
        marginTop: 15 ,
        marginLeft: 15,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'white'
      },
    });
export default ProfileButton;