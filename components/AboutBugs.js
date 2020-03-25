import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import { Linking } from 'expo';
import Layout from '../constants/Layout';

const AboutBugs = () => {
	const linkRedirect = () => {
		Linking.canOpenURL('https://bugsminers.com').then(supported => {
			if (supported) {
				Linking.openURL('https://bugsminers.com');
			} else {
				console.log("Don't know how to open URI: 'https://bugsminers.com' ");
			}
		});
	};
	return (
		<DrawerItem
			label=""
			style={{ marginTop: Layout.window.height / 1.7 }}
			icon={() => (
				<View style={styles.profile_pic_container} onPress={() => linkRedirect()}>
					<Image style={styles.profile_pic} source={require('../assets/images/icon_bugs.png')} />
				</View>
			)}
		/>
	);
};
const picture_container = 150;
const styles = StyleSheet.create({
	container: { flex: 1, flexDirection: 'row', width: 250, marginLeft: 10 },
	profile_pic_container: {
		borderRadius: 50,
		overflow: 'hidden',
		marginRight: -80,
	},
	profile_pic: {
		width: picture_container,
		height: picture_container,
		resizeMode: 'cover',
	},
	text_container: { flex: 1 },
	text: { color: '#fff', marginVertical: 3 },
	name: { fontSize: 20, fontWeight: '500' },
	rank: { fontSize: 15 },
	follower: { fontSize: 15, width: 200 },
});

export default AboutBugs;
