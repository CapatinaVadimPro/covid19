import * as React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

const Loader = () => {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 200,
			}}
		>
			<AntDesign
				name={'loading1'}
				size={100}
				style={{ backgroundColor: Colors.flat_orange }}
				color={Colors.flat_anthracite}
			/>
		</View>
	);
};
export default Loader;
