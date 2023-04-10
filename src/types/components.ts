import { Course, Author, ValidState, User } from './types';

export type TypeCourse = {
	courses: Array<Course>;
	authorsList: Array<Author>;
};

export type TypeInfoCard = {
	description: string;
	duration: number;
	creationDate: string;
	authors: string[];
	authorsList: Array<Author>;
	id: string;
};

export type TypeSectionDetails = {
	children?: string | JSX.Element | JSX.Element[];
};

export type TypeCourseCard = {
	title: string;
	description: string;
	duration: number;
	creationDate: string;
	authors: string[];
	authorsList: Array<Author>;
	id: string;
};

export type TypeSearchBar = {
	value: string;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TypeCreateCourse = {
	courses: Array<Course>;
	authorsList: Array<Author>;
	setCourses: (value: React.SetStateAction<Array<Course>>) => void;
	setAuthorsList: (value: React.SetStateAction<Array<Author>>) => void;
	user: boolean;
};

export type TypeAddTitle = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TypeAddDetails = {
	state: { authors: Array<Author>; courseAuthors: Array<Author> };
	author: string;
	setAuthorName: (e: React.ChangeEvent<HTMLInputElement>) => void;
	createAuthor: (name: string) => boolean;
	addAuthor: (id: string, name: string) => void;
	deleteAuthor: (id: string, name: string) => void;
	handleDuration: (event: React.MouseEvent<HTMLButtonElement>) => boolean;
	duration: ValidState;
	handleCheckName: (event: React.ChangeEvent<HTMLInputElement>) => boolean;
	checkName: ValidState;
	setCheckName: (value: React.SetStateAction<ValidState>) => void;
};

export type TypeSectionMain = {
	title?: string;
	description: string;
};

export type TypeDetailsItem = {
	title: string;
	value: string;
};

export type TypeListOfAuthors = {
	authors: Array<Author>;
	onClick: (id: string, name: string) => void;
	textTitle: string;
	textButton: string;
};

export type TypeAuthor = {
	name: string;
	onClick: (id: string, name: string) => void;
	text: string;
};

export type TypeDuration = {
	value: string;
	onChange: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => boolean;
	duration: { value: string | number; error: boolean; message: string };
	hours: string;
};

export type TypeCreateAuthor = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick:
		| ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
		| ((e: React.ChangeEvent<HTMLInputElement>) => void);
	checkName: { value: string; error: boolean; message: string };
};

export type TypeAddDescriptions = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export type TypeHeader = {
	user: User;
	setUser: (value: React.SetStateAction<User>) => void;
};

export type TypeLogin = {
	user: User;
	setUser: (value: React.SetStateAction<User>) => void;
};

export type TypeRegistration = {
	user: User;
	setUser: (value: React.SetStateAction<User>) => void;
};
