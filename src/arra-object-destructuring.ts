const hobbies = ["Cycling", "Running"];

// Array destructuring happens in sequential order
const [hobby1, hobby2] = hobbies;

console.log(hobbies, hobby1, hobby2);

const person = {
  firstName: "Phani",
  age: 35,
};

// Object destructuring happens via key name mentioned in object that you are trying to destructuring
// These should be property name in object.
const { firstName, age } = person;

console.log(firstName, age);
