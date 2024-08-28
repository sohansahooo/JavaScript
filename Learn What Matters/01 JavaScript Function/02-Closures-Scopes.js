/* Scope 
    -- Global Scope (Declared globally, Access everywhere)
    -- Local Scope (Also "function scope", only access and declare within the function)
    -- Nested Scope (Scope inside of another scope)
*/

// Global & Local Scope
let a = 1;

function scope() {
    let a = 2;
    console.log(a);
}

scope();
console.log(a);


// Nested Scope
let c = "global 1st";

function scope2() {
    let c = "local 2nd";
    console.log(c);

    function scope3() {
        let c = "nested 3rd";
        console.log(c);
    }
    scope3();
}

scope2();
console.log(c);



// Closure (Lexical Scoping)
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }

init();



/* Bind, Call, Apply */

// Bind
function add(x, y) {
    console.log(this); // window object
    return x + y;
}

let addTwo = add.bind({ foo: 'bar' }, 2); // bind the function to an object and set the first argument
console.log(addTwo(3)); // outputs 5

// Call
function multiply(x, y) {
    console.log(this); // window object
    return x * y;
}

console.log(multiply.call({ foo: 'bar' }, 2, 3)); // outputs 6

// Apply
function sum(x, y) {
    console.log(this); // window object
    return x + y;
}

console.log(sum.apply({ foo: 'bar' }, [2, 3])); // outputs 5

// Example of using bind, call, and apply with an object
let person = {
    name: 'John',
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

let anotherPerson = {
    name: 'Jane'
};

person.sayHello(); // outputs "Hello, my name is John"

let boundSayHello = person.sayHello.bind(anotherPerson);
boundSayHello(); // outputs "Hello, my name is Jane"

person.sayHello.call(anotherPerson); // outputs "Hello, my name is Jane"

person.sayHello.apply(anotherPerson); // outputs "Hello, my name is Jane"