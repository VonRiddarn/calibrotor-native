import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import TrueWeightText from "../src/components/TrueWeightText/TrueWeightText";
import { dateToFormatDate } from "../src/utilities/dateConverter";
import { colors } from "../src/styles/colors";

const Home = () => {
	return (
		<View style={styles.page}>
			<View style={{ flex: 1 }}>
				<TrueWeightText date={dateToFormatDate(new Date())} retrospect={7} />
			</View>
			<Pressable style={styles.openLogButton}>
				<Text style={styles.openLogText}>OPEN LOG</Text>
			</Pressable>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		alignItems: "center",
	},

	openLogButton: {
		backgroundColor: colors.background.darkGrey,
		padding: 16,
		borderWidth: 1,
		borderColor: colors.text.offWhite,
		marginVertical: 32,
	},
	openLogText: {
		color: colors.text.offWhite,
		fontSize: 40,
	},
});
