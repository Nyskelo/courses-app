import { useState, useEffect } from 'react';

export const useDataValidation = (
	message: string,
	regex: RegExp,
	initValue?: string
) => {
	const [data, setData] = useState({
		value: initValue || '',
		error: false,
		message: '',
	});

	const checkIfValid = (
		e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>
	) => {
		e.preventDefault();
		const target = e.target as HTMLButtonElement | HTMLInputElement;
		const value = target.value;
		const check = value.match(regex);
		if (check) {
			setData((prev) => ({
				...prev,
				value: value,
				error: false,
			}));
			return true;
		} else {
			setData((prev) => ({
				...prev,
				message: message,
				error: true,
			}));
			return false;
		}
	};

	useEffect(() => {
		if (data.error) {
			setTimeout(() => {
				setData((prev) => ({
					...prev,
					message: '',
					error: false,
				}));
			}, 1000);
		}
	}, [data.error]);

	return { checkIfValid, data, setData };
};
