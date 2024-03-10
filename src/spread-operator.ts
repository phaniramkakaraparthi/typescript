const hobbies = ["Cycling", "Running"];

const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  name: "Phani",
  age: 35,
};

const referencePerson = person; // only refer to person object instead of copying object data. Address reference

const copyPerson = { ...person }; // Copied data from person object to copyPerson constant.

console.log(copyPerson);
