import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import NavLink from "../src/components/NavLink/NavLink";

const RootLayout = () => {
	return (
		// This makes the stuff not overlap the native phone ui, like clock and buttons. Very cool.
		<SafeAreaView style={styles.viewContainer} edges={["top", "bottom"]}>
			<View style={styles.pageContainer}>
				<Slot />
			</View>
			<View style={styles.navbar}>
				<NavLink to={"/calendar"}>Calendar</NavLink>
				<NavLink to={"/"}>Home</NavLink>
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
