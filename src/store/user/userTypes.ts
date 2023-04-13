import { CreateAction } from '../storeTypes';

export const enum actions {
	USER_LOGIN = 'USER_LOGIN',
	USER_LOGOUT = 'USER_LOGOUT',
	USER_REGISTRATION = 'USER_REGISTRATION',
	USER_AUTHORIZATION = 'USER_AUTHORIZATION',
}

export const enum tokenName {
	USER = 'USER',
}

export type UserState = {
	isAuth: boolean;
	name: string;
	email: string;
	token: string;
	role: string;
};
export type UserAction = CreateAction<UserState>;

export type UserData = {
	name: string;
	email: string;
	password: string;
};

export type UserReg = Omit<UserData, 'password'>;

export type UserAuth = Omit<UserData, 'name'>;

export type UserLog = Pick<UserState, 'isAuth' | 'token'>;
