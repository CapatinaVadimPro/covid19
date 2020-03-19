import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';

import Colors from '../../constants/Colors';

const Search = ({ route, navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>{route.name + ' page'}</Text>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.lightGrey,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 30,
		marginTop: 1,
		color: Colors.lightBlue,
	},
});

export default Search;
