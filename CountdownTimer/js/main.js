// DOM elements
const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const endDateElement = document.getElementById('end-date');

function getTimeInFormat(differenceInTime) {
    /* we get differenceInTime in form of ms so by dividing
    (24 * 60 * 60 * 1000) we convert it into days */
    /*  1 day = 24 hours
     1 hour  = 60 minutes
     1 minute = 60 seconds
     1 second = 1000 ms */
    let totalTime = differenceInTime / (24 * 60 * 60 * 1000);
    let days = Math.floor(totalTime);

    /*  we multiplied 24 bcz (totalTime - days) gives value in days so 
     by multiplying 24 we covert that to hours */
    let differenceInHours = (totalTime - days) * 24;
    let hours = Math.floor(differenceInHours);

    /*  we multiplied 24 bcz (differenceInHours - hours) gives value in hours so 
     by multiplying 60 we covert that to minutes*/
    let differenceInMinutes = (differenceInHours - hours) * 60;
    let minutes = Math.floor(differenceInMinutes);

    /*  we multiplied 24 bcz (differenceInMinutes - minutes) gives value in minutes so 
     by multiplying 60 we covert that to seconds */
    let differenceInSeconds = (differenceInMinutes - minutes) * 60;
    let seconds = Math.floor(differenceInSeconds);

    //adding extra '0' at the start of hr, min & seconds
    let formattedHours = hours.toString().padStart(2, '0');
    let formattedMinutes = minutes.toString().padStart(2, '0');
    let formattedSeconds = seconds.toString().padStart(2, '0');

    //updating the values in html
    daysElement.innerHTML = days;
    hoursElement.innerHTML = formattedHours;
    minutesElement.innerHTML = formattedMinutes;
    secondsElement.innerHTML = formattedSeconds;
}


function resetTimer() {
    daysElement.innerHTML = `-`;
    hoursElement.innerHTML = `-`;
    minutesElement.innerHTML = `-`;
    secondsElement.innerHTML = `-`;
}


let endDate = "5 December 2023 00:00 AM";
endDateElement.innerText = endDate;

function updateTimer() {
    const end = new Date(endDate).getTime();
    let dateDotNowinIST = Date.now() + 19800000; // Multiplied 19800000 bcz IST is 5 hours 30minutes than UCT timezone 
    let timeLeft = end - dateDotNowinIST;

    getTimeInFormat(timeLeft);

    if (timeLeft < 0) {
        clearInterval(init);
        resetTimer();
    }
}

let init = setInterval(updateTimer, 1000);