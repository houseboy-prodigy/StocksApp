// header content and structure
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class ContentText extends Component {
	render() {
		return (
			<Text style={this.props.textStyle}>
				{this.props.children}
			</Text>
		);
	}
}

// header content and structure
class Header extends Component {
	render() {
		return (
			<View style={this.props.headingStyle}>
				<ContentText textStyle={styles.headingText}>
					{this.props.title}
				</ContentText>
				<LinearGradient
				// Background Linear Gradient
				start = {{x:0.5, y: 0.55}} 
				colors={['transparent','#D9DAD9']}
				style={this.props.headingStyleL}
			  />
			</View>
		);
	}
}

const styles = StyleSheet.create({
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
    headingText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 40,
	},
})
export default Header;