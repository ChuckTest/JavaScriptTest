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

https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheeps/train/javascript
var countSheep = function (num) {
    var array = [];
    for (var i = 1; i <= num; i++) {
        array.push(`${i} sheep...`);
    }
    var s = array.join('');
    return s;
}