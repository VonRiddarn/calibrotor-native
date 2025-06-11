import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLogs } from "../../contexts/LogsContext";
import { Log } from "../../types/Log";

type TrueWeightTextProps = {
	date: number;
	retrospect: number;
};

const TrueWeightText = ({ date, retrospect }: TrueWeightTextProps) => {
	const logsState = useLogs();

	const getRollingAverage = (logs: Log[]) => {
		if (!logs.length) return "--";

		const total = logs.reduce((sum, log) => sum + log.weight, 0);
		return (total / logs.length).toFixed(2);
	};

	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<View>
					<Text>True Weight</Text>
					<View style={{ flexDirection: "row", gap: 6, justifyContent: "center" }}>
						<Text>{getRollingAverage(logsState.getSpan(date, retrospect))}</Text>
						<Text>Kg</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default TrueWeightText;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
	},
	box: {
		marginVertical: 16,
		padding: 32,
		backgroundColor: "#F8F9FA",
	},
});
