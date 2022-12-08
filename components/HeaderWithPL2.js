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

 // generic text content with custom style
class SubContentText extends Component {
	render() {
		return (
			<Text style={this.props.textStyle}>
				{this.props.children}
			</Text>
		);
	}
}
class HeaderWithPL extends Component {
	render() {
		return (
			<View style={this.props.headingStyle}>
			<LinearGradient
			// Background Linear Gradient
			start={this.props.start}
			colors={this.props.colors}
			style={this.props.headingStyleL}
		  />
				<ContentText textStyle={styles.headingText}>
					{this.props.title}
				</ContentText>
        <SubContentText textStyle={styles.subheadingProfitText}>
					{this.props.profit}
				</SubContentText>
        <SubContentText textStyle={styles.subheadingLossText}>
					{this.props.loss}
				</SubContentText>
			</View>
		);
	}
}


const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: 'black',
		borderBottomColor: 'white'

	},
	headingText: {
		color: '#FFFFFF',
		fontWeight: 'bold',
		fontSize: 40,
    },
    subheadingProfitText: {
        color: '#71BE5E',
        fontSize: 24,
      },
      subheadingLossText: {
		fontSize: 15,
        color: "white"
      },
})
export default HeaderWithPL;