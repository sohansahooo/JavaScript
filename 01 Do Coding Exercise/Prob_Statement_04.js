/* 
Write a function that tells if a given number is even or odd
*/

function evenOdd(num) {
  if (num >= 0 && num % 2 === 0) {
    console.log(num, "is Even");
  } else if (num >= 0 && num % 2 !== 0) {
    console.log(num, "is Odd");
  } else {
    throw new Error("Work on +Ve numbers");
  }
}

function evenOddShort(num) {
  console.log(num % 2 === 0 ? `${num} is Even` : `${num} is Odd`);
}

function evenOddSwitch(num) {
  switch (num % 2) {
    case 0:
      console.log(`${num} is Even`);
      break;
    case 1:
      console.log(`${num} is Odd`);
      break;
  }
}

evenOdd(201);
evenOddShort(26);
evenOddSwitch(23);
