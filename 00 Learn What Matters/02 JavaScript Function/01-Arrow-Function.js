/* Arrow Functions */

// Single Statement
const myArrow = (a, b) => a + b;
console.log(myArrow(1, 2));

// Multiple Statements
const myArrow2 = (name) => {
  console.log(`Hello, ${name}`);
  console.log("Hope! Have a good day.");
};

myArrow2("Sohan");

// No Parameters
const myArrow3 = () => console.log("Love u 3000");
myArrow3();
