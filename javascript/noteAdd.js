"use strict";

// Form Reference

const myForm = document.querySelector(".todo-form");
const nameInput = document.querySelector("#note_name");
const noteInput = document.querySelector("#textarea");
const noteList = document.querySelector("#newNote");

// OnSubmit Event Listener

myForm.addEventListener("submit", onSubmit);

// Functions 

function onSubmit(e) {  
    e.preventDefault();
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${nameInput.value}\n${noteInput.value}`));

    noteList.appendChild(li);

    //clear fields
    nameInput.value = "";
    noteInput.value = "";
}