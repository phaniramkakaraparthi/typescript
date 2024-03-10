type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text" // Literal type of variable declaration

function sum(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const num1 = 2.5;
const num2 = 2.9;

console.log(sum(num1, num2, "as-number"));

console.log(sum("Combine", " Strings", "as-text"));
