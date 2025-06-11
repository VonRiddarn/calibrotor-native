import React from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { useLogModal } from "./LogModalContext";

const LogModal = () => {
	const { isVisible, closeModal, logDate } = useLogModal();

	return (
		<Modal
			transparent
			animationType="slide"
			visible={isVisible}
			onRequestClose={closeModal} // Makes Android back button close modal
		>
			<View style={styles.modalOverlay}>
				<View style={styles.modalContent}>
					<Text>This is a modal!</Text>
					<Text>Log Date: {logDate}</Text>

					<Pressable onPress={closeModal} style={styles.closeButton}>
						<Text>Close</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
};

export default LogModal;

const styles = StyleSheet.create({
	modalOverlay: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.5)",
		justifyContent: "center",
		alignItems: "center",
	},
	modalContent: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 12,
	},
	closeButton: {
		marginTop: 20,
		backgroundColor: "#ddd",
		padding: 10,
		borderRadius: 6,
	},
});
