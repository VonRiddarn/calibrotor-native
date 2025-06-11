import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, usePathname } from "expo-router";

type NavLinkProps = {
	to: string;
	children: React.ReactNode;
};

const NavLink = ({ to, children }: NavLinkProps) => {
	const currentPath = usePathname();
	const active = currentPath === to;

	return (
		<Link href={to} style={[styles.link, active ? styles.active : {}]}>
			{children}
		</Link>
	);
};

export default NavLink;

const styles = StyleSheet.create({
	link: {
		marginVertical: 10,
		borderBottomWidth: 1,
	},
	active: {},
});
