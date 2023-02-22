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

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
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
    console.log(end);
    let dateDotNowinIST = Date.now() + 19800000;
    console.log(dateDotNowinIST);
    let timeLeft = end - dateDotNowinIST;
    console.log(timeLeft);

    getTimeInFormat(timeLeft);

    if (timeLeft < 0) {
        clearInterval(init);
        resetTimer();
    }
}

let init = setInterval(updateTimer, 1000);