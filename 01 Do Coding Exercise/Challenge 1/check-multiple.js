/*
3. Check Multiple Numbers:
    -- Task: Write a program to check if each number in a given list is even or odd.
        Input: numbers (a list of integers)
        Output: A list of "Even" or "Odd" corresponding to each number
    Example:
    Input: numbers = [4, 7, 10]
    Output: ["Even", "Odd", "Even"]
*/
// From Scratch:
function evenOdd(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push("Even");
        } else {
            result.push("Odd");
        }
    }
    return result;
}

console.log(evenOdd([4, 7, 10]));



// Using map():
// function evenOdd(numbers) {
//     return numbers.map(num => num % 2 === 0 ? "Even" : "Odd");
// }

// console.log(evenOdd([4, 7, 10]));