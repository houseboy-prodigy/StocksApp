import React, {useEffect, useState} from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
// import styles from '../Styles/styles'
import {Button, Form, Input, Item, Label} from 'native-base';
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import * as firebase from 'firebase/app';
import database from '@react-native-firebase/database';
import { RotateInUpLeft } from 'react-native-reanimated';
import { route } from '@react-navigation/native';
import Container from '../components/Container'
import Header from '../components/Header'
import StockBox from '../components/StockBox'



var objectDict = {}

export default function readSuccessScreen() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      const favarr = [];
      const res = 
      database()
      .ref('testData')
      .on('value', snapshot => {
      let data = snapshot.val() || {};
      objectDict = {...data};
      console.log(objectDict)
      Object.entries(objectDict).forEach(([key, value]) => {
          console.log(value)
          let tempObj = {name: value.name, price: value.value}
          favarr.push(tempObj)
         })
      console.log(favarr)
      setData(favarr)
      // this.setState({...arr})
      })
    }, []);
    return (
        <Container>
              <View>
              <Header headingStyle={styles.heading} title="Favorites"/>
              {data.map((item) => (<StockBox name={item.name} price={item.price} image={require('../assets/home.png')}/>))}
              </View>
            </Container>
    )
    }

/*
class readSuccessScreen extends React.Component {

    
    constructor(props){
        super(props)
        // const { name, value } = route.params;
        this.state = ({
            name: '',
            // arr: {}
            // value: ''
        })
        
    }

    readFromDB = () => {
        const res = 
            database()
            .ref('testData')
            .on('value', snapshot => {
            let data = snapshot.val() || {};
            objectDict = {...data};
            console.log(objectDict)
            Object.entries(objectDict).forEach(([key, value]) => {
                console.log(value)
                let tempObj = {name: value.name, price: value.value}
                favarr.push(tempObj)
               })
            console.log(favarr)
            this.setState({
                    isLoading: false,
                    searchResult: {
                      objectDict: objectDict,
                      favarr: favarr
                    }
                  })
            // this.setState({...arr})
            })
    };
    render (){
        
        const { searchInput, searchResult, isLoading, error } = this.state;
        if (searchResult) {
            this.setState({isLoading: true})
          return (
            <Container>
              <View>
              <Header headingStyle={styles.heading} title="Favorites"/>
              {favarr.map((item) => (<StockBox name={item.name} price={item.price} image={item.image}/>))}
              </View>
            </Container>
          );
        } else {
          return (
            <Container>
            <View>
            <Header headingStyle={styles.heading} title="Search Stock"/>
            <Button
            style={{padding: 15,backgroundColor: 'white',borderColor: 'black',borderWidth: 100}}
            title="Press me"
            onPress={this.readFromDB}
          />

            
            </View>

            </Container>
          );
        }
      }
}
*/
const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: 'lightgrey',
    },
    buttonBox: {
        flex: 1,
        paddingTop: 80,
        flexDirection: 'row',
        width: 150,
        alignItems: 'center',
        justifyContent: 'flex-start',
        },
    heading: {
		//flex: 0,
		alignItems: 'center',
		margin: 5,
		padding: 100,
		backgroundColor: '#1D519C',
    },
    button: {
        paddingTop: 50,
        width: 80,
        height: 20,
        },
})
