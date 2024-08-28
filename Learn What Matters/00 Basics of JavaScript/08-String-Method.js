/* You can write like this in a string to avoid writing complication:

   "Content, "blah blah blah..."" ✖️
   "Content, \"blah blah blah...\"" ✔️ (\" escaping)
*/


/* (`content ${...}, whatever you write`) is String Interpolation using template literals
   ${...} is template literals 
*/
const username = 'SuperBlaze';
let age = '21';
let address = 'Ohio';
let openToWork = true;

console.log(`The username is ${username}, age is ${age}, address is ${address} and open to work ${openToWork}.`);


/* length: returns the length of the string */
let a = "   Hey! How are you.   "
console.log(a.length); // 23 letters using spaces 

/* toUppercase() */
console.log(a.toUpperCase());

/* toLowercase() */
console.log(a.toLowerCase());

/* trim */
console.log(a.trim()); // removes leading and trailing spaces

/* split() */
let b = "Hello, how are you doing today?"
console.log(b.split(' ')); // returns an array of words

/* indexOf() */
let c = "RockStar"
console.log(c.indexOf('k')); // returns the index of the first occurrence of the specified value

/* replace() */
let d = "https://example.com/example%20something"
console.log(d.replace('%20', '-')); // returns a new string with the specified value replaced

/* includes() */
let e = "Hello, how are you doing today?"
console.log(e.includes('doing')); // returns true if the string includes the specified value

/* substring() */
let f = "Hello, how are you doing today?"
console.log(f.substring(7, 14)); // returns the characters in a string between two specified inclusive and exclusive index

/* substring() vs slice()
   -- substring() is inclusive of the start index and exclusive of the end index
   -- slice() is inclusive of both the start and end index
*/