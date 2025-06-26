// Data Types in JavaScript

// Primitive Data Types// Primitive data types are immutable and are passed by value.
// They include:
//number => 2 to power 53            (max safe integer)
// BigInt => 2 to power 53 + 1       (max safe integer)
//string => "Ashis"                  (single or double quotes)
// boolean => true/false             (logical values)
// null => empty value               ( type of null is object )
// undefined => variable not defined (type of undefined is undefined)
// Symbol => unique value            (ES6 feature)

// Reference or Non-Primitive Data Types
// Non-primitive data types are mutable and are passed by reference.
// They include:
// object =>  { name: "Ashis", age: 30 } (key-value pairs)
// array => [1, 2, 3, 4, 5]
// function => function() { console.log("Hello World"); } (block of code)
// Date => new Date() (date and time object)
// Regular Expression => /abc/ (pattern matching object)
// Type Checking
function checkType(value) {
  return typeof value;
}
// Example usage
console.log(checkType(42)); // "number"
console.log(checkType("Hello")); // "string"
console.log(checkType(true)); // "boolean"
console.log(checkType(null)); // "object"
console.log(checkType(undefined)); // "undefined"
console.log(checkType(Symbol("sym"))); // "symbol"
console.log(checkType({ name: "Ashis" })); // "object"
console.log(checkType([1, 2, 3])); // "object"
console.log(checkType(function () {})); // "function"
console.log(checkType(new Date())); // "object"
console.log(checkType(/abc/)); // "object"

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory Management in JavaScript
// JavaScript uses automatic memory management, which means it automatically allocates and deallocates memory
// for variables and objects. However, understanding how memory is managed can help optimize performance and avoid memory leaks.
// Memory is divided into two main areas: Stack and Heap.

// Stack (Primitive), Heap (Non-Primitive)
// Stack is used for primitive data types, which are stored in a fixed size and accessed in LIFO (Last In First Out) order.
// Stack is where primitive data types are stored, such as numbers, strings, and booleans.
// The stack is a region of memory that stores variables and function calls in a last-in, first-out (LIFO) manner.
// It is used for primitive data types, which are stored in a fixed size and accessed in a more structured manner.
// The stack is where function calls and local variables are stored.
// The stack is a region of memory that stores variables and function calls in a last-in, first-out (LIFO) manner.
// Heap is used for non-primitive data types, which are stored in a dynamic size and accessed in a more flexible manner.
