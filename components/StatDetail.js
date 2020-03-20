import React, { useState, useEffect } from 'react';
import { View, Text, Platform, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import Layout from '../constants/Layout';
import { headerHeight } from './Header';
import Colors from '../constants/Colors';

const countryJSON = require('../constants/Countries.json');
const countryTabEN = Object.keys(countryJSON);
const countryTabFR = Object.values(countryJSON);

const errorMSG = "Aucun résultat";

const CountryInfoDetail = ({ country }) => {
	console.log(country);

	return (
		<View style={styles.detail_cont}>
			<Text style={styles.title}>Cas de Coronavirus</Text>
			<Text style={[styles.data, { color: Colors.coralPink }]}>{country.totalCases}</Text>
			<Text style={styles.title}>Nouveaux cas aujourd'hui </Text>
			<Text style={[styles.data, { color: Colors.flat_orange }]}>{country.newCases}</Text>
			<Text style={styles.title}>Nombre de morts</Text>
			<Text style={[styles.data, { color: Colors.flat_red }]}>{country.totalDeaths}</Text>
			<Text style={styles.title}>Personnes soignées</Text>
			<Text style={[styles.data, { color: Colors.flat_green }]}>{country.totalRecovered}</Text>
		</View>
	);
};

const StatDetail = props => {
	console.log('statDetail');

	const [countryFocus, setCountryFocus] = useState('France');
	const [typingText, setTypingText] = useState(countryFocus);
	const [displayScreen, setDisplay] = useState(true);

	const worldInfo = props.countries_info.find(data => data.country === 'Total:');
	const getFocusedCountry = props.countries_info.find(data => data.country === countryFocus);

	function handleSubmit(input) {
		const indexFR = countryTabFR.indexOf(input);
		console.log(indexFR);

		const country_nameEN = indexFR === -1 ? 'error' : countryTabEN[indexFR];
		console.log(country_nameEN);

		setCountryFocus(country_nameEN);
		return 1;
	}
	return (
		<View>
			<View style={styles.buttonTab}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						displayScreen ? null : setDisplay(true);
					}}
				>
					<Text style={styles.text}>Monde</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						displayScreen ? setDisplay(false) : null;
					}}
				>
					<Text style={styles.text}>
						{typingText === '' ? countryTabFR[countryTabEN.indexOf(countryFocus)] : typingText}
					</Text>
				</TouchableOpacity>
			</View>
			{displayScreen ? (
				<CountryInfoDetail country={worldInfo} />
			) : (
				<View style={styles.detail_cont}>
					<View style={styles.input_cont}>
						<TextInput
							style={styles.input_field}
							onChangeText={text => setTypingText(text)}
							placeholder={'Chercher un pays'}
							clearButtonMode={'always'}
							enablesReturnKeyAutomatically
							onSubmitEditing={event => {
								const text = event.nativeEvent.text;
								handleSubmit(text);
							}}
						/>
					</View>
					{console.log('get focused country')}
					{console.log(countryFocus)}
					{console.log('get focused country')}
					{console.log(getFocusedCountry)}
					{getFocusedCountry === undefined ? (
						<Text style={styles.text}>{errorMSG}</Text>
					) : (
						<View style={styles.detail_cont}>
							<Text style={styles.title}>Cas de Coronavirus</Text>
							<Text style={[styles.data, { color: Colors.coralPink }]}>
								{getFocusedCountry.totalCases}
							</Text>
							<Text style={styles.title}>Nouveaux cas aujourd'hui </Text>
							<Text style={[styles.data, { color: Colors.flat_orange }]}>
								{getFocusedCountry.newCases}
							</Text>
							<Text style={styles.title}>Nombre de morts</Text>
							<Text style={[styles.data, { color: Colors.flat_red }]}>
								{getFocusedCountry.totalDeaths}
							</Text>
							<Text style={styles.title}>Personnes soignées</Text>
							<Text style={[styles.data, { color: Colors.flat_green }]}>
								{getFocusedCountry.totalRecovered}
							</Text>
						</View>
					)}
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.lightGrey,
	},
	buttonTab: {
		width: Layout.window.width,
		height: 45,

		marginTop: 25,
		backgroundColor: 'pink',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	button: {
		width: Layout.window.width / 2,
		height: 45,
		backgroundColor: 'purple',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderTopRightRadius: 15,
		borderTopLeftRadius: 15,
		marginHorizontal: 5,
	},
	text: {
		fontSize: 20,
		color: '#fff',
	},
	world_cont: { height: 80, backgroundColor: 'white' },
	country_cont: { height: 80, backgroundColor: 'black' },
	detail_cont: {
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
	input_cont: { flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 15 },
	input_field: { height: 40, width: Layout.window.width / 1.25, borderWidth: 2, padding: 10, borderRadius: 10 },
});

export default StatDetail;
