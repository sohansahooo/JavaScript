/* +++++++++++++++++++++++++++++ Callback Function +++++++++++++++++++++++++++++

      A callback function is a function passed into another function as an argument.
      function greet(name) {
        console.log(`Hello, ${name}!`);
      }

      function sayHello(callback) {
        callback("Alice");
      }

      sayHello(greet); // Output: "Hello, Alice!"
*/


function processData(data){
  console.log("processing..."+ data);
}

function deleteData(data){
  console.log("deleting..."+ data);
}

function func(methodName){
  methodName("John")
}

func(processData);      // calling params in args




/* +++++++++++++++++++++++++++++ Array Callback Methods +++++++++++++++++++++++++++++ 
      Array callback methods are functions that can be passed as arguments 
      to certain array methods in javascript.
      
    // forEach method:
      const array = [1, 2, 3];
      array.forEach(function(element, index){
        console.log(element, index);
      });
      
    // map method: 
      const myArray4 = myArray3.map(function(element, index, array){
        return element * 2;
      })
      console.log(myArray4);
      
    // filter method:
      const myArray5 = myArray3.filter(function(element, index, array){
        return element > 5;
      })
      console.log(myArray5);
      
    // reduce method:
      const myArray6 = myArray3.reduce(function(accumulator, element, index, array){
        return accumulator + element;
      }, 0)
      console.log(myArray6);
*/

