import { actions, CourseID, CoursesAction } from './coursesTypes';

export const createCourse = (payload: CourseID): CoursesAction => ({
	type: actions.SAVE_COURSE,
	payload: [payload],
});

export const deleteCourse = (payload: CourseID): CoursesAction => ({
	type: actions.DELETE_COURSE,
	payload: [payload],
});

export const getCourses = (payload: CourseID[]): CoursesAction => ({
	type: actions.GET_COURSES,
	payload,
});
