/* Control Flow in Javascript:
            1. Conditionals (if...else)
            2. Loops (for, while, do...while)
            3. Switch (cases, break, continue, default)
*/

// 1. Conditionals (if...else)

if (true) {
    console.log("This is True");    // if the condition is true, then the code inside the curly braces will be executed
}

else {
    console.log("This is False");   // if the condition is false, then the code inside this curly braces will be executed
}


/* 2. Loops (for, while, do...while) */

/*  for Loop:
      for (initialization; condition; iteration) {
        //  code to be executed in each iteration
      } 
*/

for (let i = 1; i <= 10; i++) {
  if (i==6) {
    continue; // skip to print this condition
  }
    console.log(`Hello ${i}`);
}


// while

let i = 21;   // initialization

while (i <= 36) {   // condition
  console.log(`Hello ${i}`);
  i++;    // iteration
}


// do...while

let j = 11;

do {
  console.log(j);
  j++;
} while (j <= 15);


/* 3. Switch (cases, break, continue, default) */

let day = 1;

switch (day) {
  case 1:                          // Cases are like options
    console.log("Monday");
    break;                         // Break used to stop execution when case matched
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:                        // It will print if no case is matched
    console.log("Invalid day");
}

console.log(`Case is ${day}`)