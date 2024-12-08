let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    let message = '';
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message = 'Please enter a valid number between 1 and 100.';
    } else if (userGuess === randomNumber) {
        message = `Congratulations! You guessed the number in ${attempts} attempts.`;
    } else if (userGuess < randomNumber) {
        message = 'Too low! Try again.';
    } else {
        message = 'Too high! Try again.';
    }

    document.getElementById('message').textContent = message;
}
