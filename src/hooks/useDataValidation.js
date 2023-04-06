import { useState, useEffect } from 'react';

export const useDataValidation = (message, regex) => {
	const [state, setState] = useState({
		value: '',
		error: false,
		message: '',
	});

	const handleState = (event) => {
		event.preventDefault();
		const value = event.target.value;
		const check = value.match(regex);
		if (check) {
			setState((prev) => ({
				...prev,
				value: value,
				error: false,
			}));
			return true;
		} else {
			setState((prev) => ({
				...prev,
				message: message,
				error: true,
			}));
			return false;
		}
	};

	useEffect(() => {
		if (state.error) {
			setTimeout(() => {
				setState((prev) => ({
					...prev,
					message: '',
					error: false,
				}));
			}, 1000);
		}
	}, [state.error]);

	return [handleState, state];
};
