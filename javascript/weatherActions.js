'use strict';

// Weather API Request

// Set Variables

const iconImg = document.querySelector('#weather-icon');
const myLocation = document.querySelector('#location');
const weatherDesc = document.querySelector('.description');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');

// Event Listener for on page load

window.addEventListener('load', () => {
    let long;
    let lat;
    if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition((position) => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
    });
})