import React, { useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Linking } from 'expo';

import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

const RenderHeader = ({ scrollOffset, info }) => {
	const expandedHeaderHeight = 240;
	const collapsedHeaderHeight = 64;
	const titleHeight = 44;
	const scrollSpan = expandedHeaderHeight - collapsedHeaderHeight;

	return (
		<Animated.View
			style={{
				height: expandedHeaderHeight,
				zIndex: 100,
				overflow: 'hidden',
				transform: [
					{
						translateY: Animated.subtract(
							scrollOffset,
							scrollOffset.interpolate({
								inputRange: [0, scrollSpan],
								outputRange: [0, scrollSpan],
								extrapolate: 'clamp',
							})
						),
					},
				],
			}}
		>
			<Animated.Image
				style={{
					width: '100%',
					height: '100%',
					transform: [
						{
							translateY: scrollOffset.interpolate({
								inputRange: [0, scrollSpan],
								outputRange: [0, scrollSpan / 2],
								extrapolate: 'clamp',
							}),
						},
					],
				}}
				source={{
					uri: info.img,
				}}
			/>
			<Animated.View
				style={[
					StyleSheet.absoluteFill,
					{
						backgroundColor: 'black',
						opacity: scrollOffset.interpolate({
							inputRange: [scrollSpan / 2, scrollSpan],
							outputRange: [0, 0.85],
							extrapolate: 'clamp',
						}),
					},
				]}
			/>
			<Animated.Text
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					bottom: 16,
					fontSize: 16,
					fontWeight: 'bold',
					textAlign: 'center',
					color: 'white',
					transform: [
						{
							translateY: scrollOffset.interpolate({
								inputRange: [scrollSpan, scrollSpan + titleHeight],
								outputRange: [titleHeight, 0],
								extrapolate: 'clamp',
							}),
						},
					],
				}}
			>
				{info.title}
			</Animated.Text>
		</Animated.View>
	);
};

const RenderContent = ({ info }) => {
	const linkRedirect = link => {
		Linking.canOpenURL(link).then(supported => {
			if (supported) {
				Linking.openURL(link);
			} else {
				console.log("Don't know how to open URI: " + link);
			}
		});
	};
	return (
		<View style={{ padding: 20 }}>
			<Text style={[styles.title, { marginBottom: info.sub_title ? 5 : 30 }]}>{info.title}</Text>
			{info.sub_title ? <Text style={styles.sub_title}>{info.sub_title}</Text> : null}
			<Text style={styles.text}>{info.text1}</Text>
			{info.text2 ? <Text style={styles.text}>{info.text2}</Text> : null}
			<View style={styles.src_cont}>
				<Text style={{ marginBottom: 5, color: Colors.tabIconDefault, fontFamily: 'montserrat-italic' }}>
					Sources :
				</Text>
				<Text style={styles.src} onPress={() => linkRedirect(info.src1)}>
					{info.src1_name}
				</Text>
				{info.src2 ? (
					<Text style={styles.src} onPress={() => linkRedirect(info.src2)}>
						{info.src2_name}
					</Text>
				) : null}
			</View>
		</View>
	);
};

const ParrallaxContent = ({ info }) => {
	const [scrollOffset, setScrollOffset] = useState(new Animated.Value(0));
	const scrollEvent = Animated.event([{ nativeEvent: { contentOffset: { y: scrollOffset } } }], {
		useNativeDriver: true,
	});
	return (
		<Animated.ScrollView
			style={{ flex: 1, backgroundColor: 'white', width: Layout.window.width }}
			onScroll={scrollEvent}
			scrollEventThrottle={1}
		>
			<RenderHeader scrollOffset={scrollOffset} info={info} />
			<RenderContent info={info} />
		</Animated.ScrollView>
	);
};
/*
	async componentDidMount() {
		const res = await fetch('https://loripsum.net/api/plaintext');
		this.setState({ text: await res.text() });
	}*/

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontFamily: 'montserrat-semiBold',
		color: Colors.lightBlue,
	},
	sub_title: { fontSize: 20, fontFamily: 'montserrat', marginBottom: 20, color: Colors.flat_red },
	text: {
		fontSize: 18,
		color: Colors.lightBlue,
		marginBottom: 8,
		fontFamily: 'montserrat-light',
	},
	src_cont: { flex: 1, marginTop: 15 },
	src: {
		marginBottom: 5,
		fontFamily: 'montserrat-lightItalic',
		fontSize: 12,
		color: Colors.tabIconDefault,
	},
});

export default ParrallaxContent;
