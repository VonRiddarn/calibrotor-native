import React, { useState } from "react";
import { Modal, View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { useLogModal } from "./LogModalContext";
import { colors } from "../../styles/colors";
import { FontAwesome } from "@expo/vector-icons";
import { useLogs } from "../../contexts/LogsContext";
import { formatDateToDate } from "../../utilities/dateConverter";

const LogModal = () => {
	const modalState = useLogModal();
	const logsState = useLogs();
	const displayDate = formatDateToDate(modalState.logDate);

	return (
		<Modal
			transparent
			animationType="slide"
			visible={modalState.isVisible}
			onRequestClose={modalState.closeModal} // Makes Android back button close modal
		>
			<View style={styles.modalContent}>
				<Pressable onPress={modalState.closeModal} style={styles.closeButton}>
					<FontAwesome name="close" size={32} color={colors.text.offWhite} />
				</Pressable>
				<Text style={styles.date}>
					{displayDate.toLocaleDateString("en-US", {
						month: "short",
						day: "numeric",
						year: "numeric",
					})}
				</Text>
				<View>
					<Text>Weight</Text>
					<TextInput
						style={styles.input}
						keyboardType="numeric"
						value={modalState.weight}
						onChangeText={modalState.setWeight}
					/>
				</View>
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
	input: {
		backgroundColor: colors.background.darkGrey,
		color: colors.text.offWhite,
		borderWidth: 1,
		borderColor: colors.text.grey,
	},
});
