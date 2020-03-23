import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Colors from '../../../constants/Colors';

import Header, { headerHeight } from '../../../components/Header';
import ParrallaxContent from '../../../components/parralaxContent';
const indicationJSON = require('../../../constants/Info.json');

const Indication = ({ navigation, route }) => {
	return (
		<View style={styles.container}>
			<Header navigation={navigation} route={route} />
			<View style={styles.body}>
				<ScrollView horizontal pagingEnabled>
					<ParrallaxContent info={indicationJSON.COVID_19} />
					<ParrallaxContent info={indicationJSON.STAY_HOME} />
					<ParrallaxContent info={indicationJSON.HAND_WASH_NO_CONTACT} />
					<ParrallaxContent info={indicationJSON.NOSE_PAPER} />
					<ParrallaxContent info={indicationJSON.WEAR_MASK} />
				</ScrollView>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.backgroundTint,
	},
	text: {
		fontSize: 30,
		marginTop: 1,
		color: Colors.lightBlue,
	},

	body: {
		marginTop: headerHeight,
	},
});

export default Indication;
