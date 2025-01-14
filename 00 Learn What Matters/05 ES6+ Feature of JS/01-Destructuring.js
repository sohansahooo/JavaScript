// Array Destructuring
let numbers = [1, 2, 3];
let [first, second, third] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3

// Object Destructuring
const obj = { a: 1, b: 2, c: 3 };

const { objA, objB, objC } = obj;

console.log(objA); // 1
console.log(objB); // 2
console.log(objC); // 3

// Nested Destructuring
const user = {
  id: 1,
  info: {
    username: "sohan",
    email: "sohan@example.com",
  },
};

const {
  info: { username, email },
} = user;

console.log(username);
console.log(email);

// Default Destructuring
const settings = {
  theme: "dark",
};

const { theme, language = "en" } = settings;

console.log(theme); // Output: dark
console.log(language); // Output: en
