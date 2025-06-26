// operations on functions for the app

let value = 3;
let negValue = -value; // Negation operator
console.log(negValue); // Output: -3
console.log(typeof negValue); // Output: number

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return a + b;
  }
} // Addition operator
function subtract(a, b) {
  return a - b;
} // Subtraction operator
function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return a * b;
  }
} // Multiplication operator

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  } // Division operator
  if (typeof a !== "number" || typeof b !== "number") {
    return a / b;
  }
}
function modulus(a, b) {
  return a % b;
} // Modulus operator
function exponentiate(base, exponent) {
  return Math.pow(base, exponent);
}
function squareRoot(value) {
  if (value < 0) {
    throw new Error("Cannot compute square root of a negative number");
  }
  return Math.sqrt(value);
}
function absolute(value) {
  return Math.abs(value);
}
function round(value) {
  return Math.round(value);
}
function floor(value) {
  return Math.floor(value);
}
function ceil(value) {
  return Math.ceil(value);
}
function random(min, max) {
  if (min >= max) {
    throw new Error("Min must be less than Max");
  }
  return Math.random() * (max - min) + min;
}
function factorial(n) {
  if (n < 0) {
    throw new Error("Cannot compute factorial of a negative number");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
function power(base, exponent) {
  return Math.pow(base, exponent);
}
function logarithm(value, base = Math.E) {
  if (value <= 0) {
    throw new Error("Logarithm undefined for non-positive values");
  }
  return Math.log(value) / Math.log(base);
}
