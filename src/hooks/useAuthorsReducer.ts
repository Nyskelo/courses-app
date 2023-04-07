import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
	TypeUseAuthorsReducer,
	TypeUseAuthorsReducerReturn,
	AuthorsState,
	AuthorAction,
} from '../types/types';

const CREATE_AUTHOR = 'CREATE_AUTHOR';
const ADD_AUTHOR = 'ADD_AUTHOR';
const DELETE_AUTHOR = 'DELETE_AUTHOR';

export const useAuthorsReducer = ({
	...props
}: TypeUseAuthorsReducer): TypeUseAuthorsReducerReturn[] => {
	const [input, setInput] = useState('');
	const [state, dispatch] = useReducer(reducer, {
		authors: props.authors,
		courseAuthors: [],
	});
	const setAuthorName = (e: React.ChangeEvent<HTMLInputElement>) =>
		setInput(e.target.value);

	const createAuthor = (name: string) => {
		if (name.length < 2) {
			return false;
		}

		if (name) {
			const newAuthor = { id: uuidv4(), name: name };
			props.setAuthors([...props.authors, { ...newAuthor }]);
			setInput('');
			dispatch({
				type: CREATE_AUTHOR,
				payload: newAuthor,
			});
		}
		return true;
	};

	const addAuthor = (id: string, name: string): void => {
		dispatch({
			type: ADD_AUTHOR,
			payload: { id, name },
		});
	};

	const deleteAuthor = (id: string, name: string): void => {
		dispatch({ type: DELETE_AUTHOR, payload: { id, name } });
	};

	return [state, input, setAuthorName, createAuthor, addAuthor, deleteAuthor];
};

function reducer(state: AuthorsState, action: AuthorAction) {
	switch (action.type) {
		case CREATE_AUTHOR: {
			const newAuthor = [...state.authors, action.payload];
			return { ...state, authors: newAuthor };
		}
		case DELETE_AUTHOR: {
			const authorToDelete = state.courseAuthors.filter(
				(author) => author.id !== action.payload.id
			);
			const authorToAdd = [...state.authors, action.payload];
			return {
				...state,
				courseAuthors: authorToDelete,
				authors: authorToAdd,
			};
		}
		case ADD_AUTHOR: {
			const authorToDelete = state.authors.filter(
				(author) => author.id !== action.payload.id
			);
			const authorToAdd = [...state.courseAuthors, action.payload];
			return {
				...state,
				courseAuthors: authorToAdd,
				authors: authorToDelete,
			};
		}
		default:
			return state;
	}
}
