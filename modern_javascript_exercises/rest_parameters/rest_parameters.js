// Instructions can be found in rest_parameters.md

export const add = (...numbers) => {
	let sum = 0;

	numbers.forEach((number) => {
		sum += number;
	});

	return sum;
};

console.log(add(1, 2, 3, 4, 5));
