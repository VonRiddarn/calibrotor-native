// Disclaimer: AI-assisted for speedier development.

export const formatDateToDate = (yyyymmdd: number): Date => {
	const year = Math.floor(yyyymmdd / 10000);
	const month = Math.floor((yyyymmdd % 10000) / 100) - 1; // zero-based month for JS Date
	const day = yyyymmdd % 100;
	return new Date(year, month, day);
};

export const dateToFormatDate = (date: Date): number => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1; // JS months are zero-based
	const day = date.getDate();

	// pad month and day to two digits
	const mm = month < 10 ? `0${month}` : `${month}`;
	const dd = day < 10 ? `0${day}` : `${day}`;

	return Number(`${year}${mm}${dd}`);
};
