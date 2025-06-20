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

function updateProgressBar() {
  const percent = Math.round(((currentCard + 1) / flashcards.length) * 100);
  progressBar.style.width = percent + "%";
  progressPercent.textContent = percent + "%";
  cardCount.textContent = `${currentCard + 1}/${flashcards.length}`;
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
  answerShown = true;
}

function hideAnswer() {
  answerEl.classList.add("scale-y-0");
  answerEl.classList.remove("scale-y-100");
  setTimeout(() => {
    answerEl.classList.add("hidden");
  }, 300);
  showAnswerBtn.textContent = "Show Answer";
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

document.addEventListener("DOMContentLoaded", () => {
  showCard(currentCard);
});
