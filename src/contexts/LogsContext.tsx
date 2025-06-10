import React, { createContext, useContext, useReducer, useCallback, useMemo, ReactNode } from "react";
import { Log } from "../types/Log";
import { WeightedListItem } from "../types/WeightedListItem";
import { dateToFormatDate, formatDateToDate } from "../utilities/dateConverter";

type LogState = Record<number, Log>;

type LogsContextValue = {
	getByDate: (date: number) => Log | null;
	getByMonth: (month: number) => Log[];
	push: (date: number, log: Log) => void;
	remove: (date: number) => void;
	clearAll: () => void;
};

// This is the reducer action and reducer.
// If we want more functionality to it, just add more stuff here. Make sure to do in-line comments explaining potentially unclear payloads.
type Action =
	| { type: "PUSH"; payload: { date: number; log: Log } }
	| { type: "REMOVE"; payload: number } // using comment UUID
	| { type: "CLEAR_ALL" };

const reducer = (state: LogState, action: Action): LogState => {
	switch (action.type) {
		case "PUSH": {
			const ld = action.payload;
			return { ...state, [ld.date]: ld.log };
		}
		case "REMOVE": {
			const { [action.payload]: _, ...rest } = state;
			return rest;
		}
		case "CLEAR_ALL":
			return {};
		default:
			return state;
	}
};

export const LogsProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, {});

	// Methods that mutates the state
	const push = useCallback(
		(date: number, log: Log) => dispatch({ type: "PUSH", payload: { date, log } }),
		[]
	);
	const remove = useCallback((date: number) => dispatch({ type: "REMOVE", payload: date }), []);
	const clearAll = useCallback(() => dispatch({ type: "CLEAR_ALL" }), []);

	// Methods that collects from the state
	const getByDate = useCallback((date: number) => state[date] ?? null, [state]);
	const getByMonth = useCallback(
		(date: number) => {
			const logs: Log[] = [];
			// Date is in format: yyyymm, so like 202506
			// Idk why we use modulus and division instead of string itteration. I guess this is faster or safer.
			const year = Math.floor(date / 100); // Extract first 4 digits.
			const mon = date % 100; // extract last 2 digits.
			const daysInMonth = new Date(year, mon, 0).getDate(); // The new instance is automatically set to the last day of the month.

			for (let day = 1; day <= daysInMonth; day++) {
				const dateKey = year * 10000 + mon * 100 + day;
				if (state[dateKey]) {
					logs.push(state[dateKey]);
				}
			}
			return logs;
		},
		[state]
	);

	const getSpan = useCallback(
		(date: number, retrospect: number): WeightedListItem<Log>[] => {
			const logs: WeightedListItem<Log>[] = [];
			const startDate = formatDateToDate(date);

			for (let i = 0; i <= retrospect; i++) {
				const currentDate = new Date(startDate);
				currentDate.setDate(startDate.getDate() - i);

				const dateKey = dateToFormatDate(currentDate);

				if (state[dateKey]) {
					logs.push({ weight: retrospect - i, item: state[dateKey] });
				}
			}

			return logs;
		},
		[state]
	);

	// The context value.
	// Not sure if useMemo is needed, but my guess is that it can't hurt in this case.
	const value = useMemo(
		() => ({
			getByDate,
			getByMonth,
			push,
			remove,
			clearAll,
		}),
		[]
	);

	return <LogsContext.Provider value={value}>{children}</LogsContext.Provider>;
};

const LogsContext = createContext<LogsContextValue | null>(null);

export const useLogs = (): LogsContextValue => {
	const ctx = useContext(LogsContext);
	if (!ctx) {
		throw new Error("useLogs must be used inside LogsProvider");
	}
	return ctx;
};
