const flashcards = [
  // JavaScript Questions
  {
    question: "What is JavaScript?",
    answer:
      "JavaScript is a high-level, interpreted programming language used to make web pages interactive.",
  },
  {
    question: "What are variables in JavaScript?",
    answer:
      "Variables are containers for storing data values. They can be declared using var, let, or const.",
  },
  {
    question: "What is the difference between let, const, and var?",
    answer:
      "let and const are block-scoped; var is function-scoped. const cannot be reassigned.",
  },
  {
    question: "How do you write a function in JavaScript?",
    answer: "function myFunction() { /* code */ }",
  },
  {
    question: "What is an array?",
    answer:
      "An array is a special variable that can hold more than one value at a time.",
  },
  {
    question: "How do you add an element to an array?",
    answer:
      "Use array.push(element) to add to the end, or array.unshift(element) to add to the beginning.",
  },
  {
    question: "What is an object in JavaScript?",
    answer: "An object is a collection of key-value pairs.",
  },
  {
    question: "How do you access object properties?",
    answer: "Using dot notation (obj.key) or bracket notation (obj['key']).",
  },
  {
    question: "What is a loop?",
    answer:
      "A loop is used to execute a block of code repeatedly. Common types: for, while, do...while.",
  },
  {
    question: "What is a conditional statement?",
    answer:
      "A statement that performs different actions based on different conditions, e.g., if, else, switch.",
  },
  {
    question: "What is the DOM?",
    answer:
      "The Document Object Model is a programming interface for web documents.",
  },
  {
    question: "How do you select an element by ID in JavaScript?",
    answer: "Use document.getElementById('id').",
  },
  {
    question: "How do you select elements by class in JavaScript?",
    answer:
      "Use document.getElementsByClassName('className') or document.querySelectorAll('.className').",
  },
  {
    question: "What is event handling?",
    answer:
      "Event handling is the process of responding to user actions like clicks, keypresses, etc.",
  },
  {
    question: "How do you add an event listener?",
    answer: "element.addEventListener('event', function)",
  },
  {
    question: "What is a callback function?",
    answer:
      "A function passed as an argument to another function and executed later.",
  },
  {
    question: "What is a closure?",
    answer:
      "A closure is a function that has access to its own scope, the outer function's scope, and the global scope.",
  },
  {
    question: "What is hoisting?",
    answer:
      "Hoisting is JavaScript's default behavior of moving declarations to the top.",
  },
  {
    question: "What is 'this' keyword?",
    answer:
      "'this' refers to the object that is executing the current function.",
  },
  {
    question: "What is the difference between == and ===?",
    answer:
      "== compares values with type coercion, === compares values without type coercion (strict equality).",
  },
  {
    question: "What is NaN?",
    answer:
      "NaN stands for Not-a-Number. It is a value representing undefined or unrepresentable values.",
  },
  {
    question: "How do you check the type of a variable?",
    answer: "Use typeof variable.",
  },
  {
    question: "What is JSON?",
    answer:
      "JavaScript Object Notation, a lightweight data-interchange format.",
  },
  {
    question: "How do you parse JSON in JavaScript?",
    answer: "Use JSON.parse() to convert a JSON string into an object.",
  },
  {
    question: "How do you convert an object to JSON?",
    answer: "Use JSON.stringify(object).",
  },
  {
    question: "What is localStorage?",
    answer:
      "A web storage object that allows you to store key-value pairs in the browser.",
  },
  {
    question: "What is a promise?",
    answer:
      "A Promise is an object representing the eventual completion or failure of an asynchronous operation.",
  },
  {
    question: "How do you handle errors in JavaScript?",
    answer: "Using try...catch blocks.",
  },
  {
    question: "What is async/await?",
    answer:
      "Syntax for writing asynchronous code in a synchronous manner using Promises.",
  },
  {
    question: "What is the difference between null and undefined?",
    answer:
      "null is an assignment value; undefined means a variable has been declared but not assigned a value.",
  },
  {
    question: "What is a template literal?",
    answer:
      "A way to embed expressions in strings using backticks and ${} syntax.",
  },
  {
    question: "How do you comment a single line in JavaScript?",
    answer: "Use // before the line.",
  },
  {
    question: "How do you comment multiple lines in JavaScript?",
    answer: "Use /* ... */ for block comments.",
  },
  {
    question: "What is the spread operator?",
    answer: "... is used to expand arrays or objects into individual elements.",
  },
  {
    question: "What is destructuring?",
    answer:
      "A way to unpack values from arrays or properties from objects into variables.",
  },
  {
    question: "What is a higher-order function?",
    answer:
      "A function that takes another function as an argument or returns a function.",
  },
  {
    question: "What is the use of setTimeout?",
    answer: "It executes a function after a specified delay.",
  },
  {
    question: "What is the use of setInterval?",
    answer: "It repeatedly executes a function at specified intervals.",
  },
  {
    question: "What is the difference between forEach and map?",
    answer:
      "forEach executes a function for each array element; map returns a new array with the results.",
  },
  {
    question: "What is a falsy value?",
    answer:
      "A value that translates to false when evaluated in a Boolean context (e.g., 0, '', null, undefined, NaN, false).",
  },
  {
    question: "What is a truthy value?",
    answer:
      "A value that translates to true when evaluated in a Boolean context.",
  },
  {
    question: "How do you prevent default behavior in an event?",
    answer: "Use event.preventDefault().",
  },
  {
    question: "What is bubbling in event handling?",
    answer:
      "Event bubbling is when an event propagates from the innermost element to the outer elements.",
  },
  {
    question: "What is delegation in event handling?",
    answer:
      "Attaching a single event listener to a parent element to manage events for multiple child elements.",
  },
  {
    question: "How do you check if an array includes a value?",
    answer: "Use array.includes(value).",
  },
  {
    question: "How do you find the length of an array?",
    answer: "Use array.length.",
  },
  {
    question: "How do you remove the last element from an array?",
    answer: "Use array.pop().",
  },
  {
    question: "How do you remove the first element from an array?",
    answer: "Use array.shift().",
  },
  // CSS Questions
  {
    question: "What is CSS?",
    answer: "Cascading Style Sheets, used to style and layout web pages.",
  },
  {
    question: "How do you include CSS in a web page?",
    answer: "Using <style> tags, external stylesheets, or inline styles.",
  },
  {
    question: "What is a CSS selector?",
    answer: "A pattern used to select the elements you want to style.",
  },
  {
    question: "What is the box model in CSS?",
    answer: "The box model consists of content, padding, border, and margin.",
  },
  {
    question: "How do you center a div horizontally?",
    answer: "Use margin: 0 auto; on a block element with a set width.",
  },
  {
    question: "How do you make text bold in CSS?",
    answer: "Use font-weight: bold;",
  },
  {
    question: "How do you change the color of text?",
    answer: "Use the color property.",
  },
  {
    question: "What is a class selector?",
    answer:
      "A selector that targets elements with a specific class attribute, e.g., .my-class.",
  },
  {
    question: "What is an ID selector?",
    answer:
      "A selector that targets an element with a specific id attribute, e.g., #my-id.",
  },
  {
    question: "What is specificity in CSS?",
    answer:
      "The means by which browsers decide which CSS rule applies if multiple rules match the same element.",
  },
  {
    question: "What is a pseudo-class?",
    answer:
      "A keyword added to a selector that specifies a special state of the selected element, e.g., :hover.",
  },
  {
    question: "What is a pseudo-element?",
    answer:
      "A keyword added to a selector that lets you style a specific part of the selected element, e.g., ::before.",
  },
  {
    question: "How do you make a responsive layout?",
    answer:
      "Use media queries, flexible grids, and relative units like %, em, or rem.",
  },
  {
    question: "What is a media query?",
    answer:
      "A CSS technique to apply styles based on device characteristics like width, height, or orientation.",
  },
  {
    question: "How do you hide an element in CSS?",
    answer: "Use display: none; or visibility: hidden;",
  },
  {
    question: "What is Flexbox?",
    answer:
      "A CSS layout model for arranging elements in a flexible way using display: flex.",
  },
  {
    question: "What is Grid in CSS?",
    answer:
      "A CSS layout system for creating complex, responsive grid-based layouts.",
  },
  {
    question: "How do you add a background image in CSS?",
    answer: "Use the background-image property.",
  },
  {
    question: "How do you create a circle in CSS?",
    answer: "Set border-radius: 50% on a square element.",
  },
  {
    question: "What is z-index?",
    answer:
      "A property that controls the vertical stacking order of elements that overlap.",
  },
  {
    question: "How do you add a shadow to an element?",
    answer: "Use the box-shadow property.",
  },
  {
    question: "What is the difference between padding and margin?",
    answer:
      "Padding is space inside the border, margin is space outside the border.",
  },
  {
    question: "How do you change the font in CSS?",
    answer: "Use the font-family property.",
  },
  {
    question: "What is a CSS variable?",
    answer:
      "A custom property defined with --name: value; and used with var(--name).",
  },
  {
    question: "How do you make a list horizontal?",
    answer: "Use display: flex; or float the list items.",
  },
  {
    question: "How do you select all <p> elements inside a <div>?",
    answer: "Use div p as the selector.",
  },
  {
    question: "What is the :nth-child selector?",
    answer:
      "A pseudo-class to select elements based on their position in a parent.",
  },
  {
    question: "How do you animate an element in CSS?",
    answer: "Use the animation or transition properties.",
  },
  {
    question: "What is the difference between inline and block elements?",
    answer:
      "Block elements start on a new line and take full width; inline elements do not.",
  },
  {
    question: "How do you make an element transparent?",
    answer: "Use the opacity property or rgba() color values.",
  },
  {
    question: "How do you create a gradient background?",
    answer:
      "Use the background-image property with linear-gradient or radial-gradient.",
  },
  {
    question: "What is the default value of position property?",
    answer: "The default value is static.",
  },
  {
    question: "How do you float an element to the right?",
    answer: "Use float: right;",
  },
  {
    question: "How do you clear floats in CSS?",
    answer: "Use the clear property or clearfix hack.",
  },
  {
    question: "What is the difference between em and rem units?",
    answer:
      "em is relative to the font-size of the element; rem is relative to the root element.",
  },
  {
    question: "How do you import a CSS file?",
    answer: "Use @import url('style.css'); or a <link> tag in HTML.",
  },
  {
    question: "What is the purpose of the !important rule?",
    answer:
      "It increases the specificity of a CSS rule, overriding other rules.",
  },
  {
    question: "How do you make a button look clickable?",
    answer: "Use :hover, :active, and box-shadow for visual feedback.",
  },
  {
    question: "How do you vertically align text in a div?",
    answer:
      "Use flexbox (align-items: center) or vertical-align for inline elements.",
  },
  {
    question: "What is a sprite in CSS?",
    answer:
      "A single image file containing multiple graphics, used to reduce HTTP requests.",
  },
  {
    question: "How do you create a tooltip in CSS?",
    answer:
      "Use the :hover pseudo-class and ::after or ::before pseudo-elements.",
  },
  {
    question: "How do you make a fixed header?",
    answer: "Set position: fixed; top: 0; width: 100%; on the header element.",
  },
  {
    question: "How do you make a responsive image?",
    answer: "Use max-width: 100%; height: auto; on the image.",
  },
  {
    question:
      "What is the difference between visibility: hidden and display: none?",
    answer:
      "visibility: hidden hides the element but keeps its space; display: none removes it from the layout.",
  },
  {
    question: "How do you center an element vertically?",
    answer:
      "Use flexbox (align-items: center; justify-content: center) or vertical-align for inline elements.",
  },
  {
    question: "How do you use Google Fonts in CSS?",
    answer: "Import the font in your CSS or HTML and use font-family.",
  },
  {
    question: "What is a media feature in a media query?",
    answer:
      "A media feature is a property used to target specific device characteristics, like max-width or orientation.",
  },
  {
    question: "How do you make a border only on one side?",
    answer:
      "Use border-top, border-right, border-bottom, or border-left properties.",
  },
  {
    question: "How do you make a dashed or dotted border?",
    answer: "Use border-style: dashed; or border-style: dotted;",
  },
  {
    question: "How do you make a shadow on text?",
    answer: "Use the text-shadow property.",
  },
  {
    question:
      "What is the difference between microtasks and macrotasks in JavaScript's event loop?",
    answer:
      "Microtasks (like Promise callbacks) are executed after the currently executing script and before any rendering or I/O tasks. Macrotasks (like setTimeout, setInterval) are scheduled to run after the current stack and microtasks are complete.",
  },
  {
    question: "What is tail call optimization in JavaScript?",
    answer:
      "Tail call optimization is a feature where the JavaScript engine can optimize recursive function calls that are in tail position, preventing additional stack frames and improving performance. Not all engines implement this yet.",
  },
  {
    question: "What is the Temporal API in JavaScript?",
    answer:
      "The Temporal API is a modern date/time API for JavaScript, providing better support for date and time manipulation than the existing Date object.",
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
    question: "What is the Reflect API in JavaScript?",
    answer:
      "The Reflect API provides methods for interceptable JavaScript operations, making it easier to work with proxies and meta-programming.",
  },
  {
    question: "What is a Proxy object in JavaScript?",
    answer:
      "A Proxy object allows you to define custom behavior for fundamental operations (e.g., property lookup, assignment, enumeration, function invocation).",
  },
  {
    question: "What is the purpose of the BigInt type in JavaScript?",
    answer:
      "BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number type.",
  },
  {
    question:
      "What is the difference between Object.preventExtensions(), Object.seal(), and Object.freeze()?",
    answer:
      "Object.preventExtensions() prevents new properties from being added, Object.seal() also marks all existing properties as non-configurable, and Object.freeze() makes an object immutable.",
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
    question: "What is the purpose of the Symbol type in JavaScript?",
    answer:
      "Symbol is a primitive data type used to create unique identifiers for object properties.",
  },
  {
    question: "What is the purpose of the ArrayBuffer object in JavaScript?",
    answer:
      "ArrayBuffer is a generic, fixed-length binary data buffer. It is used to represent a generic, fixed-length raw binary data buffer and is used with typed arrays.",
  },
  {
    question:
      "What is the difference between Array.prototype.find and Array.prototype.filter?",
    answer:
      "find returns the first element that satisfies the condition, while filter returns all elements that satisfy the condition as a new array.",
  },
  {
    question: "What is the purpose of the Intl object in JavaScript?",
    answer:
      "The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting.",
  },
  {
    question: "What is the purpose of the DataView object in JavaScript?",
    answer:
      "DataView provides a low-level interface for reading and writing multiple number types in an ArrayBuffer irrespective of the platform's endianness.",
  },
  {
    question:
      "What is the purpose of the SharedArrayBuffer object in JavaScript?",
    answer:
      "SharedArrayBuffer is used to create a generic, fixed-length raw binary data buffer that can be used to create views on shared memory, allowing for memory to be shared between workers.",
  },
  {
    question: "What is the purpose of the Atomics object in JavaScript?",
    answer:
      "The Atomics object provides atomic operations as static methods. They are used with SharedArrayBuffer to coordinate memory sharing between threads.",
  },
];

