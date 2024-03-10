// Rest parameters usage where we provide parameters with ... value in syntax
const add = (...numbers: number[]) => {
  return numbers.reduce((currResult, currValue) => {
    return currResult + currValue;
  }, 0);
};

// Here when calling functions we can pass arguments as many as we can to fetch sum result.
const addedNumbers = add(1, 5, 6.8, 1.66, 5.4343);

console.log(addedNumbers);
