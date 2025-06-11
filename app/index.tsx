import { StyleSheet, View } from "react-native";
import React from "react";
import TrueWeightText from "../src/components/TrueWeightText/TrueWeightText";
import { dateToFormatDate } from "../src/utilities/dateConverter";
import OpenLogButton from "../src/components/OpenLogButton/OpenLogButton";

const Home = () => {
	return (
		<View style={styles.page}>
			<View style={{ flex: 1 }}>
				<TrueWeightText date={dateToFormatDate(new Date())} retrospect={7} />
			</View>
			<OpenLogButton date={dateToFormatDate(new Date())} />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		alignItems: "center",
	},
});
