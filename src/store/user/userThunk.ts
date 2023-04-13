import { api, server } from 'services';
import { getAllAuthorsFromApi } from 'store/authors/authorsThunk';
import { getAllCoursesFromApi } from 'store/courses/coursesThunk';
import { Method } from 'types/hooks';
import { database } from 'types/types';
import { AppThunk, getStateThunk } from '../storeTypes';
import {
	userAuthorization,
	userLogin,
	userLogout,
	userRegistration,
} from './userCreators';
import { tokenName, UserAuth, UserData, UserState } from './userTypes';

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
			const res = await api(Method.POST, database.LOGIN, body, {
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

		const response = await api(Method.DELETE, database.LOGOUT);

		response && localStorage.removeItem(tokenName.USER);
		response && dispatch(userLogout());
	};

export function tokenRequest(): AppThunk {
	return async function (dispatch, getState: getStateThunk) {
		const token = getState().user.token || localStorage.getItem(tokenName.USER);

		if (token) {
			server.defaults.headers.common['Authorization'] = token;
			const response = await api(Method.GET, database.USER);

			if (response) {
				const userData: UserState = {
					isAuth: true,
					email: response.data.result.email,
					name: response.data.result.name,
					token: token,
					role: response.data.result.role,
				};
				dispatch(userAuthorization(userData));
				dispatch(getAllCoursesFromApi());
				dispatch(getAllAuthorsFromApi());
			}
		}
	};
}
