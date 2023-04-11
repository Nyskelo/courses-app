import { Author } from 'store/authors/authorsTypes';

export const authorsArrayLength = (CourseAuthors: Array<Author>) =>
	Object.values(CourseAuthors).length;

export const getArrayOfAuthorsIDs = (CourseAuthors: Array<Author>) =>
	Object.values(CourseAuthors).map(({ id }) => id);

export const nameReadyToValidation = ({
	error,
	value,
}: {
	error: boolean;
	value: string;
}) => !error && value.length >= 2;
