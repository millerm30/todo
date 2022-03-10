'use strict';

// Variables

let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');


// Calculator Display

let realTimeScreenValue = [];

// To Clear

clearbtn.addEventListener('click', () => {
  realTimeScreenValue = [''];
  answerScreen.innerHTML = 0;
  currentInput.className = 'currentInput';
  answerScreen.className = 'answerScreen';
});

// Get value of any button clicked and display to the screen

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // when clicked button is not clear button
    if (!btn.id.match('button')) {
      // To display value on btn press
      realTimeScreenValue.push(btn.value);
      currentInput.innerHTML = realTimeScreenValue.join('');

      // To evaluate answer in real time
      if (btn.classList.contains('num_btn')) {
        answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
      }
    }

    // When clicked button is evaluate button
    if (btn.id.match('evaluate')) {
      answerScreen.className = 'currentInput';
      currentInput.className = 'answerScreen';

    }
  });
});


/*document.addEventListener("keydown", (event) => {
  // when key is not clear
  if (event.key) {
    // To display value on keyboard press
    realTimeScreenValue.push(event.key);
    currentInput.innerHTML = realTimeScreenValue.join("");
  }
});*/