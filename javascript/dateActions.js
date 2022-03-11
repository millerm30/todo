'use strict';

// setInterval for live time load refresh 1second interval

setInterval(myTimer, 1000);

function myTimer() {
    const time = new Date();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const curDay = dayNames[time.getDay()];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const curMonth = monthNames[time.getMonth()];
    const curDate = time.getDate();
    const curYear = time.getFullYear();
    const curTime = time.toLocaleTimeString();

    document.querySelector('#today_date').innerHTML = (`${curDay} ${curMonth} ${curDate} / ${curYear}<br>${curTime}`);
}