import React, { createContext, useContext, useMemo, useState } from "react";
import { useLogs } from "../../contexts/LogsContext";

type LogModalContextType = {
	openModal: (logDate: number) => void;
	closeModal: () => void;
	isVisible: boolean;
	logDate: number;
	weight: string;
	setWeight: (value: string) => void;
	save: () => void;
};

const LogModalContext = createContext<LogModalContextType | null>(null);

export const useLogModal = () => {
	const context = useContext(LogModalContext);
	if (!context) throw new Error("useModal must be used within a ModalProvider");
	return context;
};

export const LogModalProvider = ({ children }: { children: React.ReactNode }) => {
	const logsState = useLogs();
	const [isVisible, setIsVisible] = useState(false);
	const [logDate, setLogDate] = useState<number>(0);
	const [weight, setWeight] = useState<string>("");

	const openModal = React.useCallback(
		(date: number) => {
			setLogDate(date);
			setWeight(`${logsState.getByDate(date)?.weight ?? ""}`);
			setIsVisible(true);
		},
		[logsState]
	);

	const closeModal = React.useCallback(() => {
		setIsVisible(false);
	}, []);

	const save = () => {
		logsState.push(logDate, { weight: Number(weight) });
		closeModal();
	};

	const value = {
		openModal,
		closeModal,
		isVisible,
		logDate,
		weight,
		setWeight,
		save,
	};

	return <LogModalContext.Provider value={value}>{children}</LogModalContext.Provider>;
};
