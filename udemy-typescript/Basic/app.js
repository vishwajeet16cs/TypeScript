"use strict";
exports.__esModule = true;
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result :" + num);
    return;
}
printResult(53);
console.log(printResult(53)); //undefine
var combineValues;
combineValues = add;
combineValues = 5;
console.log(combineValues(8, 8));
