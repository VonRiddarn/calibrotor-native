import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLogs } from "../../contexts/LogsContext";
import { Log } from "../../types/Log";
import { WeightedListItem } from "../../types/WeightedListItem";

type TrueWeightTextProps = {
	date: number;
	retrospect: number;
};

const TrueWeightText = ({ date, retrospect }: TrueWeightTextProps) => {
	const logsState = useLogs();

	const getRollingAverage = (logs: WeightedListItem<Log>[]) => {
		if (!logs.length) return "--";

		const total = logs.reduce((sum, log) => sum + log.item.weight, 0);
		return (total / logs.length).toFixed(2);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>True Weight</Text>
			<View style={styles.row}>
				<Text style={styles.weightText}>
					{getRollingAverage(logsState.getSpan(date, retrospect))}
				</Text>
				<Text style={styles.unitText}>Kg</Text>
			</View>
		</View>
	);
};

export default TrueWeightText;

// Styling in React Native is literally hell.
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		padding: 16,
	},
	title: {
		fontSize: 18,
		marginBottom: 8,
		color: "black",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
	},
	weightText: {
		fontSize: 24,
		color: "black",
	},
	unitText: {
		fontSize: 24,
		color: "grey",
	},
});
