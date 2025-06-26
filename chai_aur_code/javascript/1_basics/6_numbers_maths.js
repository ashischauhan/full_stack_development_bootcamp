// Numbers and Maths in JavaScript
// JavaScript provides a variety of built-in methods for working with numbers and performing mathematical operations.
// These methods can be used to perform basic arithmetic operations, as well as more complex calculations like trigonometric functions, logarithms, and random number generation.

// const score = 400; // Initial score
// console.log(typeof score); // Output: "number"

// const valueInString = String(score); // Convert number to string
// console.log(typeof valueInString); // Output: "string"
// console.log(valueInString); // Output: "400"
// // Example of converting a number to a string
// const numericValue = 123.45; // A numeric value
// const convertedString = String(numericValue); // Convert the number to a string
// console.log(typeof convertedString); // Output: "string"
// console.log(convertedString); // Output: "123.45"

const min = 1;
const max = 100;
const randomValue = Math.floor(Math.random() * (max - min) + 1); // Generate a random number between min and max
console.log(randomValue); // Output: A random number between 10 and 20

// Example of generating a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
console.log(randomNumber); // Output: A random number between 1 and 100
// Example of generating a random number between 0 and 1
const randomDecimal = Math.random(); // Generate a random number between 0 and 1
console.log(randomDecimal); // Output: A random number between 0 and 1
