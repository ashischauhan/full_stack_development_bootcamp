let currentIndex = 0;
let showAnswer = false;
const questionAnswers = [
  {
    question: `What is the difference between var, let and const?`,
    answer: `The main differences between var, let, and const in JavaScript
            relate to scope, hoisting, and reassignment. var is function-scoped
            and hoisted, while let and const are block-scoped and not fully
            hoisted. const also enforces that a variable cannot be reassigned
            after initialization.`,
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that has access to its own scope, the outer function's scope, and the global scope.",
  },
  {
    question: "What does `===` do in JavaScript?",
    answer:
      "`===` checks for strict equality, meaning both the value and the type must be the same.",
  },
  {
    question: "How do you create an array in JavaScript?",
    answer:
      "You can create an array using square brackets: `let arr = [1, 2, 3];`",
  },
  {
    question: "What is the DOM?",
    answer:
      "DOM stands for Document Object Model. It represents the structure of a web page, allowing JavaScript to interact with and manipulate HTML and CSS.",
  },
  {
    question: "What is the use of `addEventListener`?",
    answer:
      "`addEventListener` attaches an event handler to a specific element without overwriting existing handlers.",
  },
  {
    question: "How do you handle asynchronous operations in JavaScript?",
    answer: "Using callbacks, promises (`.then()`), or `async/await` syntax.",
  },
  {
    question: "What is the difference between `null` and `undefined`?",
    answer:
      "`undefined` means a variable has been declared but not assigned a value. `null` is an assignment value that represents 'no value'.",
  },
  {
    question: "What is event bubbling?",
    answer:
      "Event bubbling is the process where an event starts from the deepest element and propagates up through the ancestors.",
  },
  {
    question: "What is a promise in JavaScript?",
    answer:
      "A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",
  },
  {
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.",
  },
  {
    question: "What is the difference between == and ===?",
    answer:
      "== compares values for equality after converting both values to a common type, while === compares both value and type without type conversion.",
  },
  {
    question: "What is a callback function?",
    answer:
      "A callback function is a function passed into another function as an argument to be executed later.",
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    answer:
      "'this' refers to the object it belongs to, and its value depends on how a function is called.",
  },
  {
    question:
      "What is the difference between function declaration and function expression?",
    answer:
      "A function declaration is hoisted and can be called before it is defined, while a function expression is not hoisted.",
  },
  {
    question: "What is an IIFE (Immediately Invoked Function Expression)?",
    answer:
      "An IIFE is a function that runs as soon as it is defined, often used to create a private scope.",
  },
  {
    question: "What is the event loop in JavaScript?",
    answer:
      "The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the browser and executing callbacks when they are ready.",
  },
  {
    question:
      "What is the difference between synchronous and asynchronous code?",
    answer:
      "Synchronous code is executed sequentially, while asynchronous code can be executed without blocking the main thread.",
  },
  {
    question: "What is a higher-order function?",
    answer:
      "A higher-order function is a function that takes another function as an argument or returns a function as a result.",
  },
  {
    question: "What is the purpose of the 'use strict' directive?",
    answer:
      "'use strict' enforces stricter parsing and error handling in JavaScript code, helping to catch common coding mistakes.",
  },
  {
    question: "What is the difference between let and var?",
    answer:
      "let is block-scoped and not hoisted to the top of the function or global scope, while var is function-scoped and hoisted.",
  },
  {
    question: "What is a template literal?",
    answer:
      "Template literals are string literals allowing embedded expressions, denoted by backticks (`) and using ${} for expressions.",
  },
  {
    question: "What is destructuring in JavaScript?",
    answer:
      "Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.",
  },
  {
    question: "What is the spread operator?",
    answer:
      "The spread operator (...) allows an iterable to expand in places where zero or more arguments or elements are expected.",
  },
  {
    question: "What is the rest parameter?",
    answer:
      "The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.",
  },
  {
    question: "What is a promise chain?",
    answer:
      "A promise chain is a series of promises executed in sequence, where each promise returns a value for the next .then().",
  },
  {
    question: "What is async/await?",
    answer:
      "async/await is a syntax for writing asynchronous code in a synchronous manner using promises.",
  },
  {
    question: "What is the difference between map and forEach?",
    answer:
      "map returns a new array with the results of calling a function on every element, while forEach simply executes a function for each element without returning a new array.",
  },
  {
    question: "What is the purpose of the Array.prototype.filter() method?",
    answer:
      "filter() creates a new array with all elements that pass the test implemented by the provided function.",
  },
  {
    question: "What is the purpose of the Array.prototype.reduce() method?",
    answer:
      "reduce() applies a function against an accumulator and each element in the array to reduce it to a single value.",
  },
  {
    question: "What is the difference between call, apply, and bind?",
    answer:
      "call and apply invoke a function with a given 'this' value, but call takes arguments separately while apply takes them as an array. bind returns a new function with a bound 'this' value.",
  },
  {
    question:
      "What is the difference between localStorage, sessionStorage, and cookies?",
    answer:
      "localStorage stores data with no expiration, sessionStorage stores data for the session, and cookies store data with expiration and are sent to the server with requests.",
  },
  {
    question: "What is event delegation?",
    answer:
      "Event delegation is a technique of handling events at a higher level in the DOM rather than on individual elements.",
  },
  {
    question: "What is a pure function?",
    answer:
      "A pure function is a function that always produces the same output for the same input and has no side effects.",
  },
  {
    question: "What is memoization?",
    answer:
      "Memoization is an optimization technique to cache the results of expensive function calls and return the cached result when the same inputs occur again.",
  },
  {
    question:
      "What is the difference between arrow functions and regular functions?",
    answer:
      "Arrow functions do not have their own 'this', 'arguments', 'super', or 'new.target'. They are best suited for non-method functions.",
  },
  {
    question: "What is the purpose of the 'new' keyword in JavaScript?",
    answer:
      "The 'new' keyword creates an instance of a user-defined object type or of one of the built-in object types.",
  },
  {
    question: "What is prototypal inheritance?",
    answer:
      "Prototypal inheritance is a feature in JavaScript where objects inherit properties and methods from other objects via the prototype chain.",
  },
  {
    question:
      "What is the difference between Object.create() and new Object()?",
    answer:
      "Object.create() creates a new object with the specified prototype object and properties, while new Object() creates a new object with Object.prototype as its prototype.",
  },
  {
    question: "What is the purpose of the Object.assign() method?",
    answer:
      "Object.assign() is used to copy the values of all enumerable own properties from one or more source objects to a target object.",
  },
  {
    question: "What is JSON and how do you parse it in JavaScript?",
    answer:
      "JSON (JavaScript Object Notation) is a lightweight data-interchange format. You can parse it using JSON.parse() and stringify objects using JSON.stringify().",
  },
  {
    question: "What is NaN in JavaScript?",
    answer:
      "NaN stands for Not-a-Number. It is a value representing an undefined or unrepresentable value in mathematics.",
  },
  {
    question: "What is the typeof operator?",
    answer:
      "The typeof operator returns a string indicating the type of the unevaluated operand.",
  },
  {
    question: "What is the difference between undefined and not defined?",
    answer:
      "undefined means a variable has been declared but not assigned a value. not defined means a variable has not been declared at all.",
  },
  {
    question: "What is the difference between slice and splice?",
    answer:
      "slice returns a shallow copy of a portion of an array, while splice changes the contents of an array by removing or replacing existing elements and/or adding new elements.",
  },
  {
    question: "What is the purpose of the setTimeout function?",
    answer:
      "setTimeout is used to execute a function after a specified delay in milliseconds.",
  },
  {
    question: "What is the purpose of the setInterval function?",
    answer:
      "setInterval is used to repeatedly execute a function at specified intervals in milliseconds.",
  },
  {
    question: "What is the difference between null and undefined?",
    answer:
      "null is an assignment value that represents no value, while undefined means a variable has been declared but not assigned a value.",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "== checks for value equality with type coercion, while === checks for both value and type equality without coercion.",
  },
  {
    question: "What is the purpose of the isNaN function?",
    answer: "isNaN determines whether a value is NaN or not.",
  },
  {
    question: "What is the difference between window and document objects?",
    answer:
      "window is the global object representing the browser window, while document is the object representing the DOM of the page.",
  },
  {
    question: "What is the purpose of the addEventListener method?",
    answer:
      "addEventListener attaches an event handler to an element without overwriting existing event handlers.",
  },
  {
    question: "What is the difference between innerHTML and textContent?",
    answer:
      "innerHTML returns the HTML content of an element, while textContent returns the text content without HTML tags.",
  },
  {
    question: "What is the difference between for...in and for...of loops?",
    answer:
      "for...in iterates over enumerable properties of an object, while for...of iterates over iterable objects like arrays.",
  },
  {
    question: "What is the purpose of the fetch API?",
    answer: "The fetch API is used to make HTTP requests in JavaScript.",
  },
  {
    question: "What is a generator function?",
    answer:
      "A generator function is a function that can pause execution and resume later, producing a sequence of results instead of a single value.",
  },
  {
    question: "What is the purpose of the Symbol type?",
    answer:
      "Symbol is a primitive data type used to create unique identifiers for object properties.",
  },
  {
    question: "What is the difference between Array.from() and Array.of()?",
    answer:
      "Array.from() creates a new array from an array-like or iterable object, while Array.of() creates a new array from a variable number of arguments.",
  },
  {
    question: "What is the purpose of the Object.freeze() method?",
    answer:
      "Object.freeze() freezes an object, preventing new properties from being added or existing properties from being removed or changed.",
  },
  {
    question: "What is the purpose of the Object.seal() method?",
    answer:
      "Object.seal() seals an object, preventing new properties from being added but allowing existing properties to be changed.",
  },
  {
    question:
      "What is the difference between Object.keys() and Object.values()?",
    answer:
      "Object.keys() returns an array of a given object's own enumerable property names, while Object.values() returns an array of the object's own enumerable property values.",
  },
  {
    question: "What is the purpose of the Object.entries() method?",
    answer:
      "Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs.",
  },
  {
    question: "What is the purpose of the Array.prototype.find() method?",
    answer:
      "find() returns the value of the first element in the array that satisfies the provided testing function.",
  },
  {
    question: "What is the purpose of the Array.prototype.some() method?",
    answer:
      "some() tests whether at least one element in the array passes the test implemented by the provided function.",
  },
  {
    question: "What is the purpose of the Array.prototype.every() method?",
    answer:
      "every() tests whether all elements in the array pass the test implemented by the provided function.",
  },
  {
    question:
      "What is the difference between Array.prototype.sort() and Array.prototype.reverse()?",
    answer:
      "sort() sorts the elements of an array in place and returns the array, while reverse() reverses the order of the elements in place.",
  },
  {
    question: "What is the purpose of the Array.prototype.concat() method?",
    answer: "concat() is used to merge two or more arrays into a new array.",
  },
  {
    question:
      "What is the difference between Array.prototype.push() and Array.prototype.pop()?",
    answer:
      "push() adds one or more elements to the end of an array, while pop() removes the last element from an array.",
  },
  {
    question:
      "What is the difference between Array.prototype.shift() and Array.prototype.unshift()?",
    answer:
      "shift() removes the first element from an array, while unshift() adds one or more elements to the beginning of an array.",
  },
  {
    question: "What is the purpose of the Array.prototype.includes() method?",
    answer:
      "includes() determines whether an array includes a certain value among its entries, returning true or false as appropriate.",
  },
  {
    question:
      "What is the difference between Array.prototype.indexOf() and Array.prototype.lastIndexOf()?",
    answer:
      "indexOf() returns the first index at which a given element can be found, while lastIndexOf() returns the last index at which a given element can be found.",
  },
  {
    question: "What is the purpose of the Array.prototype.join() method?",
    answer:
      "join() joins all elements of an array into a string and returns this string.",
  },
  {
    question: "What is the purpose of the Array.prototype.slice() method?",
    answer:
      "slice() returns a shallow copy of a portion of an array into a new array object.",
  },
  {
    question: "What is the purpose of the Array.prototype.splice() method?",
    answer:
      "splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.",
  },
  {
    question: "What is the purpose of the Array.prototype.flat() method?",
    answer:
      "flat() creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
  },
  {
    question: "What is the purpose of the Array.prototype.flatMap() method?",
    answer:
      "flatMap() first maps each element using a mapping function, then flattens the result into a new array.",
  },
  {
    question: "What is the purpose of the Array.isArray() method?",
    answer: "Array.isArray() determines whether the passed value is an array.",
  },
  {
    question:
      "What is the difference between Array.prototype.map() and Array.prototype.filter()?",
    answer:
      "map() creates a new array with the results of calling a function for every array element, while filter() creates a new array with all elements that pass the test implemented by the provided function.",
  },
  {
    question:
      "What is the purpose of the Array.prototype.reduceRight() method?",
    answer:
      "reduceRight() applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.",
  },
  {
    question: "What is the purpose of the Array.prototype.copyWithin() method?",
    answer:
      "copyWithin() shallow copies part of an array to another location in the same array and returns it without modifying its length.",
  },
  {
    question: "What is the purpose of the Array.prototype.fill() method?",
    answer:
      "fill() changes all elements in an array to a static value, from a start index to an end index.",
  },
  {
    question: "What is the purpose of the Array.prototype.findIndex() method?",
    answer:
      "findIndex() returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.",
  },
  {
    question: "What is the purpose of the Array.prototype.entries() method?",
    answer:
      "entries() returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
  },
  {
    question: "What is the purpose of the Array.prototype.keys() method?",
    answer:
      "keys() returns a new Array Iterator object that contains the keys for each index in the array.",
  },
  {
    question: "What is the purpose of the Array.prototype.values() method?",
    answer:
      "values() returns a new Array Iterator object that contains the values for each index in the array.",
  },
  {
    question: "What is the purpose of the Array.prototype.toString() method?",
    answer:
      "toString() returns a string representing the specified array and its elements.",
  },
  {
    question:
      "What is the purpose of the Array.prototype.toLocaleString() method?",
    answer:
      "toLocaleString() returns a string representing the elements of the array, converted to strings using their toLocaleString methods.",
  },
  {
    question: "What is the purpose of the Array.prototype.reverse() method?",
    answer:
      "reverse() reverses the order of the elements of an array in place.",
  },
  {
    question: "What is the purpose of the Array.prototype.sort() method?",
    answer:
      "sort() sorts the elements of an array in place and returns the sorted array.",
  },
  {
    question: "What is the purpose of the Array.prototype.concat() method?",
    answer: "concat() is used to merge two or more arrays into a new array.",
  },
  {
    question: "What is the purpose of the Array.prototype.push() method?",
    answer:
      "push() adds one or more elements to the end of an array and returns the new length of the array.",
  },
  {
    question: "What is the purpose of the Array.prototype.pop() method?",
    answer:
      "pop() removes the last element from an array and returns that element.",
  },
  {
    question: "What is the purpose of the Array.prototype.shift() method?",
    answer:
      "shift() removes the first element from an array and returns that removed element.",
  },
  {
    question: "What is the purpose of the Array.prototype.unshift() method?",
    answer:
      "unshift() adds one or more elements to the beginning of an array and returns the new length of the array.",
  },
  {
    question: "What is the purpose of the Array.prototype.slice() method?",
    answer:
      "slice() returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).",
  },
  {
    question: "What is the purpose of the Array.prototype.splice() method?",
    answer:
      "splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.",
  },
  {
    question: "What is the purpose of the Array.prototype.flat() method?",
    answer:
      "flat() creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
  },
  {
    question: "What is the purpose of the Array.prototype.flatMap() method?",
    answer:
      "flatMap() first maps each element using a mapping function, then flattens the result into a new array.",
  },
  {
    question: "What is the purpose of the Array.isArray() method?",
    answer: "Array.isArray() determines whether the passed value is an array.",
  },
  {
    question:
      "What is the difference between deep copy and shallow copy in JavaScript?",
    answer:
      "A shallow copy copies property values, but if a property is a reference to an object, it copies only the reference. A deep copy copies all properties and nested objects, creating completely independent objects.",
  },
  {
    question: "What is the Temporal API in JavaScript?",
    answer:
      "The Temporal API is a modern date/time API for JavaScript, providing better support for date and time manipulation than the existing Date object.",
  },
  {
    question:
      "What is the difference between document.querySelector and document.getElementById?",
    answer:
      "document.querySelector returns the first element that matches a CSS selector, while document.getElementById returns the element with the specified id.",
  },
  {
    question: "What is a WeakMap in JavaScript?",
    answer:
      "A WeakMap is a collection of key/value pairs where the keys must be objects and are weakly referenced, meaning they can be garbage collected if there are no other references.",
  },
  {
    question: "What is a WeakSet in JavaScript?",
    answer:
      "A WeakSet is a collection of objects, where the objects are weakly referenced and can be garbage collected if there are no other references.",
  },
  {
    question:
      "What is the difference between Object.seal() and Object.freeze()?",
    answer:
      "Object.seal() prevents new properties from being added and marks all existing properties as non-configurable, but values can still be changed. Object.freeze() makes an object immutable.",
  },
  {
    question: "What is the purpose of the Function.prototype.call() method?",
    answer:
      "Function.prototype.call() allows you to call a function with a specified 'this' value and arguments provided individually.",
  },
  {
    question: "What is the purpose of the Function.prototype.apply() method?",
    answer:
      "Function.prototype.apply() allows you to call a function with a specified 'this' value and arguments provided as an array.",
  },
  {
    question: "What is the purpose of the Function.prototype.bind() method?",
    answer:
      "Function.prototype.bind() creates a new function that, when called, has its 'this' keyword set to the provided value.",
  },
  {
    question:
      "What is the difference between a method and a function in JavaScript?",
    answer:
      "A function is a standalone block of code, while a method is a function that is a property of an object.",
  },
  {
    question: "What is the purpose of the global object in JavaScript?",
    answer:
      "The global object provides variables and functions that are available anywhere in your code. In browsers, it's 'window'; in Node.js, it's 'global'.",
  },
  {
    question:
      "What is the difference between module.exports and exports in Node.js?",
    answer:
      "Both are used to export modules, but module.exports is the actual object that gets returned as the module, while exports is a reference to module.exports.",
  },
  {
    question: "What is the purpose of the require() function in Node.js?",
    answer:
      "require() is used to import modules, JSON, and local files into a Node.js application.",
  },
  {
    question: "What is the event emitter in Node.js?",
    answer:
      "The event emitter is a pattern in Node.js that allows objects to emit named events and have listeners respond to those events.",
  },
  {
    question:
      "What is the difference between process.nextTick() and setImmediate() in Node.js?",
    answer:
      "process.nextTick() schedules a callback to be invoked in the same phase of the event loop, while setImmediate() schedules a callback for the next iteration of the event loop.",
  },
  {
    question: "What is the purpose of the Buffer class in Node.js?",
    answer:
      "The Buffer class is used to handle binary data directly in Node.js.",
  },
  {
    question: "What is the purpose of the fs module in Node.js?",
    answer:
      "The fs (File System) module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.",
  },
  {
    question: "What is the purpose of the path module in Node.js?",
    answer:
      "The path module provides utilities for working with file and directory paths.",
  },
  {
    question: "What is the purpose of the os module in Node.js?",
    answer:
      "The os module provides operating system-related utility methods and properties.",
  },
  {
    question: "What is the purpose of the http module in Node.js?",
    answer:
      "The http module allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).",
  },
  {
    question:
      "What is the difference between synchronous and asynchronous methods in Node.js?",
    answer:
      "Synchronous methods block the execution of code until they complete, while asynchronous methods allow other code to run while they complete.",
  },
  {
    question: "What is middleware in Express.js?",
    answer:
      "Middleware are functions that have access to the request and response objects and can modify them or end the request-response cycle.",
  },
  {
    question:
      "What is the purpose of the next() function in Express.js middleware?",
    answer:
      "The next() function passes control to the next middleware function in the stack.",
  },
  {
    question: "What is CORS and how do you enable it in Express.js?",
    answer:
      "CORS (Cross-Origin Resource Sharing) is a mechanism to allow or restrict requested resources on a web server depending on where the HTTP request was initiated. You can enable it using the cors middleware.",
  },
  {
    question: "What is the difference between PUT and PATCH HTTP methods?",
    answer:
      "PUT replaces the entire resource with the new data, while PATCH updates only the specified fields of a resource.",
  },
  {
    question: "What is the purpose of the fetch API in JavaScript?",
    answer:
      "The fetch API is used to make network requests similar to XMLHttpRequest but with a more powerful and flexible feature set.",
  },
  {
    question: "What is the difference between fetch and XMLHttpRequest?",
    answer:
      "fetch returns Promises and has a simpler, cleaner API, while XMLHttpRequest uses callbacks and is more complex to use.",
  },
  {
    question: "What is the purpose of the async attribute in script tags?",
    answer:
      "The async attribute allows the script to be downloaded in parallel to parsing the page, and will execute as soon as it is available.",
  },
  {
    question: "What is the purpose of the defer attribute in script tags?",
    answer:
      "The defer attribute downloads the script during HTML parsing and executes it after the parsing is complete.",
  },
  {
    question:
      "What is the difference between window.onload and DOMContentLoaded?",
    answer:
      "window.onload fires when the whole page has loaded, including all dependent resources, while DOMContentLoaded fires when the DOM is fully loaded, without waiting for stylesheets, images, and subframes to finish loading.",
  },
  {
    question: "What is the purpose of the history API in JavaScript?",
    answer:
      "The history API allows manipulation of the browser session history, including pushState, replaceState, and popstate events.",
  },
  {
    question: "What is the difference between sessionStorage and localStorage?",
    answer:
      "sessionStorage stores data for one session and is cleared when the browser tab is closed, while localStorage persists data even after the browser is closed.",
  },
  {
    question: "What is the purpose of the navigator object in JavaScript?",
    answer:
      "The navigator object contains information about the browser and the user's environment.",
  },
  {
    question: "What is the difference between innerHTML and outerHTML?",
    answer:
      "innerHTML gets or sets the HTML markup contained within the element, while outerHTML gets or sets the HTML markup of the element itself, including its descendants.",
  },
  {
    question: "What is the purpose of the screen object in JavaScript?",
    answer:
      "The screen object contains information about the user's screen, such as width, height, and color depth.",
  },
  {
    question:
      "What is the difference between encodeURI and encodeURIComponent?",
    answer:
      "encodeURI is used to encode a complete URI, while encodeURIComponent is used to encode a URI component.",
  },
  {
    question:
      "What is the purpose of the decodeURI and decodeURIComponent functions?",
    answer:
      "decodeURI decodes a complete URI, while decodeURIComponent decodes a URI component.",
  },
  {
    question: "What is the difference between escape() and encodeURI()?",
    answer:
      "escape() is an older function for encoding strings, but encodeURI() and encodeURIComponent() are preferred for encoding URIs.",
  },
  {
    question: "What is the purpose of the btoa() and atob() functions?",
    answer:
      "btoa() encodes a string in base-64, and atob() decodes a base-64 encoded string.",
  },
  {
    question:
      "What is the difference between alert(), confirm(), and prompt()?",
    answer:
      "alert() displays a message, confirm() displays a message and waits for the user to accept or cancel, and prompt() displays a message and waits for the user to input text.",
  },
  {
    question: "What is the purpose of the setImmediate() function?",
    answer:
      "setImmediate() is used to execute a single callback after the current event loop cycle in Node.js.",
  },
  {
    question:
      "What is the difference between process.env and process.argv in Node.js?",
    answer:
      "process.env contains environment variables, while process.argv contains command-line arguments passed to the Node.js process.",
  },
  {
    question: "What is the purpose of the cluster module in Node.js?",
    answer:
      "The cluster module allows you to create child processes that share server ports, enabling load balancing over multiple CPU cores.",
  },
  {
    question: "What is the difference between spawn and fork in Node.js?",
    answer:
      "spawn launches a new process with a given command, while fork is a special case of spawn to create new Node.js processes.",
  },
  {
    question: "What is the purpose of the crypto module in Node.js?",
    answer:
      "The crypto module provides cryptographic functionality including a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.",
  },
  {
    question: "What is the purpose of the util module in Node.js?",
    answer:
      "The util module provides utility functions that are helpful for developers, such as util.promisify and util.inherits.",
  },
  {
    question:
      "What is the difference between process.exit() and process.kill() in Node.js?",
    answer:
      "process.exit() ends the process with a specified exit code, while process.kill() sends a signal to a process, which can be used to terminate it.",
  },
  {
    question: "What is the purpose of the events module in Node.js?",
    answer:
      "The events module provides the EventEmitter class, which is used to handle events in Node.js.",
  },
  {
    question:
      "What is the difference between synchronous and asynchronous exceptions in Node.js?",
    answer:
      "Synchronous exceptions are thrown and can be caught using try/catch, while asynchronous exceptions occur in callbacks and must be handled differently.",
  },
  {
    question: "What is the purpose of the domain module in Node.js?",
    answer:
      "The domain module provides a way to handle multiple different I/O operations as a single group for error handling.",
  },
  {
    question: "What is the purpose of the readline module in Node.js?",
    answer:
      "The readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.",
  },
  {
    question: "What is the purpose of the zlib module in Node.js?",
    answer:
      "The zlib module provides compression functionality, including gzip and deflate.",
  },
  {
    question:
      "What is the difference between __dirname and __filename in Node.js?",
    answer:
      "__dirname is the directory name of the current module, while __filename is the file name of the current module.",
  },
  {
    question:
      "What is the purpose of the require.resolve() function in Node.js?",
    answer:
      "require.resolve() returns the resolved filename for a given module, as if it were required.",
  },
  {
    question: "What is the purpose of the global object in Node.js?",
    answer:
      "The global object in Node.js is global, which provides variables and functions available anywhere in your Node.js code.",
  },
  {
    question:
      "What is the difference between synchronous and asynchronous iterators in JavaScript?",
    answer:
      "Synchronous iterators use the next() method to return values one at a time, while asynchronous iterators use next() that returns a promise, allowing for asynchronous data streams.",
  },
  {
    question: "What is the purpose of the Reflect API in JavaScript?",
    answer:
      "The Reflect API provides methods for interceptable JavaScript operations, making it easier to work with proxies and meta-programming.",
  },
  {
    question: "What is a Proxy object in JavaScript?",
    answer:
      "A Proxy object allows you to define custom behavior for fundamental operations (e.g., property lookup, assignment, enumeration, function invocation).",
  },
  {
    question:
      "What is the difference between Object.preventExtensions(), Object.seal(), and Object.freeze()?",
    answer:
      "Object.preventExtensions() prevents new properties from being added, Object.seal() also marks all existing properties as non-configurable, and Object.freeze() makes an object immutable.",
  },
  {
    question: "What is the purpose of the BigInt type in JavaScript?",
    answer:
      "BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number type.",
  },
  {
    question:
      "What is the difference between global scope, function scope, and block scope in JavaScript?",
    answer:
      "Global scope refers to variables accessible anywhere, function scope refers to variables accessible within a function, and block scope refers to variables accessible only within a block (e.g., inside { } with let or const).",
  },
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const showHideButton = document.getElementById("show_hide_btn");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const progressElement = document.getElementById("progress");
const progressPercentageElement = document.getElementById(
  "progress_percentage"
);
const statsElement = document.getElementById("stats");

function showCurrentItem() {
  const currentItem = questionAnswers[currentIndex];
  questionElement.textContent = currentItem.question;
  answerElement.textContent = currentItem.answer;

  questionElement.classList.remove("hidden");
  answerElement.classList.add("hidden");
  showHideButton.textContent = "Show Answer";
  updateProgressBar();
}

function updateProgressBar() {
  const percentage = ((currentIndex + 1) / questionAnswers.length) * 100;
  progressElement.style.width = `${percentage}%`;
  progressPercentageElement.textContent = Math.round(percentage) + "%";
  statsElement.textContent = `${currentIndex + 1} of ${questionAnswers.length}`;
}

showHideButton.addEventListener("click", function () {
  showAnswer = !showAnswer;
  if (showAnswer) {
    questionElement.classList.add("hidden");
    answerElement.classList.remove("hidden");
    showHideButton.textContent = "Hide Answer";
  } else {
    questionElement.classList.remove("hidden");
    answerElement.classList.add("hidden");
    showHideButton.textContent = "Show Answer";
  }
});

nextButton.addEventListener("click", function () {
  if (currentIndex < questionAnswers.length - 1) {
    currentIndex++;
    showCurrentItem();
  }
});

previousButton.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    showCurrentItem();
  }
});

showCurrentItem();
