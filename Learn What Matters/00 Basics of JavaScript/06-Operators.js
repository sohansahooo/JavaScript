/* Operators:
        1. Arithmetic Operators (+, -, *, /, %, **, ++, --)
        2. Comparision Operators (==, ===, !=, !==, <, <=, >=, .)
        3. Logical Operators (&&, ||, !)
        4. Assignment Operators (=, +=, -=, *=, /=, %=, **=)
        5. Bitwise Operators (&, |, ^, ~, <<, >>, >>>)
        6. Ternary Operators ('condition? value1 : value2')
*/

/* 1. Arithmetic Operators (+, -, *, /, %, **, ++, --) */

let a = 10;
let b = 20;
console.log(a+b);       // sums
console.log(a-b);       // substract
console.log(a*b);       // multiplication
console.log(a/b);       // division
console.log(a%b);       // remainder
console.log(a**b);      // exponentiation
a++;    // increament to 1
a+=2;   // increament to 2
console.log(a);         // increament
a--;    //decreament to 1
a-=3;   // decreament to 3
console.log(a);         // decreament


/* 2. Comparision Operators (==, ===, !=, !==, <, <=, >=, .) */

let c = 10;
let d = 20;
console.log(c==d);      // loose equality
console.log(c===d);     // strict equality
console.log(c!=d);      // loose inequality
console.log(c!==d);     // strict inequality
console.log(c<d);       // less than
console.log(c>d);       // greater than
console.log(c<=d);      // less than or equal to
console.log(c>=d);      // greater than or equal to

const obj = {   // object
        c: 80,  // property 1
        d: 60   // property 2
}
console.log(obj.d);     // access properties of an object (dot operator)


/* 3. Logical Operators (&&, ||, !) */

let e = 10;
let f = 20;
console.log(e<f && f>e);        // logical AND (both condition should be same)
console.log(e<f || f<e);        // logical OR (either one condition true to be true)
console.log(!(e<f));            // logical NOT (reverse the condition)


/* 4. Assignment Operator (=, +=, -=, *=, /=, %=, **=)*/

let g = 0;
g = 10;
g += 10;   // g = g + 10
g -= 10;   // g = g - 10
g *= 10;   // g = g * 10
g /= 10;   // g = g / 10
g %= 10;   // g = g % 10
g **= 10;  // g = g ** 10
console.log(g);


/* 5. Bitwise Operators (&, |, ^, ~, <<, >>, >>>) */

let h = 10; // 00001010 in binary
let i = 4; // 00000100 in binary

let andResult = h & i;                        // 00000000 in binary
let orResult = h | i;                         // 00001110 in binary
let xorResult = h ^ i;                        // 00001110 in binary
let notResult = ~h;                           // 11110101 in binary
let leftShiftResult = h << 2;                 // 00101000 in binary
let rightShiftResult = h >> 2;                // 00000101 in binary
let zeroFillRightShiftResult = h >>> 2;       // 00000101 in binary

console.log( andResult, orResult, xorResult, notResult, leftShiftResult, rightShiftResult, zeroFillRightShiftResult);


/* 6. Ternary Operator (condition ? true : false) */

let j = 100;
let k = 60;
let result = (j>k ? "It's True" : "It's False")
console.log(result); 









/* ------------------------------------------------ */
/* Operator Precedence (Left to Right):
        1. Parenthesis ()
        2. Exponents
        3. Multiplication & Division & Modulo
        4. Addition & Subtraction
*/

let equation = 2 + 5 / 7 - 3 ** 2 % 3;
console.log(equation);
