export const formValidation = (toValidate, userMessage) => {
	if (toValidate.some((e) => e === true)) {
		alert(userMessage);
		return false;
	}
	return true;
};
