'use strict';

// setInterval for live time load refresh 1second interval

setInterval(myTimer, 1000);

// Date Function

function myTimer() {

const time = new Date();

// Get current day of week

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const curDay = dayNames[time.getDay()];

//  Get Current Month

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const curMonth = monthNames[time.getMonth()];

// Get Current Year

const curYear = time.getFullYear();

// Get Current Time

const curTime = time.toLocaleTimeString();

// Writing script to HTML id="today_date"

document.getElementById('today_date').innerHTML = (`${curDay} ${curMonth} ${curYear}<br>${curTime}`);
}