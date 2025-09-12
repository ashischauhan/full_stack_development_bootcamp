/* Literals */
//String Literals
//"Skillup Labs", 'info@skilluplabs.com', "A"
// console.log("Skillup Labs");

//Number Literals
//100, 102.3, 100.5

//Boolean Literals
//true, false

//Array Literals
//[1, 2, 3, 4, 5]
//["Skillup Labs", "info@skilluplabs.com", "A"]

//Object Literals
//{name: "Skillup Labs", email: "info@skilluplabs.com"}

//RegExp Literals
// /[a-zA-Z0-9]/

//Function Literals
//function add(a, b) {
//    return a + b;
//}

//Variables
//Declaration //Assignment

// var firstName = "Skillup Labs";
// var firstNumber = 100;
// console.log(firstName, firstNumber);

// let email = "info@skilluplabs.com";
// console.log(email);

// email = "admin@skilluplabs.com";
// console.log("Updated Email: ", email);

// const companyName = "Skillup Labs";
// const mobileNumber = "9876543210";

// console.log(companyName, mobileNumber);

// let greeting = "Hello";
// let name = "Alex";
// const email = "ashis.chauhan@outlook.com";
// const bio = `${greeting} ${name}, how are you doing?`;
// //string concatenation
// console.log(greeting + " " + name + ", how are you doing?");

// //template literals
// console.log(` ${greeting} ${name}, how are you doing?`);

// //string interpolation
// console.log(`${greeting} ${name}, how are you doing?`);

// //string manipulation
// console.log(email.length);
// console.log(bio.split(" ").length);
// console.log(name[name.length - 1]);

// const fullName = "Rabindra Nath Tagore";

// // const firstName = fullName.split(" ")[0];
// // const middleName = fullName.split(" ")[1];
// // const lastName = fullName.split(" ")[2];
// // const firstName = fullName.slice(0, fullName.indexOf(" "));
// // const middleName = fullName.slice(
// //   fullName.indexOf(" ") + 1,
// //   fullName.lastIndexOf(" ")
// // );
// // const lastName = fullName.slice(fullName.lastIndexOf(" ") + 1, fullName.length);

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);

// let num1 = 12344;

// if (num1 % 2 === 0) {
//   console.log("The number is Even");
// } else {
//   console.log("The number is Odd");
// }

//Celcius to Fahrenheit converter

function celsiusToFahrenheit(temperatureInCelsius) {
  let temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32;
  return temperatureInFahrenheit;
}
let temperatureInCelsius = prompt("Enter the temperature in Celsius");
let temperatureInFahrenheit = celsiusToFahrenheit(temperatureInCelsius);
console.log(temperatureInFahrenheit);
