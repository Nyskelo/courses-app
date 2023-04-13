export const enum actions {
	FETCH_REQUEST = 'FETCH_REQUEST ',
	FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL',
	FETCH_FAILURE = 'FETCH_FAILURE ',
}

export type ActionFetch = {
	type: string;
	payload: { loading: boolean; error?: string };
};

export const enum status {
	LOADING = 'loading',
	SUCCESSFUL = 'succeeded',
	FAILED = 'failed',
}
