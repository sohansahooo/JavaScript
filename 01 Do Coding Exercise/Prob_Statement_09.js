/*
Write a function that calculates and prints the sum of the digits of a given number
*/

function sum(number) {
  if (number < 11) {
    throw new Error("Number must be atleast 2 digits");
  }
  const convert = number.toString().split("");
  let result = 0;
  convert.forEach((num) => {
    result += parseInt(num);
    return result;
  });
  console.log(typeof result, result);
}

sum(127);
