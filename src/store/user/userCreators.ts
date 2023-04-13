import { CreateAction } from '../storeTypes';
import { userInitialState } from './userReducer';
import { actions, UserLog, UserReg, UserState } from './userTypes';

export const userLogin = (payload: UserLog): CreateAction<UserLog> => ({
	type: actions.USER_LOGOUT,
	payload,
});
export const userLogout = () => ({
	type: actions.USER_LOGOUT,
	payload: userInitialState,
});
export const userRegistration = (data: UserReg): CreateAction<UserReg> => ({
	type: actions.USER_REGISTRATION,
	payload: data,
});
export const userAuthorization = (
	payload: UserState
): CreateAction<UserState> => ({
	type: actions.USER_AUTHORIZATION,
	payload,
});
