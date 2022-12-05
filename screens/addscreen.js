import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image,TouchableOpacity, TextInput} from 'react-native';
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import StockBox from '../components/StockBox'
import TextInputBox from '../components/TextInputBox'
import Container from '../components/Container'

class AddScreen extends Component {
render() {
return(
<Container>

      <Header headingStyle={styles.heading} title="Add"  />	
      <TextInputBox placeholder= 'Name of the stock' />

      <TextInput style={{padding: 15,backgroundColor: 'white',borderColor: 'black',borderWidth: 2}}
        placeholder="Quantity"
        keyboardType = 'numeric'
        onChangeText={newQuant => setQuantity(newQuant)}
        
        //defaultValue={'Quantity'}
      />
      <TextInput
        style={{padding: 15,backgroundColor: 'white',borderColor: 'black',borderWidth: 2}}
        placeholder="Price"
        keyboardType = 'numeric'
        onChangeText={newText => setPrice(newText)}
        
        //defaultValue={'Price'}
      />
      
      <TextInput
       style={{padding: 15,backgroundColor: 'white',borderColor: 'black',borderWidth: 2}}
        placeholder="Cost"
        keyboardType = 'numeric'
        
        
        //value={cost}
        //defaultValue={cost}
      />
      <Button
          title="Submit"
          onPress={() => {setCost(price*quantity)}}
          //Button Title

        />
      </Container>
    )
}
}




const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: 'lightgrey',
	},
    heading: {
		//flex: 0,
		alignItems: 'center',
		margin: 5,
		padding: 100,
		backgroundColor: '#1D519C',
  },
  buttonBox: {
    flex: 1,
    paddingTop: 80,
    flexDirection: 'row',
    width: 150,
    alignItems: 'center',
    justifyContent: 'flex-start',
    },
button: {
paddingTop: 50,
width: 80,
height: 20,
},
})






















export default AddScreen;