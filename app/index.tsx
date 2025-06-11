import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TrueWeightText from "../src/components/TrueWeightText/TrueWeightText";
import { dateToFormatDate } from "../src/utilities/dateConverter";
import { colors } from "../src/styles/colors";

const Home = () => {
	return (
		<View style={styles.page}>
			<TrueWeightText date={dateToFormatDate(new Date())} retrospect={7} />
			<Text style={styles.inputHeader}>Todays weight</Text>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		alignItems: "center",
	},

	inputHeader: {
		color: colors.text.offWhite,
		fontSize: 40,
	},
});
