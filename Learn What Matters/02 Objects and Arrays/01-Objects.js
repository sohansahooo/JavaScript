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
    { name: "Jizz", age: 26, gender: "female" }
  ];
  
  return user[3];
}

const firstUser = anArray();
console.log(firstUser, '< (key & their values)');


// Pass Function inside Object:
let user = {
  name: "John",
  age: 25,
  city: 'New York',
  intro: function(){
    console.log(`Hello! ${this.name}`);
  }
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
user.intro()
console.log(user.hasOwnProperty('city'));




// +++++++++++++++++++++++++++++++++++++++++ Spread Operator +++++++++++++++++++++++++++++++++++++++++
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const spread_obj = {...obj1, ...obj2, ...obj3}
console.log(spread_obj)