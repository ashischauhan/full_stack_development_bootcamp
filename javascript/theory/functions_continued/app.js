// Arrow Function

/*const sayHello = (name) => {
  return "Hello " + name;
};

console.log(sayHello("Alex")); */

// Write an arrow function to get length of string

/*const sayHello = (name) => {
  return "Hello you have  " + name.length + " characters";
};

console.log(sayHello("Ashis"));*/

// Arrays

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length - 1; i++) {
//   console.log(numbers[i] * 8);
// }

// for (j in numbers) {
//   console.log(numbers[j]);
// }

numbers.forEach((num) => console.log(num * 2));
const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const oddNumbers = numbers.filter((num) => num % 2 != 0);
console.log(oddNumbers);

console.log(numbers.push(11));
console.log(numbers.unshift(100));

const sortedNumbers = numbers.sort((a, b) => b - a);
console.log(sortedNumbers);
