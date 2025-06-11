import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import NavLink from "../src/components/NavLink/NavLink";
import { FontAwesome } from "@expo/vector-icons";
import NavFontAwesome from "../src/NavFontAwesome/NavFontAwesome";
import { LogsProvider } from "../src/contexts/LogsContext";
import LogModal from "../src/features/LogModal/LogModal";
import { LogModalProvider, useLogModal } from "../src/features/LogModal/LogModalContext";
import OpenLogButton from "../src/components/OpenLogButton/OpenLogButton";
import { colors } from "../src/styles/colors";

const RootLayout = () => {
	return (
		<LogsProvider>
			<LogModalProvider>
				<SafeAreaView style={styles.viewContainer} edges={["top", "bottom"]}>
					<LogModal />
					<View style={styles.pageContainer}>
						<Slot />
					</View>
					<OpenLogButton />
					<View style={styles.navbar}>
						<NavFontAwesome
							to={"/"}
							name="home"
							color={colors.text.offWhite}
							activeColor={colors.text.active}
						></NavFontAwesome>
						<NavFontAwesome
							to={"/calendar"}
							name="calendar"
							color={colors.text.offWhite}
							activeColor={colors.text.active}
						></NavFontAwesome>
					</View>
				</SafeAreaView>
			</LogModalProvider>
		</LogsProvider>
	);
};

export default RootLayout;

const styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
	},
	pageContainer: {
		backgroundColor: colors.background.lightGrey,
		flex: 1, // Makes the page full screen so we push down the footer
	},
	navbar: {
		backgroundColor: colors.background.darkGrey,
		paddingVertical: 4,
		flexDirection: "row",
		justifyContent: "space-around",
	},
});
