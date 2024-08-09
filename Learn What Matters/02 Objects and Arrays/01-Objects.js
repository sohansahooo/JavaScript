// +++++++++++++++++++++++++++++++++++++++++ Objects +++++++++++++++++++++++++++++++++++++++++


function anArray() {
    const user = [
      { name: "John", age: 25, gender: "male" },
      { name: "Jany", age: 22, gender: "female" },
      { name: "Jerra", age: 22, gender: "female" },
      { name: "Jwel", age: 21, gender: "female" },
      { name: "Jizz", age: 26, gender: "female" }
    ];
  
    return user[0];
  }
  
  const firstUser = anArray();
  console.log(firstUser, 'objects & their values');


// Pass Function inside Object:
let user = {
  name: "John",
  age: 25,
  city: 'New York',
  intro: function(){
    console.log(`Hello! ${this.name}`);
  }
};

user.intro()