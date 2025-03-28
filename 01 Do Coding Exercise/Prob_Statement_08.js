/*
Write a function that tells if provide year is a leap year or not
*/

function leapYear(year) {
  if (year < 0 && typeof year !== Number) {
    throw new Error("Year must be +VE");
  }
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is Leap year`);
  } else {
    console.log(`${year} is not a Leap year`);
  }
}

function leapYearShort(year) {
  if (year < 0 && typeof year !== Number) {
    throw new Error("Year must be +VE");
  }
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? console.log(`${year} is a Leap year`)
    : console.log(`${year} not a Leap year`);
}

leapYear(2000);
leapYearShort(2025);
