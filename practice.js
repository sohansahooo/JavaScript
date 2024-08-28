let yourName;
yourName = prompt("Enter your username:"); // Window Prompt
console.log(yourName);

document.getElementById('submit').onclick = function(){
    yourName = document.getElementById('inp').value;
    document.getElementById('const').textContent = `Welcome ${yourName}`
};