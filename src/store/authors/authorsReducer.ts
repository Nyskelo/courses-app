import { actions, AuthorsAction, AuthorsState } from './authorsTypes';

const authorsInitialState: AuthorsState = {
	authors: [],
	courseAuthors: [],
};

export const authorsReducer = (
	state = authorsInitialState,
	action: AuthorsAction
): AuthorsState => {
	switch (action.type) {
		case actions.GET_AUTHORS: {
			return {
				...state,
				authors: action.payload,
				courseAuthors: [],
			};
		}

		case actions.CREATE_AUTHOR: {
			return { ...state, authors: [...state.authors, ...action.payload] };
		}

		case actions.ADD_AUTHOR_TO_COURSE_LIST: {
			const withoutDeletedAuthors = state.authors.filter(
				({ id }) => action.payload[0].id !== id
			);
			const courseAuthorsNoDublicate = state.courseAuthors.filter(
				({ id }) => action.payload[0].id !== id
			);
			return {
				...state,
				courseAuthors: [...courseAuthorsNoDublicate, ...action.payload],
				authors: withoutDeletedAuthors,
			};
		}

		case actions.DELETE_AUTHOR_FROM_COURSE_LIST:
			const withoutDeletedAuthors = state.courseAuthors.filter(
				({ id }) => action.payload[0].id !== id
			);
			const authorToAdd = [...state.authors, ...action.payload];
			return {
				...state,
				courseAuthors: withoutDeletedAuthors,
				authors: authorToAdd,
			};

		case actions.MOVE_AUTHOR_TO_AUTHORS_LIST: {
			const authorsToMove = action.payload.filter((author) =>
				state.authors.filter((el) => author.id !== el.id)
			);
			return {
				...state,
				authors: [...state.authors, ...authorsToMove],
				courseAuthors: [],
			};
		}

		default:
			return state;
	}
};
