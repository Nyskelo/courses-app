export const formValidation = (
	objValuesToValidate: object,
	userMessage = 'Invalid data.'
): boolean => {
	const result = Object.values(objValuesToValidate).every((e) => Boolean(e));
	if (!result) {
		alert(userMessage);
		return false;
	}
	return true;
};
