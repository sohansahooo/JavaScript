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
  