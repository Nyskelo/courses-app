import { AxiosError } from 'axios';
import { actions, status } from './stateTypes';

export const fetchRequest = () => ({
	type: actions.FETCH_REQUEST,
	payload: { status: status.LOADING, message: '', error: '' },
});
export const fetchSuccessful = () => ({
	type: actions.FETCH_SUCCESSFUL,
	payload: { status: status.SUCCESSFUL },
});
export const fetchFailure = (error: AxiosError) => ({
	type: actions.FETCH_FAILURE,
	payload: { error: error, status: status.FAILED },
});
