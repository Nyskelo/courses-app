// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Action, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import store from '.';
import { AuthorsState } from './authors/authorsTypes';
import { CoursesState } from './courses/coursesTypes';
import { UserState } from './user/userTypes';

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const getUser = (state: RootState) => state.user;
export const getAuthors = (state: RootState) => state.authors;
export const getCourses = (state: RootState) => state.courses;
export const getStatus = (state: RootState) => state.state?.status;

export type DispatchFunc = () => AppDispatch;

export type AppDispatch = typeof store.dispatch;

export type getStateThunk = () => RootState;

export type RootState = {
	authors: AuthorsState;
	user: UserState;
	courses: CoursesState;
	state: { status: string; error: string; message: string };
};

export interface CreateAction<T> extends Action {
	type: string;
	payload: T;
}

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	AnyAction
>;
