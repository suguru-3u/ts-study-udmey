"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(num);
}
function addAndHandle(n1, n2, cd) {
    const result = n1 + n2;
    cd(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
let combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
// printResult(add(3, 4));
