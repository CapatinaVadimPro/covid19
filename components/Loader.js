import * as React from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

const Loader = () => {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Image source={require('../assets/images/loader.gif')} style={{ width: 150, height: 150 }} />
		</View>
	);
};
export default Loader;
