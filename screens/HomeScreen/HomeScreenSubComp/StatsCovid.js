import React, { useState, useEffect } from 'react';
import { View, Text, Platform, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import Colors from '../../../constants/Colors';
import axios from 'axios';
import { FirstADR } from 'react-native-dotenv';

import Header, { headerHeight } from '../../../components/Header';
import Layout from '../../../constants/Layout';
import Loader from '../../../components/Loader';
import StatTab from '../../../components/StatTab';

const StatsCov = ({ navigation, route }) => {
	const [world_info, setWorldData] = useState({ data: [], status: 0 });
	const [countries_info, setCountryData] = useState({ data: [], status: 0 });

	async function getWorldData() {
		try {
			const res = await axios.get(`${FirstADR}/global-info`, {
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				//crossDomain: true
			});
			res.status === 200
				? setWorldData({ data: res.data, status: res.status })
				: console.log('ERROR FETCHING DATA in getCountryData()');
		} catch (err) {
			console.log('data acquisition failed', err);
		}
	}

	async function getCountryData() {
		try {
			const res = await axios.get(`${FirstADR}/all-info`, {
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				//crossDomain: true
			});
			res.status === 200
				? setCountryData({ data: res.data, status: res.status })
				: console.log('ERROR FETCHING DATA in getCountryData()');
		} catch (err) {
			console.log('data acquisition failed', err);
		}
	}

	useEffect(() => {
		getWorldData();
		getCountryData();
	}, []);
	return (
		<SafeAreaView style={styles.container}>
			<Header navigation={navigation} route={route} />
			{world_info.status === 200 && countries_info.status === 200 ? (
				<StatTab
					world_info={world_info.data}
					countries_info={countries_info.data}
					route={route}
					navigation={navigation}
					headerHeight={headerHeight}
				/>
			) : (
				<Loader />
			)}
		</SafeAreaView>
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
	world: {
		flex: 1,
		alignItems: 'center',
		marginBottom: 20,
	},

	date: {
		fontSize: 30,
		color: Colors.lightBlue,
		marginVertical: 5,
		fontFamily: 'montserrat-thin',
		textAlign: 'center',
	},
	title: { fontSize: 30, fontFamily: 'montserrat-light', letterSpacing: -2, color: Colors.lightBlue },
	data: { fontSize: 50, fontFamily: 'montserrat-lightItalic' },
});

export default StatsCov;
