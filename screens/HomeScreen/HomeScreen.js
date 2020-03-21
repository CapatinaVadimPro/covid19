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
import Layout from '../../constants/Layout';

import InfoComp from './HomeScreenSubComp/Info';
import Indication from './HomeScreenSubComp/Indications';
import StatsCov from './HomeScreenSubComp/StatsCovid';

const Stack = createStackNavigator();

const SectionRedirect = ({ navigation, picSource, name, component }) => {
	return (
		<TouchableOpacity onPress={() => navigation.navigate(component)} activeOpacity={0.9}>
			<ImageBackground
				style={component === 'Stats' ? styles.sectionContainer_large : styles.sectionContainer}
				source={{ uri: picSource }}
			>
				<View style={styles.filterBack}>
					<Text style={styles.text}>{name ? name : 'test'}</Text>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	);
};

const Home = ({ navigation }) => {
	console.log(navigation);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.halfScreen}>
				<SectionRedirect
					navigation={navigation}
					name={'Les dernières informations'}
					component={'InfoComp'}
					picSource="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
				/>
				<SectionRedirect
					navigation={navigation}
					name={'Les gestes simples'}
					component={'Indication'}
					picSource="https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
				/>
			</View>
			<View style={styles.halfScreen}>
				<SectionRedirect
					navigation={navigation}
					name={'Le virus dans le monde'}
					component={'Stats'}
					picSource="https://images.unsplash.com/photo-1584291527905-f930791fb1ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
					onPress={() => navigation.navigate('InfoComp')}
				/>
			</View>
		</SafeAreaView>
	);
};

const HomeScreen = ({ route, navigation }) => {
	return (
		<Stack.Navigator initialRouteName="Home" headerMode={'none'} gestureEnabled>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="InfoComp" component={InfoComp} initialParams={{ name: 'Les dernières informations' }} />
			<Stack.Screen name="Stats" component={StatsCov} initialParams={{ name: 'Statistiques' }} />
			<Stack.Screen name="Indication" component={Indication} initialParams={{ name: 'Les gestes qui sauvent' }} />
		</Stack.Navigator>
	);
};
const pageHeight = Layout.window.height - (50 + 24);
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.lightGrey,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 0,
		height: pageHeight,
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
		width: Layout.window.width / 2,
		height: pageHeight / 2,
		flex: 1,
	},
	sectionContainer_large: {
		width: Layout.window.width,
		height: pageHeight / 2,
		flex: 1,
	},
});

export default HomeScreen;
