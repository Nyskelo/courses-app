type Author = { id: string; name: string };

export const searchFilter = (
	data: Array<Author>,
	authors: string[]
): string => {
	return data
		.filter(({ id }) => authors.includes(id))
		.map(({ name }) => name)
		.join(', ');
};
