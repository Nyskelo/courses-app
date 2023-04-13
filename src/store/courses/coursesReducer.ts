import { actions, CoursesAction, CoursesState } from './coursesTypes';

export const coursesInitialState: CoursesState = {
	courses: [],
};

export const coursesReducer = (
	state = coursesInitialState,
	action: CoursesAction
): CoursesState => {
	switch (action.type) {
		case actions.GET_COURSES:
			return { ...state, courses: action.payload };

		case actions.SAVE_COURSE: {
			const newCourseNonDublicate = [
				...state.courses.filter(({ id }) => id !== action.payload[0].id),
				...action.payload,
			];
			return { ...state, courses: newCourseNonDublicate };
		}

		case actions.DELETE_COURSE:
			const newCoursesList = state.courses.filter(
				({ id }) => id !== action.payload[0].id
			);
			return {
				...state,
				courses: newCoursesList,
			};
		default:
			return state;
	}
};
