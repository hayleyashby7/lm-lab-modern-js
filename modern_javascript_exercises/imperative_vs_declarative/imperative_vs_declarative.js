// Instructions can be found in imperative_vs_declarative.md

export const longPasswords = (passwords) => {
	const longPasswords = [];

	passwords.forEach((password) => (password.length >= 9 ? longPasswords.push(password) : null));

	return longPasswords;
};
