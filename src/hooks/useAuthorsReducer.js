import { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CREATE_AUTHOR = 'CREATE_AUTHOR';
const ADD_AUTHOR = 'ADD_AUTHOR';
const DELETE_AUTHOR = 'DELETE_AUTHOR';

export const useAuthorsReducer = (authors, setAuthors) => {
	const [details, setDetails] = useState({
		name: '',
	});
	const [state, dispatch] = useReducer(reducer, {
		authors: authors,
		courseAuthors: [],
	});
	const setAuthorName = (e) => setDetails({ ...details, name: e.target.value });

	const createAuthor = (e) => {
		e.preventDefault();
		if (details.name.length < 2) {
			return false;
		}

		if (details.name) {
			const newAuthor = { id: uuidv4(), name: details.name };
			setAuthors((prev) => [...prev, { ...newAuthor }]);
			dispatch({
				type: CREATE_AUTHOR,
				payload: newAuthor,
			});
			setDetails({
				...details,
				name: '',
			});
		}
		return true;
	};

	const addAuthor = (id, name) => {
		dispatch({
			type: ADD_AUTHOR,
			payload: { id, name },
		});
	};

	const deleteAuthor = (id, name) => {
		dispatch({ type: 'DELETE_AUTHOR', payload: { id, name } });
	};

	return [state, details, setAuthorName, createAuthor, addAuthor, deleteAuthor];
};

function reducer(state, action) {
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
