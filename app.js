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

//https://www.codewars.com/kata/5865918c6b569962950002a1/solutions/javascript
function strCount(str, letter) {
    return str.split(letter).length - 1;
}


//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
    var result = 2 * Math.PI * circle.radius;
    return customToFixed(result, 6);
}

function customToFixed(n, precision) {
    var power = Math.pow(10, precision);
    return Math.round(n * power) / power;
}


//https://www.codewars.com/kata/expressions-matter/train/javascript
function expressionMatter(a, b, c) {
    var array = [];
    array.push(a + b + c);
    array.push(a + b * c);
    array.push((a + b) * c);
    array.push(a * b + c);
    array.push(a * (b + c));
    array.push(a * b * c);
    return Math.max(...array);
}


//https://www.codewars.com/kata/the-feast-of-many-beasts/train/javascript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
function feast(beast, dish) {
    return beast.slice(0, 1) === dish.slice(0, 1) && beast.slice(-1) === dish.slice(-1);
}

//https://www.codewars.com/kata/grasshopper-terminal-game-combat-function-1/train/javascript
function combat(health, damage) {
    var result = health - damage;
    if (result < 0) {
        result = 0;
    }
    return result;
}

//https://www.codewars.com/kata/training-js-number-18-methods-of-string-object-concat-split-and-its-good-friend-join/train/javascript
function splitAndMerge(str, sp) {
    var space = ' ';
    return str.split(space).map(x => x.split('').join(sp)).join(space);
}


//https://www.codewars.com/kata/century-from-year/train/javascript
function century(year) {
    var result = year / 100;
    if (year % 100 === 0) {
    } else {
        result++;
    }
    return Math.floor(result);
}


//https://www.codewars.com/kata/convert-to-binary/train/javascript
function toBinary(n) {
    return Number.parseInt(n.toString(2));
}