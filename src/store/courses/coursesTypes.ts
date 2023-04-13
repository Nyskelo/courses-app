import { CreateAction } from '../storeTypes';

export const enum actions {
	GET_COURSES = 'GET_COURSES',
	SAVE_COURSE = 'CREATE_OR_UPDATE_COURSE',
	DELETE_COURSE = 'DELETE_COURSE',
	UPDATE_COURSE = 'UPDATE_COURSE',
}
export type CoursesAction = CreateAction<CourseID[]>;

export type CoursesState = {
	courses: CourseID[];
};

export type Course = Omit<CourseID, 'id'>;

export type CourseID = {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
};
export type id_course = Pick<CourseID, 'id'>;
