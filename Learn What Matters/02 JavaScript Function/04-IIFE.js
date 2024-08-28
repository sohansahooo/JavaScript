// IIFE (Immediately Invoked Function Expression)
/*  -- To avoid naming conflicts
    -- Creatinng a private scope
    -- Executing code immediately
*/

(function one() {
    console.log("DB Connected");
})();

((name) => {
    console.log(`DB Connect Two ${name}`);
})("Sohan")