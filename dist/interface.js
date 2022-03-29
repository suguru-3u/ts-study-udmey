"use strict";
/**
 * JSにはinterfaceは存在しない
 *
 */
let user1;
user1 = {
    name: "Max",
    // age: 33,
    greet(phrase) {
        console.log(phrase + "Hello");
    },
};
user1.greet("MUN");
class Person {
    constructor(n) {
        this.lop = "";
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " : Yee!");
    }
}
const person1 = new Person("father");
person1.greet("aaa");
console.log(person1);
let add2;
add2 = (n1, n2) => {
    return n1 + n2;
};
