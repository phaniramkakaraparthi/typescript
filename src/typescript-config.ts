let userInput: unknown;

let userName: string;

userInput = 5;
userInput = "Mad Max";

// We can assign unknown type to other types by checking the type before assigning like below

if (typeof userInput === "string") {
  userName = userInput;
}

// userName = userInput; // We get error when we try to assign a unknown type to other type of input

console.log(userInput);

// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }

// generateError("Error Occured", 500);

const button = document.querySelector("button");

button?.addEventListener('click', () => {
  console.log("clicked a button");
});
