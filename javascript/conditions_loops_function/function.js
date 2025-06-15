/*
function square(num) {
  return num * num;
}

function addSquare(a, b) {
  return square(a) + square(b);
}

*/

// factorial

// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }

// (function sayHello() {
//   console.log("hello");
// })();

// Using the arguments object

// function sum() {
//   console.log(arguments[1]);
// }
// sum(1);
// sum(1, 2);
// sum(1, 2, 3);

function multiply(multiplier, ...other) {
  return other.map((a) => a * multiplier);
}
