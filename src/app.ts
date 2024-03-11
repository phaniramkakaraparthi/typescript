// Interface describes the structure of the object

interface Greetable {
  name: string;

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
