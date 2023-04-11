import { actions, ActionFetch } from './stateTypes';

export const initialState = {
	status: '',
	message: '',
	error: '',
};

export const stateReducer = (state = initialState, action: ActionFetch) => {
	switch (action.type) {
		case actions.FETCH_REQUEST:
			return { ...state, ...action.payload };
		case actions.FETCH_SUCCESSFUL:
			return { ...state, ...action.payload };
		case actions.FETCH_FAILURE:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
