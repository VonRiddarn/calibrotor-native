import React, { useState } from "react";
import { Modal, View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { useLogModal } from "./LogModalContext";
import { colors } from "../../styles/colors";
import { FontAwesome } from "@expo/vector-icons";
import { formatDateToDate } from "../../utilities/dateConverter";

const LogModal = () => {
	const modalState = useLogModal();
	const displayDate = formatDateToDate(modalState.logDate);

	return (
		<Modal
			transparent
			animationType="slide"
			visible={modalState.isVisible}
			onRequestClose={modalState.closeModal} // Makes Android back button close modal
		>
			<View style={styles.modalContent}>
				<Pressable onPress={modalState.closeModal}>
					<FontAwesome name="arrow-circle-left" size={48} color={colors.text.offWhite} />
				</Pressable>
				<Text style={styles.date}>
					{displayDate.toLocaleDateString("en-US", {
						month: "short",
						day: "numeric",
						year: "numeric",
					})}
				</Text>
				<View style={{ marginHorizontal: "auto" }}>
					<Text style={styles.weight}>Weight</Text>
					<View style={styles.inputView}>
						<TextInput
							style={styles.input}
							keyboardType="numeric"
							value={modalState.weight}
							onChangeText={modalState.setWeight}
						/>
						<Text style={styles.units}>Kg</Text>
					</View>
					<View style={styles.actionView}>
						<Pressable onPress={modalState.save} style={styles.circularButton}>
							<FontAwesome name="check" size={32} color={colors.text.offWhite} />
						</Pressable>
						<Pressable onPress={modalState.closeModal} style={styles.circularButton}>
							<FontAwesome name="close" size={32} color={colors.text.offWhite} />
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default LogModal;

// Idk what I'm doing anymore....
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
	circularButton: {
		alignItems: "center",
		borderWidth: 1,
		borderColor: colors.text.offWhite,
		borderRadius: 40,
		padding: 8,
		width: 48,
	},
	weight: {
		fontSize: 32,
		color: colors.text.offWhite,
		margin: "auto",
	},
	units: {
		color: colors.text.grey,
		position: "absolute",
		right: 8,
		bottom: 16,
	},
	inputView: {
		backgroundColor: colors.background.darkGrey,
		borderWidth: 1,
		borderColor: colors.text.grey,
		width: 142,
	},
	input: {
		margin: "auto",
		width: 96,
		color: colors.text.offWhite,
		fontSize: 24,
		textAlign: "center",
	},
	actionView: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 64,
	},
});
