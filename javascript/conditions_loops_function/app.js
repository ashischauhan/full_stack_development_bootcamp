// Conditions

// const today = "Monday";

// if (today === "Sunday") {
//   console.log("Today is Sunday");
// } else if (today === "Monday") {
//   console.log("Today is Monday!!");
// } else if (today === "Saturday" || today === "Friday") {
//   console.log("Today is fun day!!");
// } else {
//   console.log("Too tired to work!!!");
// }

// //switch statement
// switch (today) {
//   case "Sunday":
//     console.log("Today is Sunday!!");
//     break;
//   case "Monday":
//     console.log("Today is Monday!!");
//     break;
//   case "Tuesday":
//   case "Wednesday":
//   case "Thursday":
//     console.log("Too tired to work!!!");
//     break;
//   case "Friday":
//   case "Saturday":
//     console.log("Today is fun day!!");
//     break;
//   default:
//     console.log("Invalid day");
// }

// Exception handling

// try {
//   console.log("This is error handling code");
//   throw Error();
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("This is final error handling.");
// }

// Loops

//  for loop
// for (let i = 0; i <= 100; i = i + 5) {
//   console.log(i);
// }

// do while loop
// let j = 150;
// do {
//   console.log("j=", j);

//   j++;
// } while (j < 100);

// for in loop(for object iteration)

// let student = {
//   firstName: "Alex",
//   lastName: "Lee",
//   email: "alex.lee@gmail.com",
//   mobile: "0201020304",
// };
// for (a in student) {
//   console.log(a, student[a]);
// }

// for of loop(for array iteration)

// let months = ["jan", "Feb", "March"];
// for (items of months) {
//   console.log(items);
// }

//nested loops

// for (let i = 2; i < 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
//   console.log("----------------");
// }

// Functions

// function multiplicationTabl(i) {
//   try {
//     if (isNaN(i)) {
//       throw Error(i + " is not a valid numbeer");
//     }
//     for (let j = 1; j <= 10; j++) {
//       console.log(`${i} * ${j} = ${i * j}`);
//     }
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// multiplicationTabl(18);

// Regular function declaration
// function greet(name) {
//   return `Hello, ${name}!`;
// }

// Arrow function
// const calculateArea = (length, width) => length * width;

// Function expression
// const isEven = function (num) {
//   return num % 2 === 0;
// };

// Function with default parameters
// function createUser(name, age = 20, country = "Unknown") {
//   return {
//     name,
//     age,
//     country,
//   };
// }

// Example usage
// console.log(greet("John")); // Hello, John!
// console.log(calculateArea(5, 3)); // 15
// console.log(isEven(4)); // true
// console.log(createUser("Alice", 25, "USA")); // { name: 'Alice', age: 25, country: 'USA' }
// console.log(createUser("Bob")); // { name: 'Bob', age: 20, country: 'Unknown' }
