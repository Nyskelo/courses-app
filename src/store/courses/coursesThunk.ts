import { api, server } from 'services';
import { database } from 'types/types';
import { getCourses } from 'store/courses/coursesCreators';
import { AppThunk, getStateThunk } from '../storeTypes';
import { createCourse, deleteCourse } from './coursesCreators';
import { Course } from './coursesTypes';
import { AxiosResponse } from 'axios';
import { Method } from 'types/hooks';

export const deleteCourseThunk =
	(id: string): AppThunk =>
	async (dispatch, getState: getStateThunk) => {
		server.defaults.headers.common['Authorization'] = getState().user.token;

		const response = await api(Method.DELETE, database.SET_COURSE + `${id}`);

		const courseTodelete = getState().courses.courses.filter(
			(course) => id === course.id
		)[0];
		response && dispatch(deleteCourse(courseTodelete));
	};

export const setCourseThunk =
	(course: Course, id: string): AppThunk =>
	async (dispatch, getState: getStateThunk) => {
		server.defaults.headers.common['Authorization'] = getState().user.token;

		let response: AxiosResponse | undefined;

		if (id === '') {
			response = await api(Method.POST, database.POST_COURSE, course);
		} else {
			response = await api(Method.PUT, database.SET_COURSE + `${id}`, course);
		}
		response && dispatch(createCourse(response.data.result));
	};

export const getAllCoursesFromApi = (): AppThunk => async (dispatch) => {
	const response = await api(Method.GET, database.GET_COURSES);
	response && dispatch(getCourses(response.data.result));
};
