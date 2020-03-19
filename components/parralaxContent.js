import React, { useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

import Layout from '../constants/Layout';

const RenderHeader = ({ scrollOffset, picture, titre }) => {
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
					uri: picture,
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
				{titre}
			</Animated.Text>
		</Animated.View>
	);
};

const RenderContent = ({titre}) => {
	return (
		<View style={{ padding: 20 }}>
			<Text style={{ fontSize: 24, fontWeight: '800', marginBottom: 16 }}>{titre}</Text>
			<Text>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam elementum nulla. Suspendisse
				efficitur ante nibh, ac ullamcorper dolor malesuada vitae. Etiam cursus, urna sed eleifend mollis, urna
				nunc commodo orci, imperdiet faucibus sapien quam ac sapien. Maecenas ac orci eros. Ut eget luctus
				mauris. Nunc diam lacus, sollicitudin in sollicitudin id, facilisis a ex. Donec ac bibendum risus.
				Aenean rutrum condimentum enim, in sagittis sem efficitur ut. Pellentesque ante odio, elementum eu
				dictum et, interdum vel diam. Integer ut nibh quam. In nunc libero, molestie bibendum urna nec,
				malesuada fermentum ante. Curabitur pulvinar purus sed placerat dignissim. Proin sed quam ut odio
				consectetur ultrices ut vel augue. Nullam sit amet eros sapien. Ut porta nisl neque, nec rhoncus sem
				viverra id. In accumsan libero at cursus suscipit. Aenean ac libero erat. Etiam suscipit justo ut libero
				blandit laoreet. Fusce rutrum id quam sed vulputate. Fusce non orci facilisis, egestas nibh vitae,
				ullamcorper metus. Curabitur et pharetra dolor. Aliquam vitae viverra mauris. Duis porta nunc neque, id
				lacinia massa condimentum vitae. Aenean molestie, odio et eleifend porta, mauris odio rhoncus enim, et
				commodo mauris velit vitae ante. Nulla consectetur, enim a rutrum porttitor, enim tortor rhoncus nibh,
				non blandit turpis.
			</Text>
		</View>
	);
};

const ParrallaxContent = ({ picture,titre }) => {
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
			<RenderHeader scrollOffset={scrollOffset} picture={picture} titre={titre} />
			<RenderContent titre={titre}/>
		</Animated.ScrollView>
	);
};
/*
	async componentDidMount() {
		const res = await fetch('https://loripsum.net/api/plaintext');
		this.setState({ text: await res.text() });
    }*/

export default ParrallaxContent;
