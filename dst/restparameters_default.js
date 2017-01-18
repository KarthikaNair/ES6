"use strict";

//can have any number of parameters 
function needle_haystack(needle) {
    for (var _len = arguments.length, haystack = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        haystack[_key - 1] = arguments[_key];
    }

    if (haystack.indexOf(needle) != -1) {
        return true;
    }
    return false;
}
console.log(needle_haystack(2, 3, 4, 5, 6, 7));
console.log(needle_haystack(7, 3, 4, 5, 6, 7));

function defParEx() {
    var paraone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var paratwo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    return "I have a " + paraone + " and a " + paratwo;
}

console.log(defParEx("3", "5"));
console.log(defParEx("3"));
console.log(defParEx(undefined));