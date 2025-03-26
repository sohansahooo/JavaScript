/*
Write a function that finds and prints the smallest number among three given numbers.
Input : 3 numbers
*/

function smallestNum(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    console.log(`${num1} is Smallest (num1)`);
  } else if (num2 < num1 && num2 < num3) {
    console.log(`${num2} is Smallest (num2)`);
  } else {
    console.log(`${num3} is Smallest (num3)`);
  }
}

function smallestNumShort(num1, num2, num3) {
  const smallest = Math.min(num1, num2, num3);
  return smallest;
}

smallestNum(3, 2, 1);
smallestNum(2, 1, 3);
smallestNum(1, 2, 3);
smallestNum(3, 3, 3);
console.log(smallestNumShort(32, 33, 34));
