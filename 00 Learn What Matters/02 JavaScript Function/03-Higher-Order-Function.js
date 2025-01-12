// Higher Order Function
function createGreeter(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const greetHello = createGreeter("Hello");
greetHello("John"); // Output: Hello, John!

/* Difference between higher order function and nested function */

/* Higher Order Function */
// This is a higher-order function
function higherOrderFunction(func) {
  return function () {
    console.log("Before the function is called.");
    func(); // Calling the function passed as an argument
    console.log("After the function is called.");
  };
}

// A simple function that will be passed into the higher-order function
function sayHello() {
  console.log("Hello!");
}

const decoratedFunction = higherOrderFunction(sayHello); // Passing sayHello to higherOrderFunction
decoratedFunction(); // Calling the decorated function

/* Nested Function */
function outerFunction() {
  // This is a nested function
  function nestedFunction() {
    console.log("I'm a nested function!");
  }
  nestedFunction(); // Calling the nested function
}

outerFunction(); // Calling the outer function, which in turn calls the nested function
