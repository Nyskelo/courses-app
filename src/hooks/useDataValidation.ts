import { useState, useEffect } from 'react';

export const useDataValidation = (message: string, regex: RegExp) => {
	const [state, setState] = useState({
		value: '',
		error: false,
		message: '',
	});

	const handleState = (
		e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>
	) => {
		e.preventDefault();
		const target = e.target as HTMLButtonElement | HTMLInputElement;
		const value = target.value;
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

	return [handleState, state, setState];
};
