import * as React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity,SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

const Header = ({ navigation, route }) => {
	return (
		<SafeAreaView style={styles.header}>
			<TouchableOpacity style={styles.button} title="<" onPress={() => navigation.goBack()}>
				<Ionicons
					name={'ios-arrow-round-back'}
					size={50}
					style={{ marginBottom: -3 }}
					color={Colors.lightBlue}
				/>
			</TouchableOpacity>
			<Text style={styles.text}>A propos</Text>
		</SafeAreaView>
	);
};
export const headerHeight = 60;
const styles = StyleSheet.create({
	text: {
		fontSize: 16,
		marginTop: 1,
		color: Colors.lightBlue,
	},
	header: {
		position: 'absolute',
		marginTop: 0,
		flex: 1,
		flexDirection: 'row',
		height: headerHeight,
		width: Layout.window.width,
		top: 0,
		zIndex: 100,
		backgroundColor: Colors.backgroundTint,
		alignItems: 'center',
	},
	button: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: headerHeight,
		height: headerHeight,
	},
});

export default Header;
