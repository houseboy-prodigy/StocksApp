import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import Header from '../components/Header'
import userImage from '../assets/user.png'
import settings from '../assets/settings.png'
import help from '../assets/help.png'
import notif from '../assets/bell.png'
import logout from '../assets/logout.png'
import ProfileButton from '../components/ProfileButton';
import Container from '../components/Container'


class ProfileScreen extends Component {

	constructor(props) {
		super(props)
		this.handleStatusChange=this.handleStatusChange.bind(this)
	  }
  
	handleStatusChange = () =>{
		this.props.onStatusChange()
	}


	render = () => {
		return (
				<Container style={styles.container}>
					<Header headingStyle={styles.heading} headingStyleL={styles.background} title="Profile"/>
					<ProfileButton name = "Notifications" hasSwitch={true} image={notif}/>
					<ProfileButton name = "Settings" image={settings}/>
					<ProfileButton name = "Change Password" image={help}/>
					<TouchableOpacity name = "Log out" style={styles.stockContainer} onPress={() => this.handleStatusChange()}>
						<Image style={styles.logo} source={logout} />
						<Text style={styles.paragraph}>
							Log Out
						</Text>
					</TouchableOpacity>
				</Container>
		);
	}
}


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
		backgroundColor: 'black',
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: 300,
	  },
    button: {
        paddingTop: 50,
        width: 80,
        height: 20,
        },
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
		marginLeft:0,
		height: 45,
		width: 45,
	},
	background2: {
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
})
export default ProfileScreen;