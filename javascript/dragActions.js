"use strict";

function drag(event) {
  event.dataTransfer.setData("text/plain", event.target.dataset.id);
  event.dataTransfer.setData("text/html", event.target.outerHTML);
}


const dragStart = (event) => {
  event.dataTransfer.setData("text/plain", event.target.dataset.id);
  event.dataTransfer.setData("text/html", event.target.outerHTML);
  event.target.classList.add("dragging");
};

const dragEnd = (event) => {
  event.target.classList.remove("dragging");
};

const dragEnter = (event) => {
  event.currentTarget.classList.add("drop");
};

const dragLeave = (event) => {
  event.currentTarget.classList.remove("drop");
};

const drop = (event) => {
  document
    .querySelectorAll(".column")
    .forEach((column) => column.classList.remove("drop"));
  const noteElement = document.querySelector(
    `[data-id='${event.dataTransfer.getData("text/plain")}']`
  );
  if (noteElement) {
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
  }
  }
};

const allowDrop = (event) => {
  event.preventDefault();
};

const dragOver = (event) => {
  event.preventDefault();
};

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
  card.addEventListener("touchstart", dragStart);
  card.addEventListener("touchend", dragEnd);
});

document.querySelectorAll(".column").forEach((column) => {
  column.addEventListener("dragenter", dragEnter);
  column.addEventListener("dragleave", dragLeave);
  column.addEventListener("drop", drop);
  column.addEventListener("dragover", allowDrop);
  column.addEventListener("touchstart", dragEnter);
  column.addEventListener("touchend", dragLeave);
  column.addEventListener("touchmove", dragOver);
  column.addEventListener("touchend", drop);
});