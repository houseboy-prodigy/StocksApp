import React, {useEffect} from 'react'
import { Text, View } from 'react-native'
// import styles from '../Styles/styles'
import {Button, Form, Input, Item, Label} from 'native-base';
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import * as firebase from 'firebase/app';
import database from '@react-native-firebase/database';
import { RotateInUpLeft } from 'react-native-reanimated';
import { route } from '@react-navigation/native';


// EXAMPLE OF QUERY ///////////////////////////////////////////////////////////

class WriteSuccess extends React.Component {

    constructor(props){
        super(props)
        // const { name, value } = route.params;
        this.state = ({
            name: '',
            // arr: {}
            // value: ''
        })
        
    }

    readFromDB = (name) => {
        const res = 
            database()
            .ref('testData')
            .on('value', snapshot => {
            let data = snapshot.val() || {};
            let arr = {...data};
            // this.setState({...arr})
            console.log(arr)
            })
    };

    
    

    

    render () {
        // console.log('here: ' + String(this.state.arr));
        return (
            <View>
                <Item floatingLabel>
                    <Label style={ {color: 'black'} }>name</Label>
                    <Input
                        style={ {color: 'black'} } autoCorrect={false} autoCapitalize="none"
                        onChangeText={(name) => this.setState({name})}
                    />
                </Item>
                <Button style={{ marginTop: 10 }} full rounded success
                onPress={(name) => { this.readFromDB(name) }}>
                    <Text style = {{ color: 'white' }}>read value</Text>
                </Button>
            </View>
        )
    }
}

export default WriteSuccess;