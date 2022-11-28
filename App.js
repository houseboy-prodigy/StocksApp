/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import userImage from './assets/user.png'
import React,{ useState,Component } from 'react';

import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  Button, Text, 
  View, 
  Image, 
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

// container for screen content and components
class Container extends Component {
	render() {
		return (
			<View style={styles.container}>
				{this.props.children}
			</View>
		);
	}
}

class StockBox extends Component {
	render() {
		return (
      <View style={styles.stockContainer}>
      <Image style={styles.logo} source={this.props.image} />
      <Text style={styles.paragraph}>
        {this.props.name}
      </Text>
      <Text style={styles.para}>
        {this.props.price}
      </Text>
    </View>
		);
	}
}

 // generic text content with custom style
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
			</View>
		);
	}
}

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text style={{ color: "#0378A6", fontSize: 24 }}>Greetings, Human!</Text>
  </View>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  stockContainer: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: ' flex-start',
    backgroundColor: '#D9D9D9',
    borderWidth:1,
    bottomborder:'3px solid black',
    padding: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
