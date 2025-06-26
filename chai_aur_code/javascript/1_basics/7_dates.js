//Dates in JavaScript

// Create a new date object
// let date = new Date();
// // Display the current date and time
// console.log("Current Date and Time: " + date);
// // Display the current date
// console.log("Current Date: " + date.toDateString());
// // Display the current time
// console.log("Current Time: " + date.toTimeString());
// // Display the current year
// console.log("Current Year: " + date.getFullYear());
// // Display the current month (0-11, so we add 1)
// console.log("Current Month: " + (date.getMonth() + 1));

let date = new Date();
// Display the current day of the week
console.log(
  "Current Day of the Week is: " +
    date.toLocaleString("default", {
      weekday: "long",
      timeZone: "AET",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
);
