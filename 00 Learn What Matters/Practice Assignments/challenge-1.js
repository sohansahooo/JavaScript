function BMI(mass, height) {
  return mass / (height * height);
}

const massMark = 78;
const heightMark = 1.88;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = BMI(massMark, heightMark);
const BMIJohn = BMI(massJohn, heightJohn);

console.log("BMI of Mark:", BMIMark);
console.log("BMI of John:", BMIJohn);
