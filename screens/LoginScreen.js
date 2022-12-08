import * as React from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import 'react-native-gesture-handler';
import * as firebase from 'firebase/app';
// import { firebase } from '../firebase/config'
import auth from '@react-native-firebase/auth';
import {Content, Form, Input, Item, Label} from 'native-base';
import Header from '../components/Header'
import Container from '../components/Container'
import HeaderWithSub from '../components/HeaderWithPL2'


class LoginScreen extends React.Component {
    constructor(props) {
      super(props)
      this.handleStatusChange=this.handleStatusChange.bind(this)
      this.state = ({
        email: '',
        password: ''
      })
    }

    handleStatusChange = () =>{
      this.props.onStatusChange()
      console.log("yo")
    }

    writeUserData = (email) => {
      try {
        //var database = firebase.database();
        var userIdentifier2 = String(email);
        firebase.database().ref('users/').update({
        [userIdentifier2]: {
          user: email
          }
        });

      } catch (error) {
        console.log(error.toString())
      }
    }
    
    signUpUser = (email, password) =>{
        
      try {
        
        if(this.state.password.length<6) {
          alert("Please enter at least 6 chars")
          return;
        }
        else {
            
          auth().createUserWithEmailAndPassword(email, password).then((user) => {  //////
            console.log(user);
            // navigate('Home')
            this.handleStatusChange()
            })
          
          var email2 = email.replace(".","");
        
          this.writeUserData(email2);
        }
      } catch (error) {
        console.log(error.toString())
      }
    }
  
    loginUser = (email, password) => {
      try {
        auth().signInWithEmailAndPassword(email, password).then((user) => {  //////
        console.log(user);
        this.handleStatusChange()
        })
      
        
      } catch (error) {
        alert("Could not log in; user or password is wrong")
        console.log(error.toString())
      }
      
    }
  
    forgotPassword = (email) => {
      try {
        var auth = firebase.auth();
        //var emailAddress = email;
        auth.sendPasswordResetEmail(email).then(function(user) {
          console.log('Reset email sent!');
        })
      } catch (error) {
        console.log('Error');
      }
    }
  
    render() {
      return (  
      <Container style={styles.container}>
      <HeaderWithSub headingStyle={styles.heading} start = {{x:0.5, y: 0.55}} colors={['transparent','#D9DAD9']} headingStyleL={styles.background} title="MRKT" loss={'Stock tracking made easy'}/>
      <TextInput
      style={styles.inputbox}
        placeholder="Email"
        placeholderTextColor='white'
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        onChangeText={(email) => this.setState({email})}
      />
      <TextInput
      style={styles.inputbox}
        placeholder="Password"
        placeholderTextColor='white'
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        onChangeText={(password) => this.setState({password})}
      />
          <Button
          title="Login"
          onPress ={()=> this.loginUser(this.state.email, this.state.password)}
          //Button Title
  
        />
        <Button
        title="Signup"
        color="#1D519C"
        //Button Title
        onPress = {()=> this.signUpUser(this.state.email, this.state.password)}
      />
      <Button
      title="Forgot Password"
      color="red"
      //Button Title
      onPress = {()=> this.forgotPassword(this.state.email)} 
    />
        </Container>
        );
    }
  }

//Styles go here
const styles = StyleSheet.create({
    //Beneath here are the styles for the home page (aka login)
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
      backgroundColor: 'black',
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
        },
    header: {
      color: 'white',
      fontSize: 40,
      justifyContent: 'center',
    },
    inputbox:{
      padding: 15,
      backgroundColor: 'black',
      color: 'white',
      fontSize: 15, 
      borderBottomColor: '#7B7B7B', 
      borderColor: 'black',
      borderWidth: 2
    },
  
  })

export default LoginScreen;