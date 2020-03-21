import React, { useState, useEffect } from 'react';
import { View, Text, Platform, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import moment from 'moment';
import Colors from '../../../constants/Colors';
import axios from 'axios';
import { FirstADR } from 'react-native-dotenv';

import Header, { headerHeight } from '../../../components/Header';
import Layout from '../../../constants/Layout';
import Loader from '../../../components/Loader';
import StatTab from '../../../components/StatTab';

const StatsCov = ({ navigation, route }) => {
	var date = moment();
	date.locale('fr');
	const today = date.format('LLLL');

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
					today={today}
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
	detailTab: { flex: 1, width: Layout.window.width, height: Layout.window.height - 80 - headerHeight },
	headTab: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: Colors.flat_anthracite,
		height: 80,
		width: Layout.window.width,
		borderBottomWidth: 0,
		borderTopWidth: 0,
		borderColor: Colors.flat_anthracite,
		opacity: 0.99,
	},
	headTab_case: {
		width: Layout.window.width / 5,
		height: 80,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderRightColor: Colors.lightBlue,
		borderLeftColor: Colors.lightBlue,
	},
	headTab_text: { color: Colors.lightBlue, fontSize: 16, textAlign: 'center', fontFamily: 'montserrat-light' },
	row: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: -2,
		borderWidth: 1,
		borderBottomWidth: 0,
		borderColor: Colors.lightBlue,
	},
	row_case: {
		width: Layout.window.width / 5,
		height: 100,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: Colors.lightBlue,
		borderLeftWidth: 0,
	},
	row_text: { color: '#000', fontSize: 20 },
});

export default StatsCov;
