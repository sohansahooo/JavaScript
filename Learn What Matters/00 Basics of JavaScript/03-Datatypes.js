/* Datatypes in javascript 
1. Premitive (Number, String, Boolean, Null, Undefined, Symbol, BigInt)
2. Non-Premitive (These're reference data type (), {}, [], ... etc.)
*/


/* +++++++++++++++++++++ Premitive Type +++++++++++++++++++++ */

// Number (it's all about numbers or integers up to 2^53 - 1)
let num = 10;
console.log(typeof num);

// String ("" or '')
let name = 'Sohan';
console.log(typeof name);

// Boolean (true or false)
let isTrue = false;
console.log(typeof isTrue);

// Null (it's all about null)
let myNull = null;
console.log(myNull === null); // true
console.log(typeof myNull); // 'object' (due to historical bug)

// Undefined (it's all about undefined)
let myUndefined;
console.log(typeof myUndefined);    // 'myUndefined' isn't defined

// Symbol (it's all about symbol)
let mySymbol = Symbol("A");   // it's a unique value use like this
console.log(typeof mySymbol);

// BigInt (no-limitation to hold integers)
let myBigInt = BigInt(10);
console.log(typeof myBigInt);





/* +++++++++++++++++++++ Non-Premitive or Reference Type +++++++++++++++++++++ */

// [] this is an array (ordered list of values or collections of values of any data type)
const colors = ['red', 'green', 'blue'];
console.log(colors); // Output: ['red', 'green', 'blue']

// {} this is an object (collection of key value pairs)
const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer'
};
console.log(person); // Output: { name: 'John Doe', age: 30, occupation: 'Software Developer' }

// () Functions (blocks of code that can be executed multiple times)
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  greet('Alice'); // Output: Hello, Alice!

// Dates 
const today = new Date();
console.log(today); // Output: current date and time

// RegExp (Regular Expressions)
const regex = /\d+/g;
const str = 'abc123def456';
console.log(str.match(regex)); // Output: ['123', '456']

// Sets 
const uniqueColors = new Set(['red', 'green', 'blue', 'red']);
console.log(uniqueColors); // Output: Set { 'red', 'green', 'blue' }

// Maps 
const phoneBook = new Map();
phoneBook.set('John Doe', '123-456-7890');
console.log(phoneBook.get('John Doe')); // Output: '123-456-7890'
