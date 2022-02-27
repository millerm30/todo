'use strict';

// App Widget Open to Window

function popitup(url) {
    newwindow = window.open("calculator.html", "mycalc","height=610,width=375");

    if (window.focus) {newwindow.focus()}
    return false;
}

// Calculator Operations to be added
