// Higher Order Function
function createGreeter(greeting) {
    return function(name) {
      console.log(`${greeting}, ${name}!`);
    };
  }
  
  const greetHello = createGreeter("Hello");
  greetHello("John"); // Output: Hello, John!