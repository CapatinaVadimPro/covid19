import * as React from 'react';
import { View, Text,Platform,StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

import Header, { headerHeight } from '../../../components/Header';

const StatsCov = ({ navigation, route }) => {
	return (
		<View style={styles.container}>
			<Header navigation={navigation} route={route} />
			<View style={styles.body}>
				<Text>Stats !</Text>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.lightGrey,
	},
	text: {
		fontSize: 30,
		marginTop: 1,
		color: Colors.lightBlue,
	},

	body: {
		marginTop: Platform.OS === 'android' ? 25 + headerHeight : headerHeight,
	},
});

export default StatsCov;
