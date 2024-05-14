let numberOfButtons = document.querySelectorAll('.drum').length

/*This function detects the presses of the buttons with pictures 
* and handles them accordingly to make a sound */
function handleClick () {
  let buttonInnerHTML = this.innerHTML

  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', handleClick)
}

//This function detects keyboard presses and handles them accordingly to make a sound
function makeSound(key){
  switch (key) {
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

  document.addEventListener('keydown', function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });

}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function() {
    activeButton.classList.remove('pressed');
  }, 100);
}