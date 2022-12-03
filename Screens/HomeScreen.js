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

class HomeScreen extends React.Component {

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

    writeIDtoDB = (name, value) => {
        try {
            const path = 'testData/' + '' + name
            database()
                .ref(path)
                .set({
                    name: name,
                    value: value,
            }).then(() => console.log('Data set.'));

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
                <Item floatingLabel>
                    <Label style={ {color: 'black'} }>value</Label>
                    <Input
                        style={ {color: 'black'} } autoCorrect={false} autoCapitalize="none"
                        onChangeText={(value) => this.setState({value})}
                    />
                </Item>
                <Button style={{ marginTop: 10 }} full rounded success
                onPress={() => { this.writeIDtoDB(this.state.name, this.state.value) }}>
                    <Text style = {{ color: 'white' }}>write</Text>
                </Button>
            {/* </Form> */}
        </View>
    )
}
}

export default withNavigation(HomeScreen);