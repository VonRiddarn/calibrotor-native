import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import OpenLogDateButton from "../src/components/OpenLogDateButton/OpenLogDateButton";
import { useLogs } from "../src/contexts/LogsContext";
import { colors } from "../src/styles/colors";
import { dateToFormatDate } from "../src/utilities/dateConverter";

const Calendar = () => {
	const logsState = useLogs();
	const [date, setDate] = useState(20250611);

	const getDaysInMonth = (): number => {
		const year = Math.floor(date / 100); // Extract first 4 digits.
		const mon = Math.floor((date % 10000) / 100); // Middle 2 digits
		return new Date(year, mon, 0).getDate(); // The new instance is automatically set to the last day of the month.
	};

	const getColor = (formattedDate: number): string => {
		const log = logsState.getByDate(formattedDate);

		if (formattedDate === dateToFormatDate(new Date())) return colors.text.active;
		if (log) return colors.text.offWhite;
		else return colors.text.grey;
	};

	return (
		<View style={styles.calendar}>
			{Array.from({ length: getDaysInMonth() }, (_, i) => {
				const year = Math.floor(date / 10000);
				const mon = Math.floor((date % 10000) / 100);
				const day = i + 1;

				const formattedDate = year * 10000 + mon * 100 + day;

				return (
					<OpenLogDateButton
						key={formattedDate}
						date={formattedDate}
						text={day < 10 ? `0${day}` : `${day}`}
						borderColor={getColor(formattedDate)}
					/>
				);
			})}
		</View>
	);
};

export default Calendar;

const styles = StyleSheet.create({
	calendar: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
});
