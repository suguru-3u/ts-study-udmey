"use strict";
/**
 * JSにはinterfaceは存在しない
 *
 */
let user1;
user1 = {
    name: "Max",
    age: 33,
    greet(phrase) {
        console.log(phrase + "Hello");
    },
};
user1.greet("MUN");
