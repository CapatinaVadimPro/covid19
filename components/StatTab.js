import React, { useState, useEffect, createRef } from 'react';
import { View, Text, Platform, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import Layout from '../constants/Layout';
import { headerHeight } from './Header';
import Colors from '../constants/Colors';
import StatDetail from '../components/StatDetail';

const countryJSON = require('../constants/Countries.json');
const countryTabEN = Object.keys(countryJSON);
const countryTabFR = Object.values(countryJSON);
//onPress={() => scroll.scrollTo({ x: 0, y: 0, animated: true })}
const DataRow = ({ i }) => {
	return (
		<View style={styles.row}>
			<View style={styles.row_case}>
				<Text style={[styles.row_text, { color: Colors.flat_anthracite, fontFamily: 'montserrat-bold' }]}>
					{countryTabEN.indexOf(i.country) !== -1 ? countryTabFR[countryTabEN.indexOf(i.country)] : i.country}
				</Text>
			</View>
			<View style={styles.row_case}>
				<Text style={[styles.row_nb, { color: Colors.coralPink }]}>{i.totalCases}</Text>
			</View>
			<View style={styles.row_case}>
				<Text style={[styles.row_nb, { color: Colors.flat_orange }]}>{i.newCases}</Text>
			</View>
			<View style={styles.row_case}>
				<Text style={[styles.row_nb, { color: Colors.flat_red }]}>{i.newDeaths}</Text>
			</View>
			<View style={styles.row_case}>
				<Text style={[styles.row_nb, { color: Colors.flat_turquoise }]}>{i.totalRecovered}</Text>
			</View>
		</View>
	);
};

const DataTab = ({ countries_info, scroll }) => {
	const Array = countries_info.map(i => <DataRow key={i.id} i={i} scroll={scroll} />);
	return Array;
};

const StatTab = ({ countries_info }) => {
	const [scroll, setScroll] = useState();
	return (
		<ScrollView style={styles.body} ref={c => setScroll(c)}>
			<StatDetail countries_info={countries_info} />
			<View style={styles.detailTab}>
				<View style={styles.headTab}>
					<View style={styles.headTab_case}>
						<Text style={styles.headTab_text}>Pays</Text>
					</View>
					<View style={styles.headTab_case}>
						<Text style={styles.headTab_text}>Nb cas</Text>
					</View>
					<View style={styles.headTab_case}>
						<Text style={styles.headTab_text}>Nvx cas</Text>
					</View>
					<View style={styles.headTab_case}>
						<Text style={styles.headTab_text}>Nb morts</Text>
					</View>
					<View style={styles.headTab_case}>
						<Text style={styles.headTab_text}>Soignés</Text>
					</View>
				</View>
				<ScrollView nestedScrollEnabled>
					<DataTab countries_info={countries_info} scroll={scroll} />
				</ScrollView>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		marginTop: 1,
		color: Colors.lightBlue,
	},

	body: {
		marginTop: headerHeight,
	},

	detailTab: { flex: 1, width: Layout.window.width, height: Layout.window.height - (headerHeight + 25) },
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
		height: 100,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderLeftWidth: 0,
	},
	row_text: { color: '#000', fontSize: 10 },
	row_nb: { color: '#000', fontSize: 20 },
});

export default StatTab;
