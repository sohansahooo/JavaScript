function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    let result;

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        result = 'Please enter valid values for principal, rate, and time.';
    } else {
        const interest = (principal * rate * time) / 100;
        result = `The simple interest is ${interest.toFixed(2)}.`;
    }

    document.getElementById('result').textContent = result;
}
