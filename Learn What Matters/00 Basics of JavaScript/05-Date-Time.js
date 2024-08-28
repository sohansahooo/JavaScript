// +++++++++++++++++++++++++++++++++++++++++ Date & Time +++++++++++++++++++++++++++++++++++++++++

// Date:
const now = new Date()
console.log(now);

const myDate = new Date()
console.log(myDate.toString());         // Full Format
console.log(myDate.toDateString());     // Day & Date
console.log(myDate.toLocaleString());   // Date & Time

// let myCreatedDate = new Date(2002, 5, 17, 6, 30)   // 2002 (year), 06 (month start from '0 is Jan'), 17 (date), 6 (hour), 30 (minutes)
let myCreatedDate = new Date('2002-06-17 06:30:33')    // This Format also works
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.toLocaleString());


// Time Stamp
const myTimeStamp = new Date()
console.log(myTimeStamp.getTime());
console.log(myTimeStamp.getMilliseconds());


let newDate = new Date()
console.log(newDate.getMonth() + 1);

console.log(`Day: ${newDate.toLocaleDateString()} and Time: ${newDate.toLocaleTimeString()}`)

// More Readable Way
newDate = newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
})

console.log(newDate);
