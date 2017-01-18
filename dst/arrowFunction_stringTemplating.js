"use strict";

//single parameter
sayHello = function sayHello(name) {
    return "Hello there " + name;
};
//multiple parameters
sayHi = function sayHi(name, surname) {
    return "Hi there " + name + " " + surname;
};

//return object
concurrentAdd = function concurrentAdd(one, two, three) {
    return {
        a: one + two,
        b: two + three
    };
};

console.log(sayHello("Karthika"));
console.log(sayHi("Karthika", "Nair"));

var _concurrentAdd = concurrentAdd(1, 2, 3),
    a = _concurrentAdd.a,
    b = _concurrentAdd.b;

console.log(a, b);