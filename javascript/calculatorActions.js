// local variable Assignments:
const output = document.getElementsByClassName('answerScreen')[0];
let equation = '';
let number = '';
let id = '';
let type = '';

// button click:
const buttons = document.getElementsByClassName('btn');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
      id = this.getAttribute('data-id');
      type = this.getAttribute('data-type');

      switch (type) {
        case 'clear':
          Clear();
          break;

        case 'operator':
          Operator();
          break;

        case 'symbol':
          Symbol();
          break;

        case 'equal':
          Equal();
          break;

        default:
          Default();
          break;
      }
    },
    false
  );
}

// clear:
function Clear() {
  number = '';
  equation = '';
  output.innerHTML = 0;
}

// operator:
function Operator() {
  equation += id;
  output.innerHTML = number + ' ' + id;
  number = '';
}

// symbol:
function Symbol() {
  number += id;
  equation += id;
  output.innerHTML = number;
}

// equal:
function Equal() {
  number = eval(equation);
  equation = number;
  output.innerHTML = number;
}

// default:
function Default() {
  number += id;
  equation += id;
  output.innerHTML = number;
}

// Keyboard Event Listener:
document.addEventListener('keydown', function (event) {
  if (event.key != 13) {
    for (let i = 0; i < buttons.length; i++) {
      const id = buttons[i].getAttribute('data-id');

      if (id === event.key) {
        buttons[i].click();
      }
    }
  } else {
    document.getElementById('equal').click();
  }
});
