/*
Write a function that calculates and prints the area of a rectangle given its length and width.
*/

function rectangle(width, length) {
  if ((length > 0) & (width > 0)) {
    const area = length * width;
    console.log(area);
  } else {
    throw new RangeError("Assign +VE Value");
  }
}

rectangle(-20, 30);
