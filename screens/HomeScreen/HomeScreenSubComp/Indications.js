import * as React from 'react';
import { View, Text, Platform, StyleSheet, ScrollView } from 'react-native';

import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';

import Header, { headerHeight } from '../../../components/Header';
import ParrallaxContent from '../../../components/parralaxContent';

const Indication = ({ navigation, route }) => {
	return (
		<View style={styles.container}>
			<Header navigation={navigation} route={route} />
			<View style={styles.body}>
				<ScrollView horizontal pagingEnabled>
					<ParrallaxContent
						picture={
							'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80'
						}
						titre={"Le Coronavirus"}
					/>
					<ParrallaxContent
						picture={
							'https://images.unsplash.com/photo-1583947582886-f40ec95dd752?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
						}
						titre={'Se laver les mains'}
					/>

					<ParrallaxContent
						picture={
							'https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
						}
						titre={"Évitez les contacts"}
					/>
					<ParrallaxContent
						picture={
							'https://images.unsplash.com/photo-1583947215172-b3880c534af4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=750&q=80'
						}
						titre={'Utilisez des mouchoirs en papier'}
					/>
					<ParrallaxContent
						picture={
							'https://images.unsplash.com/photo-1512479064533-47d51d07bb93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
						}
						titre={"Portez un masque"}
					/>
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
