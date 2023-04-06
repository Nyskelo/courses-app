export const searchFilter = (data, authors) => {
	return data
		.filter(({ id }) => authors.includes(id))
		.map(({ name }) => name)
		.join(', ');
};
