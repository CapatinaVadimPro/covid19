import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Indication = ({ navigation }) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Les gestes simples !</Text>
			<Button title="Go back" onPress={() => navigation.goBack()} />
		</View>
	);
};

export default Indication;
