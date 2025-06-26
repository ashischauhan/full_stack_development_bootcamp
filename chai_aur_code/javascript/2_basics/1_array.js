// Arrays in JavaScript
// Create an array
let fruits = ["Apple", "Banana", "Cherry", "Date"];
// Display the array
//console.log("Fruits: " + fruits);

// // Array methods// Add an element to the end of the array
// fruits.push("Elderberry");
// // Display the updated array
// console.log("After push: " + fruits);

// // Remove the last element of the array
// fruits.pop();
// // Display the updated array
// console.log("After pop: " + fruits);
// // Add an element to the beginning of the array
// fruits.unshift("Fig");
// // Display the updated array
// console.log("After unshift: " + fruits);
// // Remove the first element of the array
// fruits.shift();
// // Display the updated array
// console.log("After shift: " + fruits);
// // Find the index of an element in the array
// let index = fruits.indexOf("Cherry");
// // Display the index
// console.log("Index of Cherry: " + index);
// // Check if an element exists in the array
// let exists = fruits.includes("Banana");
// // Display the result
// console.log("Does Banana exist? " + exists);
// // Slice the array to get a sub-array
// let subArray = fruits.slice(1, 3);
// // Display the sub-array
// console.log("Sub-array (1 to 3): " + subArray);
// // Join the array elements into a string
// let joinedString = fruits.join(", ");
// // Display the joined string
// console.log("Joined String: " + joinedString);

//spread operator
let moreFruits = ["Grapes", "Honeydew"];
// Combine two arrays using the spread operator
let combinedFruits = [...fruits, ...moreFruits];
// Display the combined array
console.log("Combined Fruits: " + combinedFruits);
