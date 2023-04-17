import { actions, UserAction, UserState } from './userTypes';

export const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

export const userReducer = (
	state: UserState = userInitialState,
	action: UserAction
): typeof userInitialState => {
	switch (action.type) {
		case actions.USER_LOGIN:
			return {
				...state,
				...action.payload,
			};

		case actions.USER_LOGOUT:
			return {
				...state,
				...action.payload,
			};

		case actions.USER_REGISTRATION:
			return { ...state, ...action.payload };

		case actions.USER_AUTHORIZATION:
			return { ...action.payload };
		default:
			return state;
	}
};
