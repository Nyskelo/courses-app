export const dateGenerator = (date: string | Date): string => {
	const newDate = date instanceof Date ? date : new Date(date);

	const ddmmyyyy = newDate.toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
	});

	return ddmmyyyy;
};
