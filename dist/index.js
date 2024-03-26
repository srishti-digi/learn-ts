"use strict";
let id = 5;
let company = "djjjf";
let isPublished = true;
let ids = [1, 2, 3, 4, 5];
// ids.push('hello');
let arr = [3, "fhjr", true];
// arr.push(fj);
// Tuple
let person = [2, "fdhfj", true];
// Tuple array
let employee;
employee = [
    [1, "fjfk"],
    [2, "rm"],
    [7, "rkgjkr"],
];
// Union
let pid;
pid = 6;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 7] = "Left";
    Direction1[Direction1["Right"] = 8] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Right);
const user = {
    name: 'hf',
    id: 22,
};
// Type assertion
let cid;
let customerId = cid;
// function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
const user1 = {
    name: 'hf',
    id: 22,
};
