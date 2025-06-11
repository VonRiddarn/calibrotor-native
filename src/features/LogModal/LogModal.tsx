import React from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { useLogModal } from "./LogModalContext";
import { colors } from "../../styles/colors";
import { FontAwesome } from "@expo/vector-icons";

const LogModal = () => {
	const { isVisible, closeModal, logDate } = useLogModal();

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
				<Text>This is a modal!</Text>
				<Text>Log Date: {logDate}</Text>
			</View>
		</Modal>
	);
};

export default LogModal;

const styles = StyleSheet.create({
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
