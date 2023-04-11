import { Author, AuthorAction, AuthorsState } from './authors';
import { Course } from './courses';
import { User } from './users';
import { TypeButton, TypeInput, TypeTextarea, TypeUserMessage } from './common';
import {
	TypeUseAuthorsReducer,
	TypeUseAuthorsReducerReturn,
	TypeUseFetchRes,
	TypeUseFetchReq,
} from './hooks';
import {
	TypeCourse,
	TypeInfoCard,
	TypeSectionDetails,
	TypeCourseCard,
	TypeSearchBar,
	TypeCreateCourse,
	TypeAddTitle,
	TypeAddDetails,
	TypeSectionMain,
	TypeDetailsItem,
	TypeListOfAuthors,
	TypeAuthor,
	TypeDuration,
	TypeCreateAuthor,
	TypeAddDescriptions,
	TypeHeader,
	TypeLogin,
	TypeRegistration,
} from './components';

export type {
	Author,
	AuthorAction,
	AuthorsState,
	Course,
	User,
	TypeButton,
	TypeInput,
	TypeTextarea,
	TypeUserMessage,
	TypeCourse,
	TypeInfoCard,
	TypeSectionDetails,
	TypeCourseCard,
	TypeSearchBar,
	TypeCreateCourse,
	TypeAddTitle,
	TypeAddDetails,
	TypeSectionMain,
	TypeDetailsItem,
	TypeListOfAuthors,
	TypeAuthor,
	TypeDuration,
	TypeCreateAuthor,
	TypeAddDescriptions,
	TypeHeader,
	TypeLogin,
	TypeRegistration,
	TypeUseAuthorsReducer,
	TypeUseAuthorsReducerReturn,
	TypeUseFetchRes,
	TypeUseFetchReq,
};

export type SetValidation = (
	value: React.SetStateAction<{
		value: string;
		error: boolean;
		message: string;
	}>
) => void;

export type ValidState = {
	value: string;
	error: boolean;
	message: string;
};
