import { StyleSheet, View, Text } from "react-native";
import React from "react";
import TrueWeightText from "../src/components/TrueWeightText/TrueWeightText";
import { dateToFormatDate } from "../src/utilities/dateConverter";
import OpenLogButton from "../src/components/OpenLogButton/OpenLogButton";
import { colors } from "../src/styles/colors";

const Home = () => {
	const currentDate = new Date();

	return (
		<View style={styles.page}>
			<Text style={styles.date}>
				{currentDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
			</Text>
			<View style={{ flex: 1 }}>
				<TrueWeightText date={dateToFormatDate(currentDate)} retrospect={7} />
			</View>
			<OpenLogButton text="Open Log" date={dateToFormatDate(currentDate)} />
			{/* TODO: Remove later - This is for testing */}
			<OpenLogButton text="2025-06-10" date={20250610} />{" "}
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	date: {
		marginHorizontal: "auto",
		fontSize: 32,
		color: colors.text.offWhite,
		borderColor: colors.text.grey,
		borderBottomWidth: 1,
		marginVertical: 32,
	},
	page: {
		flex: 1,
		alignItems: "center",
	},
});
