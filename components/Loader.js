import * as React from 'react';
import { View, Text, StyleSheet, Platform, Image,SafeAreaView } from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

const Loader = () => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Image source={require('../assets/images/loader.gif')} style={{ width: 150, height: 150 }} />
		</SafeAreaView>
	);
};
export default Loader;
