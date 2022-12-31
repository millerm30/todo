'use strict';

const dragStart = (target) => {
  target.classList.add('dragging');
};

const dragEnd = (target) => {
  target.classList.remove('dragging');
};

const dragEnter = (event) => {
  event.currentTarget.classList.add('drop');
};

const dragLeave = (event) => {
  event.currentTarget.classList.remove('drop');
};

function drag(event) {
  event.dataTransfer.setData("text/plain", event.target.dataset.id);
  event.dataTransfer.setData("text/html", event.target.outerHTML);
}

const drop = (event) => {
  document
    .querySelectorAll(".column")
    .forEach((column) => column.classList.remove("drop"));
  const noteElement = document.querySelector(
    `[data-id='${event.dataTransfer.getData("text/plain")}']`
  );
  noteElement.parentNode.removeChild(noteElement);
  event.preventDefault();
  event.currentTarget.innerHTML =
    event.currentTarget.innerHTML + noteElement.outerHTML;

  const noteId = event.dataTransfer.getData("text/plain");
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const note = notes.find((note) => note.id === noteId);
  if (note) {
    note.category = event.currentTarget.dataset.category;
    localStorage.setItem("notes", JSON.stringify(notes));
  };
};

const allowDrop = (event) => {
  event.preventDefault();
};

document.querySelectorAll('.column').forEach((column) => {
  column.addEventListener('dragenter', dragEnter);
  column.addEventListener('dragleave', dragLeave);
});

document.addEventListener('dragstart', (e) => {
  if (e.target.className.includes('card')) {
    dragStart(e.target);
  }
});

document.addEventListener('dragend', (e) => {
  if (e.target.className.includes('card')) {
    dragEnd(e.target);
  }
});