export const dateGenerator = (date) => {
	const newDate =
		date instanceof Date
			? date.toLocaleDateString('ru-RU').replace(/\./g, '/')
			: date;
	return newDate;
};
