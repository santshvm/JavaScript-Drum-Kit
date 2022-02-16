// alert("Hello!");

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++) {
  // checking for click
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHtml = this.innerHTML;

    checkKeyAndPlaySound(buttonInnerHtml);

    buttonAnimation(buttonInnerHtml);

  });
}


// checking for keyboard strokes
document.addEventListener("keydown", function(event){
  checkKeyAndPlaySound(event.key);
  buttonAnimation(event.key);
})

// function to check for which key was pressed
function checkKeyAndPlaySound(key) {

  switch(key) {

    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;

    case "a":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;

    case "s":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;

    case "d":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
    break;

    default: console.log(buttonInnerHtml);

  }
}

// function to add animation to the buttons in case a event is detected
function buttonAnimation(currentKey) {
  var key = document.querySelector("." +currentKey);
  key.classList.add("pressed");

  //timeout function to remove the animation 100ms after an event is detected
  setTimeout(function () {
    key.classList.remove("pressed");
  }, 100);
}
