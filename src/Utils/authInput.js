const AuthMyInput = (input) => {
	if (input.length > 0 || input > 0) {
		return true;
	}
	return false;
};

export default AuthMyInput;
