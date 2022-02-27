'use strict';

let newWindow;

// App Widget Open to Window Calculator App

function popitup(url) {
    newWindow = window.open("calculator.html", "mycalc","height=610,width=375");

    if (window.focus) {newWindow.focus()}
    return false;
}
