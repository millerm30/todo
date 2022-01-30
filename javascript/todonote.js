'use strict';

displayNotes();
const addBtn = document.getElementById('button_submit');

// below event listener will add user input into the local storage

addBtn.addEventListener('click',function(){
	
	let notesObj;
	let addNote = document.getElementById('textarea');
	let notesString = localStorage.getItem('notes');
    
    if(notesString == null){
		notesObj = [];
	}
	else{
		notesObj = JSON.parse(notesString);
	}
	
	//Add date

	let now = new Date();
	let dateTime = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} | ${now.getHours()}:${now.getMinutes()}`;
	
	
	//pushing into local storage

	let tempObj = { text: addNote.value, time: dateTime };
	
	notesObj.push(tempObj);
	localStorage.setItem('notes',JSON.stringify(notesObj));
	
	addNote.value = '';
	
	displayNotes();
});

// funtion to display data stored in the local storage

function displayNotes(){
	let notesObj;
	let notesString = localStorage.getItem('notes');
	
	if(notesString == null){
		notesObj = [];
	}
	else{
		notesObj = JSON.parse(notesString);
	}
	
	let html = '';
	
	notesObj.forEach(function(element,index){
		html += `
				<div class="my-note">
					<div class="card-body">
						<h6>${element.time}</h6>
						<p class="card-text">${element.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
						<button id="${index}" onclick=deleteNote(this.id) class="button-delete">Delete</button>
					</div>
				</div>
			`;
	});
	
	let noteEle = document.getElementById('notes');
	
	if(notesObj.length != 0){
		noteEle.innerHTML = html;
	}
	else{
		noteEle.innerHTML = '<h3 style="text-align: center; color: grey;">Please Add Item!</h3>';
	}
	
}

//function to delete a note

function deleteNote(index){
	let notesObj;
	let notesString = localStorage.getItem('notes');
	
	if(notesString == null){
		notesObj = [];
	}
	else{
		notesObj = JSON.parse(notesString);
	}
	
	notesObj.splice(index,1);
	localStorage.setItem('notes',JSON.stringify(notesObj));
	
	displayNotes();
}