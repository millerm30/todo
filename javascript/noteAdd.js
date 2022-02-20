"use strict";

// Form Reference

const myForm = document.querySelector(".todo-form");
const nameInput = document.querySelector("#note_name");
const noteInput = document.querySelector("#textarea");
const noteList = document.querySelector(".todo-content");
const msg = document.querySelector(".msg");

// OnSubmit Event Listener

myForm.addEventListener("submit", onSubmit);

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
    if (nameInput.value === '' || noteInput.value === '') {
      //msg.classList.add('error')
      msg.innerHTML = 'Please enter all fields!'

      setTimeout(() => msg.remove(), 3000);
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

      noteList.appendChild(div);
      div.append(h4Head, para);

      //clear fields after note add
      nameInput.value = "";
      noteInput.value = "";
    }
};