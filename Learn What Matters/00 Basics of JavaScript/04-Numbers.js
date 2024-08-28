/* Numbers & Math */

// +++++++++++++++++++++++++++++++++++++++++ Numbers & Math +++++++++++++++++++++++++++++++++++++++++

// Numbers:
// Example: 1
const score = "600"
console.log(typeof(score));     // Output: string

/* Functions (no dot) */
// parseInt()
const validScore = parseInt(score);
console.log(typeof(validScore));     // Output: number

// parseFloat()
const validFloatScore = parseFloat(score);
console.log(typeof(validFloatScore), validFloatScore);     // Output: number 600.00 (there is no separate float data type)



/* Methods (includes dot) */
console.log(score.toString().length);       // Output: 3
console.log(validFloatScore.toFixed(2));              // Output: 600.00

const preNumber = 26.869
console.log(preNumber.toPrecision(3));      // Output: 26.9

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-US'));      // Output: 10,000,000


// Math:
console.log(Math);
console.log(Math.abs(-3));                          // Output: 3
console.log(Math.round(54.67487));                  // Output: 55
console.log(Math.floor(54.658675));                 // Output: 54
console.log(Math.ceil(54.45876));                   // Output: 55
console.log(Math.min(5, 9, 3, 4, 1, 6));            // Output: 1
console.log(Math.max(5, 9, 3, 4, 1, 6));            // Output: 9
console.log(Math.pow(2, 10));                       // Output: 1024
console.log(Math.sqrt(196));                        // Output: 14
console.log(Math.PI);                               // Output: 3.141592653589793


console.log(Math.random());                         // value 0 to 1
console.log((Math.random()*10) + 1);                // value 0 to 10
console.log(Math.floor(Math.random()*10) + 1);      // value 1 to 9

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);      // value range 10 to 20





