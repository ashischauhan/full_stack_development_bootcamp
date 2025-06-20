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
  progressElement.classList.add(`w-[${percentage}%]`);
  progressPercentageElement.textContent = percentage + "%";
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
