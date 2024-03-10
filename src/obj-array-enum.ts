enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
} // enum datatype

const person: {
  name: string; // String datatype
  age: number; // number data type
  hobbies: string[]; // Array of strings
  role: [number, string]; // tuple data type
} = {
  name: "Phani",
  age: 35,
  hobbies: ["Cooking", "Music"],
  role: [Role.AUTHOR, "author"], // Usage of Enum in tuple to assign a numeric role value
};

let variableOfAnyType: any; // Declare a variable of any type

variableOfAnyType = ["Author", 5];
console.log(variableOfAnyType);

console.log(person);

console.log("Name: " + person.name);
console.log("Age: " + person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
