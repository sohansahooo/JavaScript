**Error Handling**

JavaScript provides several ways to handle errors that occur during execution. Understanding how to properly
handle errors can help prevent bugs and improve code maintainability.

**Types of Errors**

1. **Syntax Errors**: These occur when the JavaScript interpreter encounters an invalid or missing syntax, such as
using a reserved word as an identifier.
2. **Runtime Errors**: These occur when the JavaScript engine executes the code, but encounters a problem that
prevents it from running correctly.
3. **Reference Errors**: These occur when trying to access a property or method on an undefined object.

**Error Handling Techniques**

1. **Try-Catch Blocks**
---------------------

The most common way to handle errors in JavaScript is by using try-catch blocks. The `try` block contains the code
that might cause an error, and the `catch` block contains the code to execute if an error occurs.
```javascript
try {
  // Code that might throw an error
} catch (error) {
  // Handle the error here
}
```
* **Try Block**: This is where you put the code that might cause an error.
* **Catch Block**: This is where you handle the error. You can access the error object using `error`.

Example:
```javascript
try {
  let x = 1 / 0;
} catch (error) {
  console.log(`Error: ${error.message}`);
}
```
2. **Finally Blocks**
-------------------

The `finally` block is optional and executes whether an error occurred or not.
```javascript
try {
  // Code that might throw an error
} catch (error) {
  // Handle the error here
} finally {
  // This code always runs, regardless of whether an error occurred
}
```
Example:
```javascript
try {
  let x = 1 / 0;
} catch (error) {
  console.log(`Error: ${error.message}`);
} finally {
  console.log("Cleanup completed");
}
```
3. **Error Handling Functions**

You can also use built-in functions to handle errors, such as `console.error()` or `throw`.

Example:
```javascript
try {
  let x = 1 / 0;
} catch (error) {
  console.error(error);
}

// Using throw to explicitly raise an error
let y = 'string';
if (!Number(y)) {
  throw new Error('Invalid number');
}
```
**Best Practices**

* **Catch all errors**: Use a generic `catch` block to handle all types of errors.
* **Log the error**: Use `console.error()` or another logging mechanism to record the error for debugging
purposes.
* **Re-throw the error**: If you need to re-throw the error, do so using `throw`.
* **Don't swallow errors**: Avoid catching errors without handling them properly.

**Common Error Handling Mistakes**

1. **Swallowing errors**: Ignoring or suppressing errors can lead to hidden bugs and difficult debugging.
2. **Catching too many types of errors**: Avoid catching multiple error types in the same catch block, as this can
make code harder to understand and maintain.
3. **Not logging errors**: Failing to log errors can make it difficult to diagnose issues.

**Conclusion**

Error handling is an essential part of writing robust JavaScript code. By using try-catch blocks, finally blocks,
and error handling functions, you can ensure your code handles errors gracefully and provides valuable debugging
information.