/**
 * JSにはinterfaceは存在しない
 *
 */

interface Greetable {
  readonly name: string;

  greet(phrase: string): void;
}

let user1: Greetable;

user1 = {
  name: "Max",
  // age: 33,
  greet(phrase: string) {
    console.log(phrase + "Hello");
  },
};

user1.greet("MUN");

interface Named {
  readonly lop: string;
  outputName?: string;
}

class Person implements Greetable, Named {
  name: string;
  lop: string = "";
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + " : Yee!");
  }
}

const person1 = new Person("father");
person1.greet("aaa");
console.log(person1);

type AddFn = (a: number, b: number) => number;

let add2: AddFn;

add2 = (n1: number, n2: number) => {
  return n1 + n2;
};
