// Objects in JavaScript

//singleton object
// let person1 = new Object();
// person1.name = "John Doe";
// person1.age = 40;
// person1.occupation = "Software Engineer";
// person1.hobbies = ["Reading", "Traveling", "Cooking"];
// person1.location = "Sydney";
// person1.isEmployed = true;
// person1.lastLoginDays = ["Monday", "Wednesday", "Friday"];

//object literal
// let person = {
//   name: "John Doe",
//   age: 50,
//   occupation: "Software Engineer",
//   hobbies: ["Reading", "Traveling", "Cooking"],
//   location: "Sydney",
//   isEmployed: true,
//   lastLoginDays: ["Monday", "Wednesday", "Friday"],
// };

// Display the person object
// console.log("Person Object:", person);

// Accessing object properties
// console.log("Name:", person.name);

//Constructing an object using a constructor function

//object assignment
/*function Person(
  name,
  age,
  occupation,
  hobbies,
  location,
  isEmployed,
  lastLoginDays
) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
  this.hobbies = hobbies;
  this.location = location;
  this.isEmployed = isEmployed;
  this.lastLoginDays = lastLoginDays;
}
// Creating a new person object
  let person2 = new Person(
  "Jane Smith",
  30,
  "Data Scientist",
  ["Hiking", "Photography"],
  "New York",
  true,
  ["Tuesday", "Thursday"]
);
// Display the person2 object
console.log("Person2 Object:", person2);

// Accessing properties of person2
console.log("Name:", person2.name);*/

// Destructuring an object

const course = {
  courseName: "JavaScript Basics",
  price: 100,
  courseInstructor: "John Doe",
};

const { courseInstructor: instructor } = course;

console.log("Course Instructor:", instructor);

// API for objects and JSON

// {
//   "courseName": "JavaScript Basics",
//   "price": 100,
//   "courseInstructor": "John Doe"
// }

[
  {},
  {
    courseName: "JavaScript Basics",
    price: 100,
    courseInstructor: "John Doe",
  },
  { courseName: "Python Basics", price: 120, courseInstructor: "Jane Smith" },
];
// JSON.stringify() converts a JavaScript object to a JSON string
const jsonString = JSON.stringify(course);
console.log("JSON String:", jsonString);
