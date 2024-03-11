// Interface can extend another interface
interface Named {
  name: string;
  userName?: string; // Optional property marked with ?
}
// Interface describes the structure of the object
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + this.name);
  }
}

let person: Greetable;
person = {
  name: "Phani",

  greet(phrase: string) {
    console.log(phrase + this.name);
  },
};

person.greet("Hi There this is ");
