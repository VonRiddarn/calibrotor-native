import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../styles/colors";
import { useLogs } from "../../contexts/LogsContext";

type TrueWeightAccuracyProps = {
	date: number;
	retrospect: number;
};

type AccuracyType = {
	ui: string;
	color: string;
};

const TrueWeightAccuracy = ({ date, retrospect }: TrueWeightAccuracyProps) => {
	const logsState = useLogs();
	const [accuracy, setAccuracy] = useState<AccuracyType>({ ui: "Undefined", color: colors.text.grey });

	useEffect(() => {
		const amount = logsState.getSpan(date, retrospect).length;

		if (amount >= 6) {
			setAccuracy({ ui: "Very high", color: "#008000" }); // green
		} else if (amount >= 4) {
			setAccuracy({ ui: "Medium", color: "#90ee90" }); // lightgreen
		} else if (amount >= 2) {
			setAccuracy({ ui: "Low", color: "#ffff00" }); // yellow
		} else if (amount > 0) {
			setAccuracy({ ui: "Very Low", color: "#ff0000" }); // red
		} else {
			setAccuracy({ ui: "Undefined", color: colors.text.grey });
		}
	}, [date, retrospect]);

	return <Text style={{ color: accuracy.color }}>{accuracy.ui}</Text>;
};

export default TrueWeightAccuracy;

const styles = StyleSheet.create({});
