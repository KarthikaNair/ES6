"use strict";

var _ref = [1, 2, 3, 4, 5]; //Array

a = _ref[0];
b = _ref[1];
c = _ref[2];
d = _ref[4];

console.log(a, b, c, d);

//rest  
head = 1;
tail = [2, 3, 4, 5];

console.log(head);
console.log(tail);

//object destructuring short hand
var obj = { a: "1", b: "2" };
var a = obj.a,
    b = obj.b;

console.log(a, b);

//function return muptiple values
function returnTwoValues() {
    return {
        first: 1,
        second: 2
    };
}

var _returnTwoValues = returnTwoValues(),
    first = _returnTwoValues.first,
    second = _returnTwoValues.second;

console.log(first, second);