import { Author } from 'store/authors/authorsTypes';

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

export type TypeAddTitle = {
	title: string;
	setTitle: (value: React.SetStateAction<string>) => void;
	text: string;
};

export type TypeAddDetails = {
	setAuthors: (value: React.SetStateAction<string[]>) => void;
	children: JSX.Element;
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
	textTitle: string;
	textButton: string;
};

export type TypeAuthor = {
	author: Author;
	name: string;
	text: string;
	id: string;
	deleteButton: boolean;
};

export type TypeDuration = {
	value: string;
	onChange: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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
	description: string;
	setDescription: (value: React.SetStateAction<string>) => void;
};
