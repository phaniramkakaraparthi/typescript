
// Adding default parameter to last parameter as calling function will be in order beggining from front.
const add = function (a: number, b: number = 2) {
  return a + b;
};

const add1 = (a: number, b: number) => {
  return a + b; // One expression is there we can omit curly brackets & return keyword too , refer next version of function
};

const add2 = (a: number, b: number) => a + b;

console.log(add(2, 3));
console.log(add1(3, 4));
console.log(add2(4, 5));

// Calling function add with default parameter
console.log(add(15));

const printOutput = (output: string | number) => console.log(output);
printOutput(add2(2, 9));

// Since there is one single argument in above function printOutput we can omit paranthesis and modify declaration like below
const printOutput2: (output: string | number) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");
// event => console.log(event) is similar to above printOutput2 notation
button?.addEventListener("click", (event) => console.log(event));
