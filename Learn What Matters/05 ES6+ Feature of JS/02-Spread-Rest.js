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