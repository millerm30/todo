"use strict";

// Form Reference

const myForm = document.querySelector(".todo-form");
const nameInput = document.querySelector("#note_name");
const noteInput = document.querySelector("#textarea");
const noteList = document.querySelector(".todo-content");
const msg = document.querySelector(".msg");

// Event Listeners

myForm.addEventListener('submit', onSubmit);
myForm.addEventListener('submit', errorMsg);

// Functions

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function onSubmit(e) {  
    e.preventDefault();
    if (nameInput.value === '' && noteInput.value === '') {
      msg.innerHTML = 'Please enter all fields!'
    
    } else if (nameInput.value === '' || nameInput === null) {
      msg.innerHTML = 'Please enter note name!'
      
    } else if (noteInput.value === '' || noteInput.value === null) {
      msg.innerHTML = 'Please enter note message!'
     
    } else {
      
      const div = document.createElement('div');
      div.className += 'card';
      div.setAttribute('draggable', "true");
      div.setAttribute('ondragstart', 'drag(event)')
      div.setAttribute('data-id', uuidv4(e));
      const h4Head = document.createElement('h4');
      h4Head.appendChild(document.createTextNode(`${nameInput.value}`));
      const para = document.createElement('p');
      para.appendChild(document.createTextNode(`${noteInput.value}`));
      div.innerHTML = '<img src="./images/cancel.png" class="button_delete" alt="delete button" onclick="deleteNote(this)">';

      noteList.appendChild(div);
      div.append(h4Head, para);

      myForm.reset();
    }
}

function errorMsg() {
  setTimeout(() => msg.innerHTML = '', 3000);
}

function deleteNote(e) {
  e.parentElement.remove()
}