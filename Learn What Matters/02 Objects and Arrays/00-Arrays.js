/* Array 
    -- Resizable & it can contain mix of data types.
    -- Arrays are zero indexed, starts from Zero (0).
    -- In copy-operations it create shallow copies. 
    (whose properties share same reference points means change in original array)
*/

let myArray = [0, 1, 2, 3, 4, 5, 6]
console.log(myArray[3]);

// Array Methods:
// push()
myArray.push(7, 8, 9, 10)         // Push method adds element at the end of the array.
console.log(myArray);

// pop()
myArray.pop()         // Pop method removes element at the end of the array.
console.log(myArray);

// shift()
myArray.shift()       // Shift method removes element at the beginning of the array.
console.log(myArray);

// unshift()
myArray.unshift(-1, 0)    // Unshift method adds element at the beginning of the array.
console.log(myArray);

// splice()
myArray.splice(2, 3)     // Splice method removes element at the specified index.
console.log(myArray);

// slice()
myArray.slice(2, 5)      // Slice method returns a new array from the specified index.
console.log(myArray);

// Concat():
const myArray1 = [1, 2, 3, 4, 5]
const myArray2 = [6, 7, 8, 9, 10]

const myArray3 = myArray1.concat(myArray2)
console.log(myArray3);

// indexOf():
console.log(myArray3.indexOf(10));      // index number of 10 is 9

// includes():
console.log(myArray3.includes(10));     // is 10 included, yes. - true

// Join()
let joinString = myArray.join("-");
console.log(joinString);                // Output: 0-1-2-3-4-5-6

// sort():
myArray.sort();
console.log(myArray);                   // Output: [0, 1, 2, 3, 4, 5, 6]

// reverse():
myArray.reverse();
console.log(myArray);                   // Output: [6, 5, 4, 3, 2, 1, 0]


// +++++++++++++++++++++++++++++++++++++++++ Multi-Dimensional Array +++++++++++++++++++++++++++++++++++++++++

let a = [1, 2, 3]
let b = [4, 5, 6]
let c = [7, 8, 9]
let d = [a, b, c]
console.log(d);
console.log(d[0][2]);   // to choose a specific index


// +++++++++++++++++++++++++++++++++++++++++ Array Destructuring +++++++++++++++++++++++++++++++++++++++++

/* It allows to extract values from an array and assign them to variables in a concise and expressive way. */

let numbers = [1, 2, 3];
let [first, second, third] = numbers

console.log(first);   // Output: 1
console.log(second);  // Output: 2
console.log(third);   // Output: 3

// ----------------------------------------

const obj = { a: 1, b: 2, c: 3 };

const { objA, objB, objC } = obj;

console.log(objA); // 1
console.log(objB); // 2
console.log(objC); // 3



// +++++++++++++++++++++++++++++++++++++++++ Spread Operator +++++++++++++++++++++++++++++++++++++++++

/* Denotes (...) and Used to expand an array or an object into individual elements. */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArr = [...arr1, ...arr2];
console.log(newArr); // [1, 2, 3, 4, 5, 6]

// ----------------------------------------

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const newObj = { ...obj1, ...obj2 };
console.log(newObj); // { a: 1, b: 2, c: 3, d: 4 }

// ----------------- Use Case ---------------------

const arr = [1, 2, 3, 4, 5];
const [begin, ...rest] = arr;
console.log(begin); // 1
console.log(rest); // [2, 3, 4, 5]


