'use strict';

let a_p = "";
    let d = new Date();
    let curDay = d.getDay();
    let curMonth = d.getMonth();
    if (curMonth == 0) {
        curMonth = "January";
    }
    if (curMonth == 1) {
        curMonth = "February";
    }
    if (curMonth == 2) {
        curMonth = "March";
    }
    if (curMonth == 3) {
        curMonth = "April";
    }
    if (curMonth == 4) {
        curMonth = "May";
    }
    if (curMonth == 5) {
        curMonth = "June";
    }
    if (curMonth == 6) {
        curMonth = "July";
    }
    if (curMonth == 7) {
        curMonth = "August";
    }
    if (curMonth == 8) {
        curMonth = "September";
    }
    if (curMonth == 9) {
        curMonth = "October";
    }
    if (curMonth == 10) {
        curMonth = "November";
    }
    if (curMonth == 11) {
        curMonth = "December";
    }
    let curYear = d.getFullYear();
    let curHour = d.getHours();
    if (curHour < 12) {
        a_p = "AM";
    } else {
        a_p = "PM";
    }
    if (curHour == 0) {
        curHour = 12;
    }
    if (curHour > 12) {
        curHour = curHour - 12;
    }
    let curMinute = + d.getMinutes();
    curMinute = curMinute > 9 ? curMinute : '0' + curMinute;

// printing to screen

document.getElementById("today_date").innerHTML = (curDay + " " + curMonth + " " + curYear + " " + " <br> " + curHour + " : " + curMinute +  " " + a_p);