'use strict';

var car = null;
var type = typeof car;
console.log(type);

var message;
console.log(message);
var type2 = typeof message;
console.log(type2);

console.log('Hello world');

//https://www.codewars.com/kata/is-it-a-number/train/javascript
function isDigit(s) {
    return !isNaN(parseFloat(s)) && !isNaN(s - 0);
}

