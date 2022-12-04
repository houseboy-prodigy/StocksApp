import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, View, Image} from 'react-native';

class TextInputBox extends Component {
  render(){
    return(
          <View style={styles.container}>
        <TextInput
          placeholder={this.props.placeholder}
          style={styles.inputStyle}
          value={this.props.value}
        />
    </View>
    );
  }
}          

const styles = StyleSheet.create({
container:{
  padding: 20,
  backgroundColor: '#253B80'
},
inputStyle:{
    backgroundColor: "white",
    height: 50
  },
});


export default TextInputBox;