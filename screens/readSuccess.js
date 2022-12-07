import React from 'react'
import { Text, View } from 'react-native'
// import styles from '../Styles/styles'
import {Button, Form, Input, Item, Label} from 'native-base';
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import * as firebase from 'firebase/app';
import database from '@react-native-firebase/database';
import { navigation } from '@react-navigation/native';
import { withNavigation } from 'react-navigation'; 


// EXAMPLE OF WRITING TO THE REALTIME DATABASE ///////////////////////////////////////

class readSuccessScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = ({
            name: '',
            value: ''
        })
    }

    goToSuccess = (navigate) => {
        navigate('Success')
    }

    deletefromdb = (name) => {
        try {
            const path = 'UserFavorites/' + '' + name
            database()
                .ref(path).remove()
                .then(() => console.log('Data removed.'));

        } catch (error) {
            console.log(error.toString())
        }
     }

    render () {
    return (
        <View>
            {/* <Form> */}
                <Item floatingLabel>
                    <Label style={ {color: 'black'} }>name</Label>
                    <Input
                        style={ {color: 'black'} } autoCorrect={false} autoCapitalize="none"
                        onChangeText={(name) => this.setState({name})}
                    />
                </Item>
                <Button style={{ marginTop: 10 }} full rounded success
                onPress={() => { this.deletefromdb(this.state.name) }}>
                    <Text style = {{ color: 'white' }}>delete</Text>
                </Button>
            {/* </Form> */}
        </View>
    )
}
}

export default readSuccessScreen;