// Get all the elements
let input = document.getElementById('date-input');
let days = document.getElementsByClassName('timer')[0].children[0].children[0];
let hours = document.getElementsByClassName('timer')[0].children[1].children[0];
let minutes = document.getElementsByClassName('timer')[0].children[2].children[0];
let seconds = document.getElementsByClassName('timer')[0].children[3].children[0];

const myButton = () => {
    let countDownDate = new Date(input.value).getTime();

    // Update the count down every 1 second
    let x = setInterval(() => {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let d = Math.floor(distance / (1000 * 60 * 60 * 24));
        let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        days.value = d < 10 ? '0' + d : d;
        hours.value = h < 10 ? '0' + h : h;
        minutes.value = m < 10 ? '0' + m : m;
        seconds.value = s < 10 ? '0' + s : s;

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            days.value = '00';
            hours.value = '00';
            minutes.value = '00';
            seconds.value = '00';
        }
    }, 1000);
}