import { CreateAction } from '../storeTypes';

export const enum actions {
	GET_AUTHORS = 'GET_AUTHORS',
	CREATE_AUTHOR = 'CREATE_AUTHOR',
	ADD_AUTHOR_TO_COURSE_LIST = 'ADD_AUTHOR_TO_COURSE_LIST',
	MOVE_AUTHOR_TO_AUTHORS_LIST = 'MOVE_AUTHOR_TO_AUTHORS_LIST',
	DELETE_AUTHOR_FROM_COURSE_LIST = 'DELETE_AUTHOR_FROM_COURSE_LIST',
}

export type AuthorsState = {
	authors: Author[];
	courseAuthors: Author[];
};
export type AuthorsAction = CreateAction<Author[]>;

export type Author = { id: string; name: string };

export type newAuthor = Omit<Author, 'id'>;

export type idAuthor = Omit<Author, 'name'>;

export type AuthorAction = {
	type: string;
	payload: Author;
};
