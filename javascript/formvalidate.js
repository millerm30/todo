"use strict";

// Form Validate Function

function validateForm() {
    let x = document.forms["todo-form"]["textarea"].value;
    if (x == "") {
        alert("Please add your note to continute.");
        return false;
    }
}