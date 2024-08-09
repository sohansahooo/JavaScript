function startCountdown() {
    let seconds = parseInt(document.getElementById('seconds').value);
    const timerElement = document.getElementById('timer');

    if (isNaN(seconds) || seconds <= 0) {
        timerElement.textContent = 'Please enter a valid number of seconds.';
        return;
    }

    const countdown = setInterval(() => {
        if (seconds > 0) {
            timerElement.textContent = `${seconds} second${seconds > 1 ? 's' : ''} remaining`;
            seconds--;
        } else {
            clearInterval(countdown);
            timerElement.textContent = 'Time\'s up!';
        }
    }, 1000);
}
