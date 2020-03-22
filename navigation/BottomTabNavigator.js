import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { StyleSheet, TouchableOpacity } from 'react-native';

/*Components */
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

/*Constants */
import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator();

const INITIAL_ROUTE_NAME = 'homescreen';
export default function BottomTabNavigator({ navigation, route }) {
	// Set the header title on the parent stack navigator depending on the
	// currently active tab. Learn more in the documentation:
	// https://reactnavigation.org/docs/en/screen-options-resolution.html
	console.log(navigation);

	//navigation.setOptions({ headerTitle: getHeaderTitle(route), HeaderBackground: '#191b33' });

	return (
		<BottomTab.Navigator
			initialRouteName={INITIAL_ROUTE_NAME}
			screenOptions={{ gestureEnabled: false }}
			options={{
				title: 'root',
			}}
			tabBarOptions={{
				style: { height: 50 },
			}}
		>
			<BottomTab.Screen
				name="search"
				component={Search}
				options={{
					title: 'Search',
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-search" />,
				}}
			/>
			<BottomTab.Screen
				name="homescreen"
				component={HomeScreen}
				options={{
					title: 'Général',
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-globe" />,
				}}
			/>
			<BottomTab.Screen
				name="alert"
				component={AlertComp}
				options={{
					title: 'Alerte',
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-flash" />,
				}}
				initialParams={{ alert: 'no alert' }}
			/>
		</BottomTab.Navigator>
	);
}

/* on le garde si on veut mettre un header sur les vues
function getHeaderTitle(route) {
	const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

	switch (routeName) {
		case 'party':
			return 'Les soirées';
		case 'map':
			return 'La carte';
	}
}
*/
