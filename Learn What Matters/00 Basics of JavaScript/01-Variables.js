/* There're three types of variables in javascript :
    - var (which can be reassigned and redeclared, function scoped)
    - let (which can be reassigned but can't be redeclared in the same scope, block scoped)
    - const (which can't be reassigned and can't be redeclared in the same scope, block scoped)
*/


/* +++++++++++++++++++++ Variables +++++++++++++++++++++ */

var a = 10;
var a = 20; // var can be reassigned and the the latest one will be printed
console.log(a);

let b = "It's not Ok";
b = "It's Ok"; // let can be reassigned but can't be declared again
console.log(b);

/* In the above b is reassigned again but, let isn't declared again that's 
why code is run otherwise if we declare let again it throws SyntaxError */

const c = 10;
// c = 20; // const can't be reassigned and can't be declared again
console.log(c);







/* ++++++++++++++++++++ Accept User Input ++++++++++++++++++++ 
            -- Window Prompt
            -- HTML Textbox
*/

/* let yourName;
// yourName = prompt("Enter your username:"); // Window Prompt
// console.log(yourName);

document.getElementById('submit').onclick = function(){
    yourName = document.getElementById('inp').value;
    document.getElementById('h1').textContent = `Welcome ${yourName}`
} */



/* const applied example
const pi = 3.14159;
let radius;
let circumference;
// pi = 450    // for const it give an error

radius = window.prompt('Enter Radius of a circle');
radius = Number(radius);
circumference = 2 * pi * radius;

// console.log(`The circumference of a circle is ${circumference}`);
document.getElementById('const').textContent = `Circumference of circle is ${circumference}`; */


