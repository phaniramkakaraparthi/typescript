function add(n1: number, n2: number) {
  return n1 + n2;
}
function printResult(num: number): void {
  console.log(num);
}

printResult(add(1, 7));

function addAndHandle(n1: number, n2: number, callback: (n: number) => void) {
  const result = n1 + n2;
  callback(result);
}

addAndHandle(2, 44, (result) => { 
    console.log(result);
});

//let combineValues: Function; // Function type

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; // Arguments don"t match with function type declaration where num should be passed
// combineValues = 5; This will throw an error

console.log(combineValues(2, 4));
