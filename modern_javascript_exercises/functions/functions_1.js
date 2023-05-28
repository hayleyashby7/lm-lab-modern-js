// Instructions can be found in functions.md

// Function Declarations
// logPerson() is a "Function Declaration"
// Note how it uses the "function" keyword at the beginning of it's declaration
// This is the original way of writing functions in JavaScript

const people = ['Harry', 'Hermione', 'Ron'];

function logPerson(person) {
	console.log('The person is ' + person);
}

people.forEach(logPerson);

// Function in a Variable
// Store the logPerson() function in a variable called performLogPerson

const performLogPerson = function (person) {
	console.log('The person is ' + person);
};

people.forEach(performLogPerson);

// Arrow Functions in a Variable
// Write a version of logPerson() as an Arrow Function and store it in a variable called arrowVersionOfLogPerson

const arrowVersionOfLogPerson = (person) => {
	console.log('The person is ' + person);
};

people.forEach(arrowVersionOfLogPerson);

// Anonymous Arrow Functions
// Replace logPerson below with an Anonymous Arrow Function that does the same thing!

people.forEach((person) => console.log('The person is ' + person));

// In JavaScript there are lots of ways to write functions. There is no right or wrong way, but arrow functions are the most modern. 🙂

/* 👉 What is the difference between all these functions? Can you explain what the differences are?

Functions in a variable - they are proper function objects which means they have access to arguements and 'this' constructs. They can construct instances of an object using new. They are also hoisted, which means they can be accessed in the file before their definition. However it doesn't have access to local variables and is slow because it is compiled at runtime.
Arrow Functions - they don't have access to arguements or 'this' constructs, although you can use the spread operator as a kind of arguements alternative. You can't use them as methods, or to create objects with new like Functions and they are not hoisted. However they are faster than standard functions and help preserve scope because they don't need closures.
Anonymouse Arrow Functions - very similar to Arrow Functions but without a name. Because they are anonymous, they are used where they are placed, making them good for quick oneliners, callbacks in array methods etc.

*/
