/* Promise:
A promise is an object that represents the eventual completion (or failure) of an asynchronous operation, along with its resulting value. When you call a
function that returns a promise, it immediately starts executing, but its result isn't available yet. The promise will eventually resolve to either a successful      
outcome or an error.

Promise States:
A promise has three main states:
    1.  **Pending**: Initial state, where the operation hasn't been completed yet.
    2.  **Fulfilled (Resolved)**: Successful completion of the operation; the promise returns the result.
    3.  **Rejected**: Failure to complete the operation; the promise returns an error.
*/


function myAsyncFunction() {
    return new Promise((resolve, reject) => {
      // Simulating a time-consuming operation
      setTimeout(() => {
        if (true) {
          resolve("Operation completed successfully!"); // Fulfill the promise
        } else {
          reject("An error occurred"); // Reject the promise
        }
      }, 2000);
    });
  }
  
  // Usage:
  myAsyncFunction().then((result) => console.log(result))
                    .catch((error) => console.error(error));



/* Common Promise Methods:

    - then(): Handles the resolved value or error returned by the promise.
    - catch(): Handles any errors thrown during the execution of the promise.
    - finally(): A callback function that will be executed regardless of whether the promise is fulfilled or rejected.
    - all(): Used with arrays of promises, this method returns a new promise that resolves when all promises in the array are resolved.
*/



/* Promise Chaining:

One of the most powerful features of promises is chaining. This allows you to chain multiple operations together using `.then()`.
*/

function operation1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Operation 1 completed"), 1000);
  });
}

function operation2(result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(`${result} | Operation 2 completed`);
      } else {
        reject(`Error in operation 2`);
      }
    }, 2000);
  });
}

// Chaining the promises
operation1()
.then(operation2)
.then((result) => console.log(result))
.catch((error) => console.error(error));
