import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, usePathname } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

type NavFontAwesomeProps = {
	to: string;
	name: React.ComponentProps<typeof FontAwesome>["name"];
	size?: number;
	color?: string;
	activeColor?: string;
};

const NavFontAwesome = ({
	to,
	name,
	size = 32,
	color = "black",
	activeColor = "blue",
}: NavFontAwesomeProps) => {
	const currentPath = usePathname();
	const active = currentPath === to;

	return (
		<Link href={to} asChild>
			<Pressable style={[styles.link, active ? styles.active : {}]}>
				<FontAwesome name={name} size={size} color={active ? activeColor : color} />
			</Pressable>
		</Link>
	);
};

export default NavFontAwesome;

const styles = StyleSheet.create({
	link: {},
	active: {},
});
