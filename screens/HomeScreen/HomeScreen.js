import * as React from 'react';
import {
	Image,
	ImageBackground,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	SafeAreaView,
	Button,
	Animated,
	Dimensions,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../../constants/Colors';

import InfoComp from './HomeScreenSubComp/Info';

const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SectionRedirect = ({ navigation, picSource, name }) => {
	return (
		<ImageBackground style={styles.sectionContainer} source={{ uri: picSource }}>
			<View style={styles.filterBack}>
				<Text style={styles.text}>{name ? name : 'test'}</Text>
			</View>
		</ImageBackground>
	);
};

const Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.halfScreen}>
				<SectionRedirect
					navigation={navigation}
					style={{ width: windowWidth / 2, height: windowHeight / 2 }}
					name={'Les dernières informations'}
					picSource="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
				/>
				<SectionRedirect
					navigation={navigation}
					style={{ width: windowWidth / 2, height: windowHeight / 2 }}
					name={'Les gestes simples'}
					picSource="https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
				/>
			</View>
			<View style={styles.halfScreen}>
				<SectionRedirect
					navigation={navigation}
					style={{ width: windowWidth / 2, height: windowHeight / 2 }}
					name={'Statistiques globaux'}
					picSource="https://images.unsplash.com/photo-1584291527905-f930791fb1ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
				/>
				<SectionRedirect
					navigation={navigation}
					style={{ width: windowWidth / 2, height: windowHeight / 2 }}
					name={'Statistiques chez vous'}
					picSource="https://images.unsplash.com/photo-1551878931-9c07f24e9911?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
				/>
			</View>
		</View>
	);
};

const HomeScreen = ({ route, navigation }) => {
	return (
		<Stack.Navigator initialRouteName="Home" headerMode={'none'}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="InfoComp" component={InfoComp} />
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.lightGrey,
		justifyContent: 'center',
		alignItems: 'center',
	},
	halfScreen: {
		flex: 1,
		flexDirection: 'row',
	},
	text: {
		fontSize: 25,
		color: '#fff',
		textAlign: 'center',
	},
	filterBack: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#00000082',
	},
	sectionContainer: {
		width: windowWidth / 2,
		height: windowHeight / 2,
		flex: 1,
	},
});

export default HomeScreen;
