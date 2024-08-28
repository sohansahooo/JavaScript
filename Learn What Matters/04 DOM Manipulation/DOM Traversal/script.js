/* Target Element */

// picking the Element and modify in JS by Id:
// let pick = document.getElementById('block');  // Step-1: Get the element
// pick.style.color = 'red';                     // Step-2: Modify the element

// picking the Element and modify in JS by ClassName:
// let pick = document.getElementsByClassName('para');  // Step-1: Get the element
// console.log(pick);

// picking the Element and modify in JS by TagName:
// let pick = document.getElementsByTagName('h1');  // Step-1: Get the element
// console.log(pick);

// QuerySelector: (can target everything)
// let target = document.querySelector('p')    // Select 1st one always
// console.log(target);

// QuerySelectorAll: (can target everything)
// let target = document.querySelectorAll('p')    // Select All
// console.log(target);



/* Create Element */

// Create a new HTML element:
// let newElement = document.createElement('a')
// // console.log(newElement);

/* Add Element: */

// // 1. Appends or Add a new child element:
// //  let parent = document.getElementById('container')
// //  console.log(parent.appendChild(newElement))

// // 2. insertAdjacentElement (beforeBegin, afterBegin, beforeEnd, afterEnd)
// let targetElement = document.getElementById('block')

// targetElement.insertAdjacentElement("beforebegin", newElement)




/* Remove or Delete Element: */

// let element = document.getElementById('container')
// element.remove()

// // removeChild()
// let parent = document.getElementById('parent')
// let child = document.getElementById('child')
// parent.removeChild(child)


/* Modify Element:
    -- innerText
    -- innerHTML
    -- textContent
*/

// let element = document.getElementById('container')
// // // console.log(element.innerText);
// // // console.log(element.innerHTML);
// // console.log(element.textContent);

// // element.style.color = "red";
// element.style.cssText = "color: blue; font-size: 1.5rem; background-color: pink; padding-left: 30px"
// element.style.backgroundColor = ""
