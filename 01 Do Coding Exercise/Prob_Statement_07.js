/* 
Write a function that calculate factorial of a given number
Input : A number, positive integer -> 0, 1, 4, 7...
Return: Factorial of that number
Factorial: Multiplication of all positive integers from 1 to a given number
*/

function factorial(number) {
  if (number < 0) {
    throw new Error("Must be greater than 0");
  }
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result *= i;
  }
  console.log(result);
}

function factorialRec(number) {
  // console.log("number is ", number);
  if (number < 0) {
    throw new Error("Must be greater than 0");
  }
  if (number === 0) {
    return 1;
  }
  return number * factorialRec(number - 1);
}

factorial(3);
console.log(factorialRec(4));
