
# {Drag & Drop} To-Do Web App

This is my first project as a student of Get Coding. This web app is wriitten with HTML, CSS and Vanilla JavaScript.
This web app allows users to create notes that become draggable from 3 drop areas. Along with the draggable notes, this app also includes the users local weather built with Open Weather API and an app widget area that includes a functional calculator app.


![App Logo](images/todologo.jpg)


## 🚀 About Me
I'm currently a student with Get Coding completing Full Stack Development.


## Features

- Drag and Drop Function for new notes
- Current weather based on users location with Open Weather API
- AXIOS use for calling API
- Calculator
- Current date / time included with constant time change
- Compatiable with mobile devices


## Installation

To use this project locally please install AXIOS via NPM. For a functional weather API the user will also require the creation 
of a config.js file in their local javascript directory and include their API KEY in this file. Please signup for your API key with https://openweathermap.org/.


'use strict';

const config = {
  myapiToken: 'Insert Your API Key Here',
};


    