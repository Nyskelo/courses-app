import axios, { AxiosError } from 'axios';

import store from './store';
import { Method } from './types/types';
import {
	fetchFailure,
	fetchRequest,
	fetchSuccessful,
} from './store/state/stateCreators';
import { Course } from 'store/courses/coursesTypes';
import { UserAuth, UserData } from 'store/user/userTypes';
import { newAuthor } from 'store/authors/authorsTypes';

export const baseURL = `http://localhost:4000`;
export const server = axios.create({
	baseURL: baseURL,
	headers: { 'Content-Type': 'application/json' },
});

export const api = async (
	method: Method,
	url: string,
	body?: Course | UserData | UserAuth | newAuthor | undefined,
	headers?: object
) => {
	store.dispatch(fetchRequest());
	try {
		const res = await server[method](url, body ?? body, headers);
		store.dispatch(fetchSuccessful());
		return res;
	} catch (err: unknown) {
		if (err instanceof AxiosError) {
			const errorStatus = err.response?.status || err.code;
			const errorMsg =
				err.response?.data.errors || err.response?.data.result || err.message;
			store.dispatch(fetchFailure(err));
			errorStatus !== 401 && alert(`Error ${errorStatus}: ${errorMsg} `);
		} else {
			alert(err);
		}
	}
};
