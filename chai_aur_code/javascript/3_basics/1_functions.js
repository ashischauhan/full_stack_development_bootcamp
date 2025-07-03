// Functions in JavaScript

// Functions are reusable blocks of code that perform a specific task.
// They can take inputs (parameters) and return outputs (values).
// Function Declaration
function greet(name) {
  console.log(`Hello, ${name.toUpperCase()}!`);
}
greet("ashis"); // Calling the function with an argument

//Interesting fact: Functions in JavaScript are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

//IFFE (Immediately Invoked Function Expression)
(function iife() {
  console.log("This is an IIFE!");
})(); // This function runs immediately after it's defined
// console.log(iife()); // This will throw an error because iife is not defined in the global scope.
//Interesting fact: IIFEs are often used to create a new scope, preventing variable collisions in the global scope.
