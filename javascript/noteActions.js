'use strict';

const myForm = document.querySelector('.todo-form');
const nameInput = document.querySelector('#note_name');
const noteInput = document.querySelector('#textarea');
const noteList = document.querySelector('.todo-content');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);
myForm.addEventListener('submit', errorMsg);
document.addEventListener('DOMContentLoaded', displaySavedNotes);
document.addEventListener('drag', displaySavedNotes);
document.addEventListener('drop', displaySavedNotes);

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

function onSubmit(e) {
  e.preventDefault();
  const div = document.createElement("div");
  div.className += "card";
  div.setAttribute("draggable", "true");
  div.setAttribute("ondragstart", "drag(event)");
  div.setAttribute("data-id", uuidv4(e));
  div.setAttribute("data-category", "todo");
  const h4Head = document.createElement("h4");
  h4Head.appendChild(document.createTextNode(`${nameInput.value}`));
  const para = document.createElement("p");
  para.appendChild(document.createTextNode(`${noteInput.value}`));
  div.innerHTML =
    '<img src="./images/cancel.png" class="button_delete" alt="delete button" onclick="deleteNote(this)">';
  noteList.appendChild(div);
  div.append(h4Head, para);
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  const note = {
    id: uuidv4(e),
    name: nameInput.value,
    note: noteInput.value,
    category: "todo" || "inprogress" || "completed",
  };
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
  myForm.reset();
  displaySavedNotes();
};

function errorMsg() {
  setTimeout(() => msg.innerHTML = '', 3000);
};

function deleteNote(e) {
  e.parentElement.remove();
  let notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes = notes.filter(note => note.id !== e.parentElement.dataset.id);
  localStorage.setItem('notes', JSON.stringify(notes));
};

function displaySavedNotes() {
  document
    .querySelectorAll(".card")
    .forEach((noteElement) => noteElement.remove());

  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.forEach((note) => {
    const div = document.createElement("div");
    div.className += "card";
    div.setAttribute("draggable", "true");
    div.setAttribute("ondragstart", "drag(event)");
    div.setAttribute("data-id", note.id);
    div.setAttribute("data-category", note.category);
    const h4Head = document.createElement("h4");
    h4Head.appendChild(document.createTextNode(note.name));
    const para = document.createElement("p");
    para.appendChild(document.createTextNode(note.note));
    div.innerHTML =
      '<img src="./images/cancel.png" class="button_delete" alt="delete button" onclick="deleteNote(this)">';
    let targetColumn;
    switch (note.category) {
      case "todo":
        targetColumn = document.querySelector(".todo-content");
        break;
      case "inprogress":
        targetColumn = document.querySelector(".inprogress-content");
        break;
      case "completed":
        targetColumn = document.querySelector(".completed-content");
        break;
      default:
        targetColumn = document.querySelector(".todo-content");
    }
    targetColumn.appendChild(div);
    div.append(h4Head, para);
  });
};


