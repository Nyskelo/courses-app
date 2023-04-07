export const dateGenerator = (date: string | Date): string => {
	const newDate =
		date instanceof Date
			? date.toLocaleDateString('ru-RU').replace(/\./g, '/')
			: date;
	return newDate;
};
