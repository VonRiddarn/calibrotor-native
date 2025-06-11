import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Slot, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
	return (
		// This makes the stuff not overlap the native phone ui, like clock and buttons. Very cool.
		<SafeAreaView style={styles.viewContainer} edges={["top", "bottom"]}>
			<View style={styles.pageContainer}>
				<Slot />
			</View>
			<View style={styles.navbar}>
				<Link href={"/calendar"}>Calendar</Link>
				<Link href={"/"}>Home</Link>
				<Text>Footer</Text>
			</View>
		</SafeAreaView>
	);
};

export default RootLayout;

const styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
	},
	pageContainer: {
		backgroundColor: "#ECECEC",
		flex: 1, // Makes the page full screen so we push down the footer
	},
	navbar: {},
});
