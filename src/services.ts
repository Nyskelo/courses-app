import axios, { AxiosError } from 'axios';

import store from './store';
import { database, Method } from './types/types';
import {
	fetchFailure,
	fetchRequest,
	fetchSuccessful,
} from './store/state/stateCreators';
import { AppThunk, getStateThunk } from 'store/storeTypes';
import { getAuthors } from 'store/authors/authorsCreators';
import {
	userAuthorization,
	userLogin,
	userLogout,
	userRegistration,
} from 'store/user/userCreators';
import { tokenName, UserAuth, UserData, UserState } from 'store/user/userTypes';
import { getCourses } from 'store/courses/coursesCreators';

export const baseURL = `http://localhost:4000`;
export const server = axios.create({
	baseURL: baseURL,
	headers: { 'Content-Type': 'application/json' },
});

export const api = async (
	method: Method,
	url: string,
	body?: UserAuth | UserData | undefined,
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

export const getAllAuthorsFromApi = (): AppThunk => async (dispatch) => {
	const response = await api('get', database.GET_AUTHORS);
	response && dispatch(getAuthors(response.data.result));
};

export const getAllCoursesFromApi = (): AppThunk => async (dispatch) => {
	const response = await api('get', database.GET_COURSES);
	response && dispatch(getCourses(response.data.result));
};

export const registerUser =
	(body: UserData): AppThunk =>
	async (dispatch) => {
		const res = await api('post', database.REGISTER, body);
		const data = { name: body.name, email: body.email };
		res && dispatch(userRegistration(data));
	};

export const loginUser =
	(body?: UserAuth): AppThunk =>
	async (dispatch) => {
		const token = localStorage.getItem(tokenName.USER);

		token && dispatch(tokenRequest());

		if (body) {
			const res = await api('post', database.LOGIN, body, {
				auth: { password: body.password, username: '' },
			});
			if (res) {
				const token = res.data.result;
				localStorage.setItem(tokenName.USER, `${token}`);
				dispatch(userLogin({ token, isAuth: true }));
				dispatch(tokenRequest());
			}
		}
	};

export const logoutUser =
	(): AppThunk => async (dispatch, getState: getStateThunk) => {
		server.defaults.headers.common['Authorization'] = getState().user.token;

		const response = await api('delete', database.LOGOUT);

		response && localStorage.removeItem(tokenName.USER);
		response && dispatch(userLogout());
	};

export function tokenRequest(): AppThunk {
	return async function (dispatch, getState: getStateThunk) {
		const token = getState().user.token || localStorage.getItem(tokenName.USER);

		if (token) {
			server.defaults.headers.common['Authorization'] = token;
			const response = await api('get', database.USER);

			if (response) {
				const userData: UserState = {
					isAuth: true,
					email: response.data.result.email,
					name: response.data.result.name,
					token: token,
				};
				dispatch(userAuthorization(userData));
				dispatch(getAllCoursesFromApi());
				dispatch(getAllAuthorsFromApi());
			}
		}
	};
}
