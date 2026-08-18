function randomColor() {
  var color = Math.floor(Math.random() * 4) + 1;
  if (color === 1) return "red";
  if (color === 2) return "yellow";
  if (color === 3) return "blue";
  return "green";
}

function blink(color) {
  setTimeout(function () {
    $('.' + color).css("background-color", color);
  }, 300);

  $('.' + color).css("background-color", 'grey');

}

function saveUserColor(color, colorArray) {
  colorArray.push(color);
}
function saveSystemColor(color, colorArray) {
  colorArray.push(color);
}

function nextRound(colorArray) {
  var color = randomColor();
  blink(color);
  saveSystemColor(color, colorArray);
}

function handleNotMatch(){
  alert("Not matching. You lose !!");
}

function isMatch(userChosenColors, systemChosenColors){
  var userColor = userChosenColors[userChosenColors.length -1];
  var systemColorAtTheSpecificIndex = systemChosenColors[userChosenColors.length -1];
  if(userColor !== systemColorAtTheSpecificIndex){
    return false;
  }
  return true;
}

function checkInputProcess(userChosenColors, systemChosenColors){
  if(!isMatch(userChosenColors, systemChosenColors)) {
    handleNotMatch();
  }
}

function areBothArraysEqual(userChosenColors, systemChosenColors){
  if(userChosenColors.length === systemChosenColors.length) return true;
  return false;
}

function resetUserChosenColors(userChosenColors){
  userChosenColors.length = 0;
}

function completeProcess(userChosenColors, systemChosenColors){
  if(areBothArraysEqual(userChosenColors, systemChosenColors)) {
    resetUserChosenColors(userChosenColors);
    nextRound(systemChosenColors);
  }
}

function startGame(systemChosenColors){
  nextRound(systemChosenColors);
}

var userChosenColors = [];
var systemChosenColors = [];

startGame(systemChosenColors);
$('.pad').on('click', function (event) {
  var chosenColor = $(this).text();

  saveUserColor(chosenColor, userChosenColors);
  checkInputProcess(userChosenColors, systemChosenColors);
  completeProcess(userChosenColors, systemChosenColors);
});