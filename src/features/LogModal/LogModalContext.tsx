import React, { createContext, useContext, useMemo, useState } from "react";

type LogModalContextType = {
	openModal: (logDate: number) => void;
	closeModal: () => void;
	isVisible: boolean;
	logDate: number;
};

const LogModalContext = createContext<LogModalContextType | null>(null);

export const useLogModal = () => {
	const context = useContext(LogModalContext);
	if (!context) throw new Error("useModal must be used within a ModalProvider");
	return context;
};

export const LogModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [logDate, setLogDate] = useState<number>(0);

	const openModal = React.useCallback((date: number) => {
		setLogDate(date);
		setIsVisible(true);
	}, []);

	const closeModal = React.useCallback(() => {
		setIsVisible(false);
	}, []);

	const value = {
		openModal,
		closeModal,
		isVisible,
		logDate,
	};

	return <LogModalContext.Provider value={value}>{children}</LogModalContext.Provider>;
};
