import { actions, Author, AuthorsAction } from './authorsTypes';

export const createAuthor = (payload: Author): AuthorsAction => ({
	type: actions.CREATE_AUTHOR,
	payload: [payload],
});
export const addAuthor = (payload: Author): AuthorsAction => ({
	type: actions.ADD_AUTHOR_TO_COURSE_LIST,
	payload: [payload],
});
export const cleareList = (payload: Author[]): AuthorsAction => ({
	type: actions.MOVE_AUTHOR_TO_AUTHORS_LIST,
	payload,
});
export const deleteAuthor = (payload: Author): AuthorsAction => ({
	type: actions.DELETE_AUTHOR_FROM_COURSE_LIST,
	payload: [payload],
});

export const getAuthors = (payload: Author[]): AuthorsAction => ({
	type: actions.GET_AUTHORS,
	payload,
});
