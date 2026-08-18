function randDice() {
  return randNum = Math.floor(Math.random() * 6);
}

function setDice(diceArray, diceValueOfPlayersArr) {
  var imgList = document.querySelectorAll(".dices img.randomDice");
  for (var i = 0; i < imgList.length; ++i) {
    var dice = diceArray[randDice()];
    imgList[i].setAttribute('src', dice[0]);
    diceValueOfPlayersArr.push(dice[1]);
  }
}

function decideWinner(diceValueOfPlayersArr){
  var str = "";
  if(diceValueOfPlayersArr[0] === diceValueOfPlayersArr[1]){
    str += "Draw";
  }
  else if(diceValueOfPlayersArr[0] > diceValueOfPlayersArr[1]){
    str += "Player 1 wins!!!";
  }
  else{
    str += "Player 2 wins!!!"
  }
  return str;
}

function setWinner(diceValueOfPlayersArr){
  var str = decideWinner(diceValueOfPlayersArr);
  document.querySelector('h1').innerText = str;
}

function setImgAlt(diceArray, diceValueOfPlayersArr){
  var imgList = document.querySelectorAll(".dices img.randomDice");
  for(var i = 0; i < imgList.length; ++i){
    var offsetIndexOfPlayersArr = diceValueOfPlayersArr[i] - 1;
    imgList[i].setAttribute('alt', diceArray[offsetIndexOfPlayersArr][2]);
  }
}

function diceOrchestrator() {
  var diceArray = [["../images/dice1.png", 1, "dice-1"],
  ["../images/dice2.png", 2, "dice-2"],
  ["../images/dice3.png", 3, "dice-3"],
  ["../images/dice4.png", 4, "dice-4"],
  ["../images/dice5.png", 5, "dice-5"],
  ["../images/dice6.png", 6, "dice-6"],
  ]
  var diceValueOfPlayersArr = [];

  setDice(diceArray, diceValueOfPlayersArr);
  setImgAlt(diceArray, diceValueOfPlayersArr);
  setWinner(diceValueOfPlayersArr);
}

diceOrchestrator();