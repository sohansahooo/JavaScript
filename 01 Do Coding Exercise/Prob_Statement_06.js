/*
Write a function that returns the reverse of a string
*/

function rString(string) {
  if (typeof string !== "string") {
    throw new Error("Only string");
  }
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  console.log(reverse);
  return reverse;
}

function rStringShort(string) {
  const frag = string.split("");
  const reverse = frag.reverse();
  const result = reverse.join("");
  console.log(result);
}

function reverseString(string, index = 0) {
  if (index === string.length) {
    return "";
  }
  //   return reverseString(string.substring(1)) + string[0];
  return reverseString(string, index + 1) + string[index];
}

rString("sohan");
rStringShort("ohio");
console.log(reverseString("sohan sahoo"));
