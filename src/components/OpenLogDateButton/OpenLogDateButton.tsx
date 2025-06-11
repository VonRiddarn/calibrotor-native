import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLogModal } from "../../features/LogModal/LogModalContext";
import { colors } from "../../styles/colors";

type OpenLogDateButtonProps = {
	text: string;
	date: number;
	borderColor?: string;
};

const OpenLogDateButton = ({ text, date, borderColor = colors.text.offWhite }: OpenLogDateButtonProps) => {
	const modal = useLogModal();

	return (
		<Pressable
			style={[styles.openLogButton, { borderColor: borderColor }]}
			onPress={() => modal.openModal(date)}
		>
			<Text style={styles.openLogText}>{text}</Text>
		</Pressable>
	);
};

export default OpenLogDateButton;

const styles = StyleSheet.create({
	openLogButton: {
		backgroundColor: colors.background.darkGrey,
		padding: 4,
		borderWidth: 1,
	},
	openLogText: {
		color: colors.text.offWhite,
		fontSize: 40,
	},
});
