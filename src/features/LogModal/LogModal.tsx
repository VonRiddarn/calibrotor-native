import React from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { useLogModal } from "./LogModalContext";
import { colors } from "../../styles/colors";
import { FontAwesome } from "@expo/vector-icons";
import { useLogs } from "../../contexts/LogsContext";
import { formatDateToDate } from "../../utilities/dateConverter";

const LogModal = () => {
	const { isVisible, closeModal, logDate } = useLogModal();
	const logsState = useLogs();

	const displayDate = formatDateToDate(logDate);

	return (
		<Modal
			transparent
			animationType="slide"
			visible={isVisible}
			onRequestClose={closeModal} // Makes Android back button close modal
		>
			<View style={styles.modalContent}>
				<Pressable onPress={closeModal} style={styles.closeButton}>
					<FontAwesome name="close" size={32} color={colors.text.offWhite} />
				</Pressable>
				<Text style={styles.date}>
					{displayDate.toLocaleDateString("en-US", {
						month: "short",
						day: "numeric",
						year: "numeric",
					})}
				</Text>
				<Text>This is a modal!</Text>
				<Text>Weight: {logsState.getByDate(logDate ?? -1)?.weight}</Text>
			</View>
		</Modal>
	);
};

export default LogModal;

const styles = StyleSheet.create({
	date: {
		marginHorizontal: "auto",
		fontSize: 32,
		color: colors.text.offWhite,
		borderColor: colors.text.grey,
		borderBottomWidth: 1,
		marginVertical: 32,
	},
	modalContent: {
		flex: 1,
		backgroundColor: colors.background.lightGrey,
		padding: 20,
	},
	closeButton: {
		alignItems: "center",
		borderWidth: 1,
		borderColor: colors.text.offWhite,
		borderRadius: 40,
		padding: 8,
		width: 48,
	},
});
