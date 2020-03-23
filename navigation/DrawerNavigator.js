import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

/*Components */
import AboutBugs from '../components/AboutBugs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

import Colors from '../constants/Colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ route, navigation }) => {
	return (
		<Drawer.Navigator
			drawerType="front"
			drawerPosition={'left'}
			edgeWidth={15}
			overlayColor={'#1b1b1bf0'}
			drawerStyle={{
				backgroundColor: '#fff',
				width: 250,
				flex: 1,
			}}
			drawerContentOptions={{
				activeTintColor: 'white',
				activeBackgroundColor: Colors.flat_anthracite,
				itemStyle: { alignItems: 'center' },
				inactiveTintColor: Colors.flat_anthracite,
				inactiveBackgroundColor: '#ffffff00',
			}}
			initialRouteName="general"
		>
			<Drawer.Screen name="general" component={HomeScreen} options={{ drawerLabel: 'Général' }} />
			<Drawer.Screen
				name="about"
				component={HomeScreen}
				options={{ drawerLabel: () => <AboutBugs navigation={navigation} route={route} /> }}
			/>
		</Drawer.Navigator>
	);
};
export default DrawerNavigator;
