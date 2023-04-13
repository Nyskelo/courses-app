export type Method = 'post' | 'get' | 'put' | 'delete';

export const enum database {
	USER = '/users/me',
	LOGIN = '/login',
	LOGOUT = '/logout',
	REGISTER = '/register',
	GET_AUTHORS = '/authors/all',
	GET_COURSES = '/courses/all',
	POST_AUTHOR = '/authors/add',
	POST_COURSE = '/courses/add',
	SET_COURSE = '/courses/',
	GET_COURSE = '/courses/',
}
