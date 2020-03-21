import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import axios from 'axios';

import { FirstADR } from 'react-native-dotenv';

import Colors from '../../../constants/Colors';

import Header, { headerHeight } from '../../../components/Header';

const InfoComp = ({ navigation, route }) => {
	const [info, setData] = useState([]);

	const getTotalData = async () => {
		const res = await axios.get(`${FirstADR}/global-info`, {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			crossDomain: true,
		});
		setData(res.data);
	};

	useEffect(() => {
		getTotalData();
	}, []);

	return (
		<View style={styles.container}>
			<Header navigation={navigation} route={route} />
			<View style={styles.body}>
				<Text>{info.totalCases}</Text>
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
export default InfoComp;
