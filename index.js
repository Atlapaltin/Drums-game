/**
 * This line of code retrieves the number of buttons with the class 'drum' in the DOM.
 * It uses the `querySelectorAll` method to select all elements with the specified class, and then gets the length of the resulting NodeList.
 * This value is stored in the `numberOfButtons` variable and is used later in the code to loop through all the buttons and add event listeners to them.
 */

let numberOfButtons = document.querySelectorAll('.drum').length

/**
 * This function is triggered when a button is clicked. It plays the appropriate sound based on the button that was clicked.
 * @param {Event} event - The event object that contains information about the button click.
 */
function handleClick () {
  let buttonInnerHTML = this.innerHTML

  switch (buttonInnerHTML) {
    case 'w':
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'k':
      let kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;
    case 'l':
      let tomTom = new Audio('sounds/tom-1.mp3');
      tomTom.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

/**
 * This loop iterates through all the buttons in the DOM that have the class 'drum'.
 * For each button, it adds an event listener that triggers the `handleClick` function when the button is clicked.
 * This ensures that each button plays the appropriate sound when it is clicked.
 */

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', handleClick)
}

document.addEventListener('keydown', function() {alert("A key was pressed!");});