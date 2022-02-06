'use strict';

// Get Day of the week

let a_p = '';
const time = new Date();
const curDay = time.getDate();
let day;
    switch (new Date().getDay()) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        default:
            day = 'Saturday';
            break;
    }

//  Get Current Year

const curMonth = time.getMonth();
let curMonthStr;
    switch (curMonth) {
        case 0:
            curMonthStr = 'Jaunary';
            break;
        case 1:
            curMonthStr = 'February';
            break;
        case 2:
            curMonthStr = 'March';
            break;
        case 3:
            curMonthStr = 'April';
            break;
        case 4:
            curMonthStr = 'May';
            break;
        case 5:
            curMonthStr = 'June';
            break;
        case 6:
            curMonthStr = 'July';
            break;
        case 7:
            curMonthStr = 'August';
            break;
        case 8:
            curMonthStr = 'September';
            break;
        case 9:
            curMonthStr = 'October';
            break;
        case 10:
            curMonthStr = 'November';
            break;
        default:
            curMonthStr = 'December';
            break;
    }

// Get Current Year

const curYear = time.getFullYear();

// Get Current Time

let curHour = time.getHours();
    if (curHour == 0) {
        curHour = 12;
    } else if (curHour > 12) {
        curHour = curHour - 12;
    }
    if (curHour > 12) { 
        a_p="AM"; 
    } else { 
        a_p="PM"; 
    }

let curMinute = time.getMinutes();
curMinute = curMinute > 9 ? curMinute : '0' + curMinute;

// Writing script to HTML id="today_date"

document.getElementById('today_date').innerHTML = (`${day} ${curMonthStr} ${curDay} ${curYear} <br> ${curHour}:${curMinute} ${a_p}`);