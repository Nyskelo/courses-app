import { TypeButton, TypeInput, TypeTextarea, TypeUserMessage } from './common';
import { Method, database } from './server';
import {
	TypeInfoCard,
	TypeSectionDetails,
	TypeCourseCard,
	TypeSearchBar,
	TypeAddTitle,
	TypeAddDetails,
	TypeSectionMain,
	TypeDetailsItem,
	TypeListOfAuthors,
	TypeAuthor,
	TypeDuration,
	TypeCreateAuthor,
	TypeAddDescriptions,
} from './components';

export type {
	TypeButton,
	TypeInput,
	TypeTextarea,
	TypeUserMessage,
	TypeInfoCard,
	TypeSectionDetails,
	TypeCourseCard,
	TypeSearchBar,
	TypeAddTitle,
	TypeAddDetails,
	TypeSectionMain,
	TypeDetailsItem,
	TypeListOfAuthors,
	TypeAuthor,
	TypeDuration,
	TypeCreateAuthor,
	TypeAddDescriptions,
	Method,
};

export { database };

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
