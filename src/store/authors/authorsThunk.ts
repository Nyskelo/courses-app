import { api, server } from 'services';
import { Method } from 'types/hooks';
import { database } from 'types/types';
import { CourseID } from '../courses/coursesTypes';
import { AppThunk, getStateThunk } from '../storeTypes';
import { addAuthor, createAuthor, getAuthors } from './authorsCreators';
import { newAuthor } from './authorsTypes';

export const createAuthorThunk =
	(authorName: newAuthor): AppThunk =>
	async (dispatch, getState: getStateThunk) => {
		server.defaults.headers.common['Authorization'] = getState().user.token;

		const response = await api(Method.POST, database.POST_AUTHOR, authorName);

		if (response) {
			dispatch(createAuthor(response.data.result));
		}
	};

export const authorsToUpdateThunk =
	(data: CourseID): AppThunk =>
	(dispatch, getState: getStateThunk) => {
		getState().authors.authors.forEach((author) =>
			data.authors.forEach((id: string) => {
				if (id === author.id) {
					dispatch(addAuthor(author));
				}
			})
		);
	};

export const getAllAuthorsFromApi = (): AppThunk => async (dispatch) => {
	const response = await api(Method.GET, database.GET_AUTHORS);
	response && dispatch(getAuthors(response.data.result));
};
