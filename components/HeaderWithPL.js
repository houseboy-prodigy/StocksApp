// header content and structure
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image} from 'react-native';

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
		backgroundColor: 'lightgrey',
	},
	headingText: {
		color: '#FFFFFF',
		fontSize: 40,
    },
    subheadingProfitText: {
        color: '#71BE5E',
        fontSize: 24,
      },
      subheadingLossText: {
        fontSize: 24,
        color: "red"
      },
})
export default HeaderWithPL;