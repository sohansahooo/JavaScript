/* Piece of code that repeats often, we can store that block of code as function. 
    -- Code Reusability
    -- Task Performance
    -- Return Values
    -- Code Organization
*/

/* Format of Function:
    Step 1: Function Define: 
                function functionName() {
                    //    do some work
                 } 

                              or

                 function functionName(param1, param2...) {    // () Parameter
                    //    do some work
               }

    Steep 2: Function Call: 
                 functionName();    // () Argument
*/

// Example 1:
function myFunction() {
  console.log("This's my name: Sohan");
  console.log("This's my age: 21");
}

myFunction(); // Function Call or Function Invoke

// Example 2:
function yourFunction(msg) {
  console.log(msg);
}

yourFunction("I Love 3000");

// Example 3:
function calc(x, y, z) {
  return `Numbers are: ${x + y + z}`;
}

calc(3, 6, 12);

// Example 4:
function greet(message = "Hello") {
  for (let i = 1; i <= 5; i++) {
    console.log(`message ${i}`);
  }
}
greet("Hi");

// Applied Example:
function myMarks(Math, Eng, Science, Comp, Phy, Chem) {
  const totalMarks = Math + Eng + Science + Comp + Phy + Chem;
  const average = totalMarks / 6;

  const percentage = (totalMarks / 600) * 100;

  return percentage;
}

const myPercentage = myMarks(75, 80, 85, 90, 95, 100);
console.log(`Percentage: ${myPercentage}`);

/* Types of Functions: */

// 1. Named Function (Function Declaration)
function greet() {
  return "Hello";
}

// 2. Anonymous Function (Function Expression)
const greet = function () {
  return "Hello";
};

// 3. Arrow Function
const greet = () => {
  return "Hello";
};

// 4. IIFE
(function greet() {
  return "Hello";
})();
