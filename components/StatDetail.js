import React, { useState, useEffect } from 'react';
import { View, Text, Platform, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import moment from 'moment';
import localization from 'moment/locale/fr';

import Layout from '../constants/Layout';
import { headerHeight } from './Header';
import Colors from '../constants/Colors';

const countryJSON = require('../constants/Countries.json');
const countryTabEN = Object.keys(countryJSON);
const countryTabFR = Object.values(countryJSON);

const errorMSG = 'Aucun résultat';

const CountryInfoDetail = ({ country }) => {
	var date = moment();
	date.locale('fr', localization);
	const today = date.format('L');
	const hour = date.format('HH:MM');

	return (
		<View style={styles.large_container}>
			<Text style={[styles.title, styles.top_title]}>Aujourd'hui le {today}</Text>
			<View style={styles.detail_cont}>
				<View style={styles.half_cont}>
					<Text style={styles.title}>Cas actifs</Text>
					<Text style={[styles.data, { color: Colors.coralPink }]}>{country.activeCases}</Text>
					<Text style={styles.title}>Personnes soignées</Text>
					<Text style={[styles.data, { color: Colors.flat_green }]}>{country.totalRecovered}</Text>
				</View>
				<View style={[styles.half_cont, { borderLeftWidth: 1, borderLeftColor: Colors.flat_anthracite }]}>
					<Text style={styles.title}>Nouveaux cas</Text>
					<Text style={[styles.data, { color: Colors.flat_orange }]}>
						{country.newCases === '' ? 'Aucun' : country.newCases}
					</Text>
					<Text style={styles.title}>Nombre de morts</Text>
					<Text style={[styles.data, { color: Colors.flat_red }]}>
						{country.newDeaths === '' ? '0' : country.newDeaths}
					</Text>
				</View>
			</View>
			<View style={styles.large_container}>
				<Text
					style={[
						styles.title,
						styles.top_title,
						{ textDecorationLine: 'underline', fontSize: 35, marginTop: 15, marginBottom: 2 },
					]}
				>
					Bilan
				</Text>
				<Text style={styles.hour}>Dernière mise à jour à : {hour}</Text>
				<Text style={styles.title}>Cas de Coronavirus</Text>
				<Text style={styles.sub_title}>(Soignés + Infectés + Décédés)</Text>
				<Text style={[styles.data, { color: Colors.coralPink }]}>{country.totalCases}</Text>
				<Text style={styles.title}>État serieux </Text>
				<Text style={[styles.data, { color: Colors.flat_orange }]}>{country.serious}</Text>
				<Text style={styles.title}>Nombre de morts</Text>
				<Text style={[styles.data, { color: Colors.flat_red }]}>{country.totalDeaths}</Text>
			</View>
		</View>
	);
};
const StatDetail = props => {
	const [countryFocus, setCountryFocus] = useState('France');
	const [typingText, setTypingText] = useState(countryFocus);
	const [displayScreen, setDisplay] = useState(true);
	const worldInfo = props.countries_info.find(data => data.country === 'Total:');
	const getFocusedCountry = props.countries_info.find(data => data.country === countryFocus);

	function handleSubmit(input) {
		const indexFR = countryTabFR.indexOf(input);

		const country_nameEN = indexFR === -1 ? 'error' : countryTabEN[indexFR];

		setCountryFocus(country_nameEN);
		return 1;
	}

	return (
		<View style={styles.container}>
			<View style={styles.buttonTab}>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: displayScreen ? Colors.flat_anthracite : 'white' }]}
					onPress={() => {
						displayScreen ? null : setDisplay(true);
					}}
				>
					<Text style={[styles.text, { color: displayScreen ? 'white' : Colors.flat_anthracite }]}>
						Monde
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: !displayScreen ? Colors.flat_anthracite : 'white' }]}
					onPress={() => {
						displayScreen ? setDisplay(false) : null;
					}}
				>
					<Text style={[styles.text, { color: !displayScreen ? 'white' : Colors.flat_anthracite }]}>
						{typingText === '' ? countryTabFR[countryTabEN.indexOf(countryFocus)] : typingText}
					</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.large_container}>
				{displayScreen ? (
					<CountryInfoDetail country={worldInfo} />
				) : (
					<View style={styles.large_container}>
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
						{/*console.log('get focused country')}
					{console.log(countryFocus)}
					{console.log('get focused country')}
					{console.log(getFocusedCountry)*/}
						{getFocusedCountry === undefined ? (
							<Text style={styles.text}>{errorMSG}</Text>
						) : (
							<CountryInfoDetail country={getFocusedCountry} />
						)}
					</View>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.backgroundTint,
		marginBottom: 5,
	},
	buttonTab: {
		width: Layout.window.width,
		height: 45,
		marginVertical: 25,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	button: {
		width: Layout.window.width / 2,
		height: 45,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderTopRightRadius: 15,
		borderTopLeftRadius: 15,
		borderRadius: 15,
		marginHorizontal: 5,
		borderWidth: 2,
		borderColor: Colors.flat_anthracite,
	},

	text: {
		fontSize: 20,
		color: Colors.flat_anthracite,
	},
	world_cont: { height: 80, backgroundColor: 'white' },
	country_cont: { height: 80, backgroundColor: 'black' },
	detail_cont: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 5,
	},
	large_container: { flex: 1, alignItems: 'center' },
	half_cont: { width: Layout.window.width / 2, flex: 1 },
	hour: {
		fontSize: 15,
		color: Colors.lightBlue,
		marginBottom: 10,
		fontFamily: 'montserrat-thin',
		textAlign: 'center',
	},
	top_title: { marginBottom: 15, fontSize: 25, fontFamily: 'montserrat' },
	title: {
		fontSize: 25,
		fontFamily: 'montserrat-light',
		letterSpacing: -1,
		color: Colors.lightBlue,
		textAlign: 'center',
	},
	sub_title: {
		color: Colors.lightBlue,
		textAlign: 'center',
		fontFamily: 'montserrat-thin',
		fontSize: 20,
	},
	data: { fontSize: 40, fontFamily: 'montserrat-lightItalic', textAlign: 'center' },

	input_field: {
		height: 40,
		width: Layout.window.width / 1.25,
		borderWidth: 2,
		padding: 10,
		borderRadius: 8,
		marginVertical: 10,
		borderColor: Colors.flat_anthracite,
	},
});

export default StatDetail;
