import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as firebase from 'firebase/app';
// import { firebase } from '../firebase/config'
import auth from '@react-native-firebase/auth';
import {Button, Content, Header, Form, Input, Item, Label, Container} from 'native-base';
import Headers from '../components/Header'



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
      <Headers headingStyle={styles.heading} headingStyleL={styles.background} title="MRKT"/>
        
          <Form>
            <Item floatingLabel>
              <Label style={ {color: 'white'} }>E-Mail</Label>
              <Input
                style={ {color: 'white'} }
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({email})}
              />
            </Item>
            <Item floatingLabel>
              <Label style={ {color: 'white'} }>Password</Label>
              <Input
                style={ {color: 'white'} }
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
              />
            </Item>
            <Button style={{ marginTop: 10 }}
            full rounded success 
            onPress ={()=> this.loginUser(this.state.email, this.state.password)}
            >
              <Text style = {{ color: 'white' }}>Log-In</Text>
            </Button>
            <Button style = {{marginTop: 10}}
            full rounded primary 
            onPress = {()=> this.signUpUser(this.state.email, this.state.password)}
            >
              <Text style={{color: 'white'}}>Sign-Up</Text>
            </Button>
            <Button style = {{marginTop: 10}}
            full rounded danger onPress = {()=> this.forgotPassword(this.state.email)} >
              <Text style={{color: 'white'}}>
                Forgot Password
              </Text>
            </Button>
          </Form>
        </Container>
        );
    }
  }

//Styles go here
const styles = StyleSheet.create({
    //Beneath here are the styles for the home page (aka login)
    container: {
      flex: 1,
      backgroundColor: '#000000',
      justifyContent: 'center',
      padding: 10
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
    }
  
  })

export default LoginScreen;