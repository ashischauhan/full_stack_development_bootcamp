// Objects in JavaScript

//singleton object
let person1 = new Object();
person1.name = "John Doe";
person1.age = 40;
person1.occupation = "Software Engineer";
person1.hobbies = ["Reading", "Traveling", "Cooking"];
person1.location = "Sydney";
person1.isEmployed = true;
person1.lastLoginDays = ["Monday", "Wednesday", "Friday"];

//object literal
let person = {
  name: "John Doe",
  age: 50,
  occupation: "Software Engineer",
  hobbies: ["Reading", "Traveling", "Cooking"],
  location: "Sydney",
  isEmployed: true,
  lastLoginDays: ["Monday", "Wednesday", "Friday"],
};

// Display the person object
console.log("Person Object:", person);

// Accessing object properties
console.log("Name:", person.name);
