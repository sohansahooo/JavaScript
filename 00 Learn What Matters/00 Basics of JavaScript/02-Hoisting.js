/* ++++++++++++++++++++ Hoisting ++++++++++++++++++++ */

var a;
console.log(a); // undefined
a = 10;         // now defined
console.log(a); // 10

/* like this function declaration can be hoisted
   but, not same in case of function expression. 

    // Function Declaration:
        hello();
        
        function hello() {
            console.log('Hello, Hi, Bye');
        }
        
    // Function Expression:
        hello();
        
        var hello = function() {
            console.log('Hello, Hi, Bye');
        }
*/
        