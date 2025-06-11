import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import OpenLogDateButton from "../src/components/OpenLogDateButton/OpenLogDateButton";
import { useLogs } from "../src/contexts/LogsContext";
import { colors } from "../src/styles/colors";
import { dateToFormatDate } from "../src/utilities/dateConverter";
import { FontAwesome } from "@expo/vector-icons";

const Calendar = () => {
	const logsState = useLogs();
	const [month, setMonth] = useState(202506);

	const getDaysInMonth = (): number => {
		const year = Math.floor(month / 100); // Extract first 4 digits.
		const mon = month % 100; // extract last 2 digits.
		return new Date(year, mon, 0).getDate(); // The new instance is automatically set to the last day of the month.
	};

	const getColor = (formattedDate: number): string => {
		const log = logsState.getByDate(formattedDate);

		if (formattedDate === dateToFormatDate(new Date())) return colors.text.active;
		if (log) return colors.text.offWhite;
		else return "black";
	};

	const getMonthName = () => {
		const y = Math.floor(month / 100);
		const m = month % 100; // 1-based month
		const monthName = new Date(y, m - 1).toLocaleString("en-US", { month: "long" });
		return `${monthName}, ${y}`;
	};

	const changeMonth = (delta: number) => {
		setMonth((prevMonth) => {
			const year = Math.floor(prevMonth / 100);
			const mon = prevMonth % 100;
			let newMonth = mon + delta;
			let newYear = year;

			if (newMonth > 12) {
				newYear += 1;
				newMonth = 1;
			} else if (newMonth < 1) {
				newYear -= 1;
				newMonth = 12;
			}

			return newYear * 100 + newMonth;
		});
	};

	return (
		<>
			<View style={styles.monthView}>
				<Pressable onPress={() => changeMonth(-1)}>
					<FontAwesome name="arrow-circle-left" size={48} color={colors.text.offWhite} />
				</Pressable>
				<Text style={styles.monthName}>{getMonthName()}</Text>
				<Pressable onPress={() => changeMonth(1)}>
					<FontAwesome name="arrow-circle-right" size={48} color={colors.text.offWhite} />
				</Pressable>
			</View>
			<View style={styles.calendar}>
				{Array.from({ length: getDaysInMonth() }, (_, i) => {
					const year = Math.floor(month / 100);
					const mon = month % 100;
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
		</>
	);
};

export default Calendar;

const styles = StyleSheet.create({
	monthView: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 16,
		paddingHorizontal: 16,
	},
	monthName: {
		fontSize: 32,
		marginHorizontal: "auto",
		color: colors.text.offWhite,
		borderColor: colors.text.grey,
		borderBottomWidth: 1,
	},
	calendar: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
});
