import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native';
import axios from 'axios';
import { FirstADR } from 'react-native-dotenv';
import { Linking } from 'expo';
import moment from 'moment';
import localization from 'moment/locale/fr';

import Colors from '../../../constants/Colors';

import Header, { headerHeight } from '../../../components/Header';
import Loader from '../../../components/Loader';

const ActuRow = ({ actu }) => {
	var date = moment();
	date.locale('fr', localization);
	const today = date.format('L');
	const [nblines, setNblines] = useState(3);
	const [seen, hasBeenSeen] = useState(today === actu.date ? false : true);
	const handlePress = () => {
		nblines === 3 ? setNblines(100) : setNblines(3);
		seen ? null : hasBeenSeen(true);
	};
	const linkRedirect = () => {
		Linking.canOpenURL(actu.link).then(supported => {
			if (supported) {
				Linking.openURL(actu.link);
			} else {
				console.log("Don't know how to open URI: " + actu.link);
			}
		});
	};

	return (
		<View style={styles.actu_cont}>
			<Text style={[styles.date, { fontFamily: seen ? 'montserrat-semiBold' : 'montserrat-bold' }]}>
				{actu.date}
			</Text>
			<Text style={[styles.date, { fontFamily: seen ? 'montserrat-semiBold' : 'montserrat-bold', fontSize: 10 }]}>
				{actu.time}
			</Text>
			<Text style={[styles.title, { fontFamily: seen ? 'montserrat-semiBold' : 'montserrat-bold' }]}>
				{actu.title.toUpperCase()}
			</Text>
			<Text
				style={[styles.desc, { fontFamily: seen ? 'montserrat-light' : 'montserrat-semiBold' }]}
				numberOfLines={nblines}
				onPress={() => handlePress()}
			>
				{actu.description}
			</Text>
			{nblines === 3 && actu.description ? (
				<Text style={[styles.learn, { fontFamily: seen ? 'montserrat-lightItalic' : 'montserrat-bold' }]}>
					Clique pour en savoir plus
				</Text>
			) : null}
			<Text style={styles.src} onPress={() => linkRedirect()}>
				Lien vers l'article
			</Text>
		</View>
	);
};

const ActuArray = ({ actuTab }) => {
	console.log(actuTab);
	const array = actuTab.map(actu => <ActuRow key={actu.id} actu={actu} />);
	console.log(array);

	return array;
};

const InfoComp = ({ navigation, route }) => {
	const [actu, setActu] = useState({ data: [], status: 0 });

	async function getActu() {
		try {
			const res = await axios.get(`${FirstADR}/all-actu`, {
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				//crossDomain: true
			});
			res.status === 200
				? setActu({ data: res.data, status: res.status })
				: console.log('ERROR FETCHING DATA in getCountryData()');
		} catch (err) {
			console.log('data acquisition failed', err);
		}
	}
	useEffect(() => {
		getActu();
	}, []);
	return (
		<View style={styles.container}>
			{actu.status === 200 ? console.log(actu) : null}
			<Header navigation={navigation} route={route} />
			{actu.status === 200 ? (
				<View style={styles.body}>
					<ScrollView>
						<ActuArray actuTab={actu.data} />
					</ScrollView>
				</View>
			) : (
				<Loader />
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	body: {
		flex: 1,
		backgroundColor: Colors.backgroundTint,
		marginTop: headerHeight,
	},
	date: {
		fontSize: 12,
		marginTop: 5,
		color: Colors.lightBlue,
		textAlign: 'right',
		marginRight: 15,
	},
	title: {
		fontSize: 16,
		marginTop: 5,
		color: Colors.lightBlue,
	},
	desc: {
		fontSize: 12,
		marginTop: 5,
		color: '#1b1b1b',
		paddingLeft: 5,
	},
	learn: {
		fontSize: 10,
		color: Colors.tabIconDefault,
		textDecorationLine: 'underline',
		textAlign: 'right',
		marginTop: 5,
		marginRight: 10,
		marginBottom: 15,
	},
	actu_cont: { padding: 10, borderBottomWidth: 2, borderBottomColor: Colors.lightGrey },
	src: {
		fontSize: 10,
		marginVertical: 5,
		color: Colors.lightBlue,
	},
});
export default InfoComp;
