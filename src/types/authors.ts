export type Author = { id: string; name: string };

export type AuthorAction = {
	type: string;
	payload: Author;
};

export type AuthorsState = {
	authors: Array<Author>;
	courseAuthors: Array<Author>;
};
