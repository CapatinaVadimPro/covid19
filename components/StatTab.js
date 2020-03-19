import React, { useState, useEffect } from 'react';
import { View, Text, Platform, StyleSheet, ScrollView } from 'react-native';

import Layout from '../constants/Layout';
import { headerHeight } from './Header';
import Colors from '../constants/Colors';

const DataRow = ({ i }) => {
	return (
		<View style={styles.row}>
			<View style={styles.row_case}>
				<Text style={[styles.row_text, { color: Colors.flat_anthracite }]}>{i.country}</Text>
			</View>
			<View style={styles.row_case}>
				<Text style={[styles.row_text, { color: Colors.coralPink }]}>{i.totalCases}</Text>
			</View>
			<View style={styles.row_case}>
				<Text style={[styles.row_text, { color: Colors.flat_orange }]}>{i.newCases}</Text>
			</View>
			<View style={styles.row_case}>
				<Text style={[styles.row_text, { color: Colors.flat_red }]}>{i.newDeaths}</Text>
			</View>
			<View style={styles.row_case}>
				<Text style={[styles.row_text, { color: Colors.flat_turquoise }]}>{i.totalRecovered}</Text>
			</View>
		</View>
	);
};

const DataTab = ({ countries_info }) => {
	const Array = countries_info.map(i => <DataRow key={i.id} i={i} />);
	return Array;
};

const StatTab = ({ world_info, countries_info, navigation, route, today }) => {
	return (
		<ScrollView style={styles.body}>
			<View style={styles.world}>
				<Text style={styles.date}>{today.toLocaleUpperCase()}</Text>
				<Text style={styles.title}>Cas de Coronavirus</Text>
				<Text style={[styles.data, { color: Colors.coralPink }]}>{world_info.totalCases}</Text>
				<Text style={styles.title}>Nouveaux cas aujourd'hui </Text>
				<Text style={[styles.data, { color: Colors.flat_orange }]}>{world_info.newCases}</Text>
				<Text style={styles.title}>Nombre de morts</Text>
				<Text style={[styles.data, { color: Colors.flat_red }]}>{world_info.totalDeaths}</Text>
				<Text style={styles.title}>Personnes soignées</Text>
				<Text style={[styles.data, { color: Colors.flat_green }]}>{world_info.totalRecovered}</Text>
			</View>
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
					<DataTab countries_info={countries_info} />
				</ScrollView>
			</View>
		</ScrollView>
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

export default StatTab;
