// IIFE (Immediately Invoked Function Expression)
/*  -- To avoid naming conflicts
    -- Creatinng a private scope
    -- Executing code immediately
*/

(function one() {
    // Named IIFE
    console.log("DB Connected");
})();

((name) => {
    // Anonymous IIFE
    console.log(`DB Connect Two ${name}`);
})("Sohan")