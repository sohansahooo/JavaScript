/*  Actions that happen in the system while user trigger for response.

Types of Events (Actions):  
        1. Mouse Events (click, double-click, over etc.)
        2. Keyboard Events (keypress, keyup, etc.)
        3. Form Events (submit, change, etc.)

Ways of Events (Response):
        1. Event Handler
        2. Event Listener (methods)
            -- addEventListener
            -- removeEventListener
*/

/* 1. Event Handler */
// function handleClick(){
//     console.log("Handler Button is clicked!");
// }

/* 2. Event Listener (well-readable) */

//  -- addEventListener
// let button = document.getElementById("btn")
// button.addEventListener('click', function(){
//     console.log("Listener Button is Clicked!");
// })


/* -- removeEventListener */
// let button = document.getElementById("btn")
// function handleClick(){
//     console.log("Listener Button is Clicked!");
// }

// button.addEventListener('click', handleClick)
// button.removeEventListener('click', handleClick)