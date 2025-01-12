// +++++++++++++++++++++++++++++++++++++++++ Objects +++++++++++++++++++++++++++++++++++++++++
/* Types:
-- Singleton
-- Object Literals (we discuss this one)
*/

function anArray() {
  const user = [
    { name: "John", age: 25, gender: "male" },
    { name: "Jany", age: 22, gender: "female" },
    { name: "Jerra", age: 22, gender: "female" },
    { name: "Jwel", age: 21, gender: "female" },
    { name: "Jizz", age: 26, gender: "female" },
  ];

  return user[3];
}

const firstUser = anArray();
console.log(firstUser, "< (key & their values)");

// Pass Function inside Object:
let user = {
  name: "John",
  age: 25,
  city: "New York",
  intro: function () {
    console.log(`Hello! ${this.name}`);
  },
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
user.intro();
console.log(user.hasOwnProperty("city"));

// +++++++++++++++++++++++++++++++++++++++++ Spread Operator +++++++++++++++++++++++++++++++++++++++++
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

const spread_obj = { ...obj1, ...obj2, ...obj3 };
console.log(spread_obj);

// +++++++++++++++++++++++++++++++++++++++++  Object Methods +++++++++++++++++++++++++++++++++++++++++
// Define an object with methods
const library = {
  books: [],

  // Method to add a book
  addBook: function (title, author) {
    this.books.push({ title, author });
    console.log(`Added book: ${title} by ${author}`);
  },

  // Method to list all books
  listBooks: function () {
    if (this.books.length === 0) {
      console.log("No books in the library.");
    } else {
      console.log("Books in the library:");
      this.books.forEach((book) => {
        console.log(`${book.title} by ${book.author}`);
      });
    }
  },

  // Method to find a book
  findBook: function (title) {
    const book = this.books.find((book) => book.title === title);
    if (book) {
      console.log(`Found book: ${book.title} by ${book.author}`);
    } else {
      console.log(`Book titled "${title}" not found.`);
    }
  },

  // Method to remove a book
  removeBook: function (title) {
    const index = this.books.findIndex((book) => book.title === title);
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1)[0];
      console.log(
        `Removed book: ${removedBook.title} by ${removedBook.author}`
      );
    } else {
      console.log(`Book titled "${title}" not found. Cannot remove.`);
    }
  },
};

// Test the library object methods
library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
library.addBook("To Kill a Mockingbird", "Harper Lee");
library.listBooks();
library.findBook("The Great Gatsby");
library.removeBook("To Kill a Mockingbird");
library.listBooks();
library.findBook("To Kill a Mockingbird");
