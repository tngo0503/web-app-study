var sounds = {
  'w': "../sounds/tom-1.mp3",
  'a': "../sounds/tom-2.mp3",
  's': "../sounds/tom-3.mp3",
  'd': "../sounds/tom-4.mp3",
  'j': "../sounds/snare.mp3",
  'k': "../sounds/crash.mp3",
  'l': "../sounds/kick.mp3"
};

document.addEventListener('keydown', function(event){
  var soundPlayed = sounds[event.key];
  if(soundPlayed){
    var audio = new Audio(soundPlayed);
    audio.play();
  }
  else{
    console.log("what the heck");
  }
});
