import React, { useEffect, useRef, useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, SafeAreaView } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from './constants/Colors';
import DrawerNavigator from './navigation/DrawerNavigator';
import useLinking from './navigation/useLinking';

const Stack = createStackNavigator();

export default function App(props) {
	const [isLoadingComplete, setLoadingComplete] = useState(false);
	const [initialNavigationState, setInitialNavigationState] = useState();
	const containerRef = useRef();
	const { getInitialState } = useLinking(containerRef);

	// Load any resources or data that we need prior to rendering the app
	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHide();
				// Load our initial navigation state
				setInitialNavigationState(await getInitialState());
				// Load fonts
				await Font.loadAsync({
					...Ionicons.font,
					'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
					montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
					'montserrat-light': require('./assets/fonts/Montserrat-Light.ttf'),
					'montserrat-semiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
					'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
					'montserrat-thin': require('./assets/fonts/Montserrat-Thin.ttf'),
					'montserrat-lightItalic': require('./assets/fonts/Montserrat-LightItalic.ttf'),
					'montserrat-light': require('./assets/fonts/Montserrat-Light.ttf'),
					'montserrat-italic': require('./assets/fonts/Montserrat-Italic.ttf'),
				});
			} catch (e) {
				// We might want to provide this error information to an error reporting service
				console.warn(e);
			} finally {
				setLoadingComplete(true);
				SplashScreen.hide();
			}
		}
		loadResourcesAndDataAsync();
	}, []);

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return null;
	} else {
		return (
			<>
				{Platform.OS === 'ios' ? (
					<SafeAreaView style={styles.container}>
						<StatusBar barStyle="default" />
						<NavigationContainer
							style={styles.container}
							ref={containerRef}
							initialState={initialNavigationState}
						>
							<Stack.Navigator
								screenOptions={{
									headerShown: false,
								}}
								style={styles.navigator}
							>
								<Stack.Screen name="Root" component={DrawerNavigator} />
							</Stack.Navigator>
						</NavigationContainer>
					</SafeAreaView>
				) : (
					<View style={styles.container}>
						<NavigationContainer
							style={styles.container}
							ref={containerRef}
							initialState={initialNavigationState}
						>
							<Stack.Navigator
								screenOptions={{
									headerShown: false,
								}}
								style={styles.navigator}
							>
								<Stack.Screen name="Root" component={DrawerNavigator} />
							</Stack.Navigator>
						</NavigationContainer>
					</View>
				)}
			</>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.backgroundTint,
	},
});
