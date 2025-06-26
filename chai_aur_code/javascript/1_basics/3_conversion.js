//conversion in JavaScript

let score = "100abc"; // Initial score

console.log(typeof score);

let valueInNumber = Number(score); // Convert string to number
console.log(typeof valueInNumber);
console.log(valueInNumber); // Output: NaN (Not a Number)

//"Conversion from string to number can fail if the string is not a valid number
// For example, if the string contains non-numeric characters, the conversion will result in NaN (Not a Number)."
// Example of converting a string to a number

let numericString = "123.45"; // A valid numeric string

// Convert the string to a number
let convertedNumber = Number(numericString);
console.log(typeof convertedNumber); // Output: number
console.log(convertedNumber); // Output: 123.45
// Example of converting a string to a number with leading zeros
let leadingZeroString = "00123"; // A string with leading zeros

// Example of converting a string to a number with non-numeric characters
let invalidNumericString = "123abc"; // A string with non-numeric characters

let spacedNumericString = "   456.78   "; // A string with leading/trailing spaces
// Convert the string to a number
let spacedConvertedNumber = Number(spacedNumericString);
console.log(typeof spacedConvertedNumber); // Output: number
console.log(spacedConvertedNumber); // Output: 456.78

// Example of converting a boolean to a number
let booleanValue = true; // A boolean value

// Convert the boolean to a number
let booleanConvertedNumber = Number(booleanValue);
console.log(typeof booleanConvertedNumber); // Output: number
console.log(booleanConvertedNumber); // Output: 1 (true is converted to 1)

// Example of converting a null value to a number
let nullValue = null; // A null value
// Convert the null value to a number
let nullConvertedNumber = Number(nullValue);
console.log(typeof nullConvertedNumber); // Output: number
console.log(nullConvertedNumber); // Output: 0 (null is converted to 0)

// Example of converting an undefined value to a number
let undefinedValue; // An undefined value
// Convert the undefined value to a number
let undefinedConvertedNumber = Number(undefinedValue);
console.log(typeof undefinedConvertedNumber); // Output: number
console.log(undefinedConvertedNumber); // Output: NaN (undefined is converted to NaN)

// Example of converting a BigInt to a number
let bigIntValue = BigInt(12345678901234567890); // A BigInt value
// Convert the BigInt to a number
let bigIntConvertedNumber = Number(bigIntValue);
console.log(typeof bigIntConvertedNumber); // Output: number
console.log(bigIntConvertedNumber); // Output: 12345678901234567890 (
// Note: This may lose precision for very large BigInt values)

// Example of converting a Symbol to a number
let symbolValue = Symbol("unique"); // A Symbol value
// Convert the Symbol to a number (this will throw an error)
try {
  let symbolConvertedNumber = Number(symbolValue);
  console.log(typeof symbolConvertedNumber); // This line will not be executed
} catch (error) {
  console.error("Error converting Symbol to number:", error.message); // Output: Error converting Symbol to number: Cannot convert a Symbol value to a number
}

// Example of converting a string to a boolean
let stringValue = "true"; // A string value
let booleanFromString = Boolean(stringValue); // Convert string to boolean
console.log(typeof booleanFromString); // Output: boolean
console.log(booleanFromString); // Output: true (non-empty string is converted to true)

// Example of converting a number to a boolean
let numberValue = 0; // A number value
let booleanFromNumber = Boolean(numberValue); // Convert number to boolean
console.log(typeof booleanFromNumber); // Output: boolean
console.log(booleanFromNumber); // Output: false (0 is converted to false)

// Example of converting a null value to a boolean
let nullToBoolean = Boolean(null); // Convert null to boolean
console.log(typeof nullToBoolean); // Output: boolean
console.log(nullToBoolean); // Output: false (null is converted to false)

// Example of converting an undefined value to a boolean
let undefinedToBoolean = Boolean(undefined); // Convert undefined to boolean
console.log(typeof undefinedToBoolean); // Output: boolean
console.log(undefinedToBoolean); // Output: false (undefined is converted to false)

// Example of converting a BigInt to a boolean
let bigIntToBoolean = Boolean(BigInt(1)); // Convert BigInt to boolean
console.log(typeof bigIntToBoolean); // Output: boolean
console.log(bigIntToBoolean); // Output: true (non-zero BigInt is converted to true)

// Example of converting a Symbol to a boolean
let symbolToBoolean = Boolean(Symbol("unique")); // Convert Symbol to boolean
console.log(typeof symbolToBoolean); // Output: boolean
console.log(symbolToBoolean); // Output: true (Symbol is always converted to true)

// Example of converting a string to a null value
let stringToNull = null; // A null value
console.log(typeof stringToNull); // Output: object (type of null is object)

// Example of converting a number to a null value
let numberToNull = null; // A null value
console.log(typeof numberToNull); // Output: object (type of null is object)
