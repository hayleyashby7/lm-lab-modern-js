// Instructions can be found in rest_parameters.md

export const add = (...numbers) => {
	let sum = 0;

	numbers.forEach((number) => {
		sum += number;
	});

	return sum;
};
