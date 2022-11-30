import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'native-base';


// this is the home screen where users login / sign-up
class LoginScreen extends React.Component {

    // const [text, onChangeText] = React.useState("Useless Text");
    // const [number, onChangeNumber] = React.useState(null);

    render() {
      return (
        <View style={styles.wrapView}>
            <Text style={styles.welcomeText}>StocksApp</Text>
            <View style={styles.middle}>
            <TextInput
                style={styles.inputEmail}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="  Email Address"
                // keyboardType="numeric"
            />
            <TextInput
                style={styles.inputPassword}
                // onChangeText={onChangeNumber}
                //  value={number}
                secureTextEntry={true}
                placeholder="  Password"
                // keyboardType="numeric"
            />
            <View style={styles.buttonView}>
                <Button style={styles.button}><Text style={styles.buttonText}>Login</Text></Button>
                <Button style={styles.button}><Text style={styles.buttonText}>Sign-up</Text></Button>
            </View>
            <Text style={styles.forgotText}>Forgot Password?</Text>
            </View>
        </View>
      )
    }
  }

//Styles go here
const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        borderRadius: 5,
        // aspectRatio: 7/6,
        marginBottom: 10,
        marginLeft: 2,
        marginRight: 2,
    },
    buttonText: {
        fontSize: 17,
        color: 'white',

    },
    buttonView: {
        flexDirection:"row",
        marginLeft: 12,
        marginRight: 12,
    },
    forgotText: {
        textAlign: 'center',
        fontSize: 16,
        textDecorationLine: 'underline',
        color: 'grey',
        fontStyle: 'italic'
    },
    inputEmail: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white'
    },
    inputPassword: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white'
    },
    middle: {
        // justifyContent: 'center',
        // alignContent: 'center',
        // alignItems: 'center',
        // textAlignVertical: 'center',
        // alignSelf: 'center',

    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 35,
        marginTop: 30,
        marginBottom: 40,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    wrapView: {
        flex: 1,
        backgroundColor: '#b0eced'

    }
})

export default LoginScreen;