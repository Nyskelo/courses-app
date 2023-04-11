export const formValidation = (
	objValuesToValidate: object,
	userMessage: string
): boolean => {
	const result = Object.values(objValuesToValidate).every((e) => Boolean(e));
	if (!result) {
		userMessage && alert(userMessage);

		return false;
	}

	return true;
};
