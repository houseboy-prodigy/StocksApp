import React, { Component, useState } from 'react';
import { Button, Modal,TextInput,StyleSheet, Text, View, Image, TouchableOpacity,Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import database from '@react-native-firebase/database';
import { set } from 'react-native-reanimated';
// main content and structure - e.g. text, image &c.
const StockBoxLG = (props) => {
  const [visible,setVisible] = useState(false)
  const [updateq,setUpdateq] = useState()
  const [sprice,setSprice] = useState()


const readPrice = (name) => {
  try {
    const path = 'UserPortfolio/' + '' + name
    database()
        .ref(path).once("value", function(snapshot) {
          var value = snapshot.val();
          setSprice(value.sprice)
          
        });
      }
      catch (error) {
        console.log('error is here')
        console.log(error.toString())
    }
  }

  const deletefromdb = (name) => {
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

  const updatedb = (quantity,name,cost) => {
    try{
      const path = 'UserPortfolio/' + '' + name
      database().ref(path).update({
        quant: quantity
      })
    }
    catch(error) {
      console.log('error in update')
      console.log(error.toString())
    }
  }
  const updateAction = () => {
    //searchStock()
    
    readPrice(props.name)
    //updatecost = updateq * sprice
    updatedb(updateq,props.name)
    setVisible(!visible)
  }
  return(
    <View style={styles.stockContainer}>


    <TouchableOpacity 
    onLongPress={() => {deletefromdb(props.name)}}
    delayLongPress={300}>
    <Image style={styles.logo} source={props.image} />
    </TouchableOpacity>

    <Text style={styles.paragraph}>
      {props.name}
    </Text>
    
    <TouchableOpacity style={{marginLeft: 'auto'}}
    onLongPress={() => {setVisible(!visible)}}
    delayLongPress={300}>
    <Text style={styles.para}> {props.price} </Text>
    </TouchableOpacity>
      
    <Modal backgroundColor="red"
      animationType="slide"
      transparent={true}
      visible={visible}
      >
      
      <View style={styles.container}>

      <TextInput style={{color: 'white', fontSize:30}}
      placeholder="Enter a value"
      placeholderTextColor='white'
      onChangeText={(text) => setUpdateq(text)}
      onSubmitEditing={() => {updateAction()} }
      />
      <Button title='submit'
        onPress={() => {updateAction()} }/>
      
      </View>
      </Modal>
  </View>
  )
}
/*
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
      <TouchableOpacity style={{marginLeft: 'auto'}}
 onLongPress={() => {alert('pressed')}}
 delayLongPress={300}>
 <Text style={styles.para}> {this.props.price} </Text>
</TouchableOpacity>
      
    </View>
		);
	}
}
*/
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
      container: {
        flex: 0.5,
        marginTop: 200,
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
export default StockBoxLG;