let currentCard = 0;
let answerShown = false;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const showAnswerBtn = document.getElementById("showAnswerBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const progressPercent = document.getElementById("progressPercent");
const cardCount = document.getElementById("cardCount");
const progressScroll = document.getElementById("progressScroll");

function updateProgressBar() {
  const percent = Math.round(((currentCard + 1) / flashcards.length) * 100);
  progressBar.style.width = percent + "%";
  progressPercent.textContent = percent + "%";
  cardCount.textContent = `${currentCard + 1}/${flashcards.length}`;
  if (progressScroll) progressScroll.value = currentCard + 1;
}

function showCard(index) {
  const card = flashcards[index];
  questionEl.textContent = card.question;
  answerEl.textContent = card.answer;
  hideAnswer();
  updateProgressBar();
}

function showAnswer() {
  answerEl.classList.remove("hidden");
  setTimeout(() => {
    answerEl.classList.remove("scale-y-0");
    answerEl.classList.add("scale-y-100");
  }, 10);
  showAnswerBtn.textContent = "Hide Answer";
  showAnswerBtn.className =
    "bg-red-500 text-white font-extrabold px-10 py-3 rounded-full transition-all duration-200 text-xl mx-2 border border-red-600 hover:bg-red-600 hover:shadow-md";
  answerShown = true;
}

function hideAnswer() {
  answerEl.classList.add("scale-y-0");
  answerEl.classList.remove("scale-y-100");
  setTimeout(() => {
    answerEl.classList.add("hidden");
  }, 300);
  showAnswerBtn.textContent = "Show Answer";
  showAnswerBtn.className =
    "bg-blue-500 text-white font-extrabold px-10 py-3 rounded-full transition-all duration-200 text-xl mx-2 border border-blue-600 hover:bg-blue-600 hover:shadow-md";
  answerShown = false;
}

showAnswerBtn.addEventListener("click", () => {
  if (!answerShown) {
    showAnswer();
  } else {
    hideAnswer();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentCard > 0) {
    currentCard--;
    showCard(currentCard);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentCard < flashcards.length - 1) {
    currentCard++;
    showCard(currentCard);
  }
});

if (progressScroll) {
  progressScroll.addEventListener("input", (e) => {
    const val = parseInt(e.target.value, 10) - 1;
    if (val !== currentCard) {
      currentCard = val;
      showCard(currentCard);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (progressScroll) progressScroll.max = flashcards.length;
  showCard(currentCard);
});
