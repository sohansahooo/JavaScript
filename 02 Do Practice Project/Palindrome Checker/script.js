function checkPalindrome() {
    const inputString = document.getElementById('inputString').value;
    const cleanedString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedString = cleanedString.split('').reverse().join('');
    let result;

    if (cleanedString === reversedString) {
        result = `"${inputString}" is a palindrome.`;
    } else {
        result = `"${inputString}" is not a palindrome.`;
    }

    document.getElementById('result').textContent = result;
}
