document.addEventListener('keydown', function(e){
  n(e.key);
  animate(e.key);
});

var   noButton = document.querySelectorAll(".drum").length;
for(var i=0;i<=noButton;i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      var buttonName = this.innerHTML;
      n(buttonName);
      animate(buttonName);
  });
}


function n(key) {
  switch(key) {
    case 'w':
      audioPlay("tom-1");
      break;
    case 'a':
      audioPlay("tom-2");
      break;
    case 's':
      audioPlay("tom-3");
      break;
    case 'd':
      audioPlay("tom-4");
      break;
    case 'j':
      audioPlay("snare");
      break;
    case 'k':
      audioPlay("crash");
      break;
    case 'l':
      audioPlay("kick-bass");
      break;
    }
}


function audioPlay(nameS) {
  var so= new Audio("sounds/"+nameS+".mp3");
  so.play();
}

function animate(name){
  var active= document.querySelector("."+name);
  active.classList.add("pressed");
  setTimeout(function () {
    active.classList.remove("pressed");
  }, 100);
}
