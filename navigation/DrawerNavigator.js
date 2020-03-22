import * as React from 'react';
import { Button, View, Text, Animated } from 'react-native';
import { createDrawerNavigator, DrawerView, DrawerContent, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import { HeaderTitle } from '@react-navigation/stack';
/*Components */
import TabBarIcon from '../components/TabBarIcon';
import AboutBugs from '../components/AboutBugs';
import Settings from '../components/Settings';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ route }) => {
	return (
		<Drawer.Navigator
			drawerType="front"
			drawerPosition={'left'}
			edgeWidth={15}
			overlayColor={'#1b1b1bf0'}
			drawerStyle={{
				backgroundColor: '#fff',
				width: 250,
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
			<Drawer.Screen name="about" component={AboutBugs} options={{ drawerLabel: 'À propos' }} />
			<Drawer.Screen name="settings" component={HomeScreen} options={{ drawerLabel: 'Paramètres' }} />
		</Drawer.Navigator>
	);
};
export default DrawerNavigator;
