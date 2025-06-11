import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLogModal } from "../../features/LogModal/LogModalContext";

const OpenLogButton = () => {
	const modal = useLogModal();
	return (
		<Pressable style={{ padding: 32 }} onPress={() => modal.openModal(0)}>
			<Text>{modal.isVisible ? "Close" : "Open"}</Text>
		</Pressable>
	);
};

export default OpenLogButton;

const styles = StyleSheet.create({});
