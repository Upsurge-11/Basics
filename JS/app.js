/* In javascript ; is not necessary but appreciated */
"use strict";

console.log("Hello World!");

// in-line comment.

var num = 5;

/* This is a multi-line
comment */

var myName = "Arghyadeep";

myName = 8;

let ourCompany = "Cybercop";

const pi = 3.14;

var a;
var b = 2;
console.log(a);
a = 7;
b = a;

console.log(a);
console.log(b);

var c = "I am ";

c = c + "King";

console.log(c);

var sum = a + b;
var diff = a - b;
var mul = a * b;
var div = a / b;
console.log(sum);
console.log(diff);
console.log(mul);
console.log(div);

a++;
console.log(a);

a--;
console.log(a);

var myDecimal = 5.7;
console.log(myDecimal);

a += 12;

console.log(a);

a -= 2;

console.log(a);

var l = c.length;

console.log(l);

function helloWorld(name) {
  console.log("Hello " + name);
}

helloWorld("Arghyadeep");

function nextInLine(arr, item) {
  arr.push(item);

  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: "+ JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("Before: "+ JSON.stringify(testArr));

function ourTrueOrFalse(isItTrue) {
  if(isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

console.log(ourTrueOrFalse(true));
console.log(ourTrueOrFalse(false));

function testEqual(val) {
  if(val == 3) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual('3'));

function testStrict(val) {
  if(val === 3) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict('3'));

// Objects.

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

var nameValue = ourDog.name;
var legsValue = ourDog["legs"];
console.log(nameValue);
console.log(legsValue);
ourDog.name = "Odin";
nameValue = ourDog.name;
console.log(nameValue);

ourDog.bark = "Bhow-Bhow";

console.log(ourDog.bark);

delete ourDog.bark;

function checkObj(checkProp) {
  if ( ourDog.hasOwnProperty(checkProp)) {
    return ourDog[checkProp];
  }
  return "Not Found";
}

console.log(checkObj("name"));
console.log(checkObj("hello"));

var a = [];

for(var i = 0; i < 10; i++) {
  a.push(i+1);
}

console.log(a);

console.log(Math.random());

console.log(Math.floor(Math.random()*20));

console.log(parseInt("56"));
console.log(parseInt("HuiHui"));
console.log(parseInt("11011", 2));

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 69;
  } catch (e) {
    console.log(e);
  }
}

const PI = freezeObj();
console.log(PI);

const magic = () => new Date();

console.log(magic());

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5]));

const SUM = function() {
  return function SUM(...args) {
    return args.reduce((a, b) => a+b, 0);
  };
};

console.log(SUM(1, 2, 3));

console.log(5+"9");
