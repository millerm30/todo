'use strict';

// App Widget Open to Window

function popitup(url) {
    newwindow=window.open(url,'name','height=610,width=375');

    if (window.focus) {newwindow.focus()}
    return false;
}
