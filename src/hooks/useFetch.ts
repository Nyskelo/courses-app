import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosResponse } from 'axios';

import { TypeUseFetchRes, TypeUseFetchReq } from '../types/types';

export function useFetch({
	method,
	url,
	start = false,
	body,
	headers = { headers: { 'Content-Type': 'application/json' } },
	auth,
}: TypeUseFetchReq): TypeUseFetchRes {
	const [data, setData] = useState();
	const [status, setStatus] = useState<AxiosResponse['status']>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(Error);
	const [starting, setStart] = useState(start);

	const fetchData = useCallback(() => {
		setLoading(true);

		return axios[method](url, body ?? body, auth ? auth : headers)
			.then((res) => {
				setStatus(res.status);
				setData(res.data.result);
			})
			.catch((err: Error) => {
				setError(err);
				alert(`Ups, something went wrong... Error: ${err.message} `);
			})
			.finally(() => {
				setLoading(false);
				setStart(false);
			});
	}, [body, method, headers, url]);

	useEffect(() => {
		if (starting) {
			fetchData();
		}
	}, [starting]);

	return { data, loading, error, setStart, status };
}
