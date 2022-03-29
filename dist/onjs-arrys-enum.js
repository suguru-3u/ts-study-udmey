"use strict";
// const person: {
//     name: string;
//     age: 30;
// }
/**
 * なるべき型推論に任せた方が良い！
 * Tuple型よき
 */
// const person:{
//     name: string;
//     age: number;
//     hobbites: string[];
//     role: [number, string];
// } = {
//     name: 'test',
//     age: 30,
//     hobbites: ['support', 'Cooking'],
//     role: [2, 'author'],
// };
// console.log(person);
// let favoriteActiive: string[];
// favoriteActiive = ['spo',];
// for(const hobby of person.hobbites){
//     console.log(hobby.toUpperCase());
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ"] = 1] = "READ";
    Role[Role["ATOUR"] = 2] = "ATOUR";
})(Role || (Role = {}));
const person = {
    name: 'test',
    age: 30,
    hobbites: ['support', 'Cooking'],
    // role: [2, 'author'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('管理者');
}
