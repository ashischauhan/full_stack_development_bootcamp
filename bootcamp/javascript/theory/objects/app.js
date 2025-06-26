// objects in javascript
// objects are a collection of key-value pairs
// objects are mutable
// objects are reference types
// objects are created using object literal notation or constructor function

// objects can also be created using class syntax
// objects can have methods, which are functions that are properties of the object

// object literal notation
// creating an object using object literal notation
// let student = {
//   firstName: "Ashis",
//   lastName: "Kumar",
//   email: "ashis.kumar@gmail.com",
//   age: 25,
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

//Create an object to store different part of the address. This object should have methods called getCompleteAddress which should return complete address.
// The getCompleteAddress method should return the complete address in the format: "street, city, state postcode"
// Example: "St Ann Street, Merrylands, NSW 2160"
// The address object should have the following properties: street, city, state, postcode
// let address = {
//   street: "St Ann Street",
//   city: "Merrylands",
//   state: "NSW",
//   postcode: "2160",
//   getCompleteAddress: function () {
//     let completeAddress = `${this.street}, ${this.city}, ${this.state} ${this.postcode}`;
//     return completeAddress;
//   },
// };
// console.log(address.getCompleteAddress());

// // accessing object propertiesconsole.log(student.firstName); // Ashis
// console.log(student["lastName"]); // Kumar
// // accessing object methods
// console.log(student.fullName()); // Ashis Kumar

//constructor function

function Student(firstName, lastName, email, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age;

  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const student_1 = new Student("Ashis", "Kumar", "ashis.kumar@gmail.com");
const student_2 = new Student("John", "Doe", "john.doe@gmail.com");
const student_3 = new Student("Jane", "Soe", "jane.soe@gmail.com");

console.log(
  `There are 3 students with name: ${student_1.fullName()}, ${student_2.fullName()}, ${student_3.fullName()}`
);

// example of constructor function to create an address object
// The address object should have the following properties: street, city, state, postcode
class Address {
  constructor(street, city, state, postcode) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.postcode = postcode;
  }

  getCompleteAddress() {
    return `${this.street}, ${this.city}, ${this.state} ${this.postcode}`;
  }
}
const address_1 = new Address("St Ann Street", "Merrylands", "NSW", "2160");
const address_2 = new Address("Main Street", "Sydney", "NSW", "2000");
console.log(address_1.getCompleteAddress()); // St Ann Street, Merrylands, NSW2160

//object.create() method
// The object.create() method creates a new object, using an existing object as the prototype of the newly created object.
const person = {
  firstName: "Ashis",
  lastName: "Kumar",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
const student = Object.create(person);
student.firstName = "John";
student.lastName = "Doe";
console.log(student.fullName()); // John Doe
// The student object inherits the fullName method from the person object
// The student object can also have its own properties
