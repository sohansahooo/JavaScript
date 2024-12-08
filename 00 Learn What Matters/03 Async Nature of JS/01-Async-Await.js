/* Example of Async/Await: */
function add(num1, num2) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(num1 + num2), 1000);
    });
  }
  
  async function processResult() {
    const sum = await add(5, 10);
    console.log(`Sum: ${sum}`);
  }





// Async function:
async function greet(name) {
  const message = `Hello, ${name}!`;
  return Promise.resolve(message);
}

greet("John").then(console.log); // Output: Hello, John!

// Awaiting a promise:
function add(num1, num2) {
  return new Promise((resolve) => resolve(num1 + num2));
}

async function processResult() {
  const sum = await add(5, 10);
  console.log(`Sum: ${sum}`);
}