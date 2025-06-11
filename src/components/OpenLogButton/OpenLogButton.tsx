import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLogModal } from "../../features/LogModal/LogModalContext";
import { colors } from "../../styles/colors";

type OpenLogButtonProps = {
	text: string;
	date: number;
};

const OpenLogButton = ({ text, date }: OpenLogButtonProps) => {
	const modal = useLogModal();
	return (
		<Pressable style={styles.openLogButton} onPress={() => modal.openModal(date)}>
			<Text style={styles.openLogText}>{text}</Text>
		</Pressable>
	);
};

export default OpenLogButton;

const styles = StyleSheet.create({
	openLogButton: {
		backgroundColor: colors.background.darkGrey,
		padding: 16,
		borderWidth: 1,
		borderColor: colors.text.offWhite,
		marginVertical: 32,
	},
	openLogText: {
		color: colors.text.offWhite,
		fontSize: 40,
	},
});
