import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TrueWeightText from "../src/components/TrueWeightText/TrueWeightText";
import { dateToFormatDate } from "../src/utilities/dateConverter";

const Home = () => {
	return (
		<View>
			<TrueWeightText date={dateToFormatDate(new Date())} retrospect={7} />
			<Text>My test text</Text>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
