import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Switch} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const ProfileButton = (props) => {

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  

	// render() {
		return (
      <TouchableOpacity style={styles.stockContainer}>
          <Image style={styles.logo} source={props.image} />
          <Text style={styles.paragraph}>
            {props.name}
          </Text>
          {props.hasSwitch? (
          <View style = {styles.switchView}>
              <Switch style={styles.switch} thumbColor='white' trackColor={{ false: 'grey', true: 'green' }}
              value={isSwitchOn} onValueChange={onToggleSwitch}/>
          </View>
          ) : <></>}
    </TouchableOpacity>
		);
	// }
}

const styles = StyleSheet.create({
    stockContainer: {
        flexDirection: 'row',
        backgroundColor: 'black',
        borderWidth:0.5,
        borderTopColor: 'lightgrey',
        borderBottomColor: '#7B7B7B',
        borderRadius: 10,
        padding: 10,
      },  
      logo: {
        margin:4,
        height: 45,
        width: 45,
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
        },
        paragraph: {
        margin: 10,
        marginTop: 15 ,
        marginLeft: 15,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'white'
      },
      switch: {
        margin: 10,
        marginTop: 15 ,
        marginLeft: 100,
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]
      },
      switchView: {
        flex: 1,
        justifyContent: "flex-end",
      }
    });
export default ProfileButton;