alert("Press Enter to Continue");
var keyspressed = [];
var success = ["a", "s", "z", "f", "a", "s", "f", "d", "a", "s", "z", "f", "d", "f"];

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key)
})

for(var i=0; i<document.querySelectorAll(".btns").length; i++){

  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}


function handleClick(key){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

function makeSound(key)
{
  switch (key) {
    case "a":
      var au4 = new Audio("sounds/au-4.mp3");
      keyspressed.push(key);
      au4.play();
      reseter();
      break;

    case "s":
      var au1 = new Audio("sounds/au-1.mp3");
      keyspressed.push(key);
      au1.play();
      reseter();
      break;

    case "d":
      var au5 = new Audio("sounds/au-5.mp3");
      keyspressed.push(key);
      au5.play();
      reseter();
      break;

    case "f":
      var au2 = new Audio("sounds/au-2.mp3");
      keyspressed.push(key);
      au2.play();
      setTimeout(function(){if(checkKey()){
          var sound = new Audio("sounds/jaadoo.mp3");
          sound.play();}
        }, 100);
        reseter();
      break;

      case "z":
      var au3 = new Audio("sounds/au-3.mp3");
      keyspressed.push(key);
      au3.play();
      reseter();
      break;

      case "x":
      var au6 = new Audio("sounds/au-6.mp3");
      keyspressed.push(key);
      au6.play();
      reseter();
      break;

      case "c":
      var au7 = new Audio("sounds/au-7.mp3");
      au7.play();
      break;

      case "v":
      var au8 = new Audio("sounds/au-8.mp3");
      au8.play();
      reseter();
      break;
    default: console.log(key);
  }
}

function reseter(){
  if(keyspressed.length>success.length)
  keyspressed = [];
  for(var i=0; i<keyspressed.length; i++)
  {
    if(keyspressed[i]!==success[i])
      keyspressed = [];
  }
}

function checkKey(){
  var isTrue = false;
  for(var i=0; i<success.length; i++){
      if(keyspressed[i]===success[i]){
        isTrue = true;
      }
      else{
        isTrue = false;
      }
  }
  if(isTrue)
  {
    return true;
  }
  else{
    return false;
  }
}


function buttonAnimation(key){
  var active = document.querySelector("."+key);
  active.classList.add("pressed");
  setTimeout(function (){
    active.classList.remove("pressed")
  }, 100);
}
