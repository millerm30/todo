'use strict';

let a_p = "";
    const d = new Date();
    const curDay = d.getDay();
    const curMonth = d.getMonth();
    let curMonthStr = "January";
    if (curMonth === 1) {
        curMonthStr = "February";
    } else if (curMonth === 2) {
        curMonthStr = "March";
    } else if (curMonth === 3) {
        curMonthStr = "April";
    } else if (curMonth === 4) {
        curMonthStr = "May";
    } else if (curMonth === 5) {
        curMonthStr = "June";
    } else if (curMonth === 6) {
        curMonthStr = "July";
    } else if (curMonth === 7) {
        curMonthStr = "August";
    } else if (curMonth === 8) {
        curMonthStr = "September";
    } else if (curMonth === 9) {
        curMonthStr = "October";
    } else if (curMonth === 10) {
        curMonthStr = "November";
    } else if (curMonth === 11) {
        curMonthStr = "December";
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

document.getElementById("time_test").innerHTML = (`${curDay} ${curMonthStr} ${curYear} <br> ${curHour}:${curMinute} ${a_p}`);