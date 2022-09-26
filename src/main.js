var human = new Player("Human", "😎");
var computer = new Player("Computer", "🤖");

//-------------------Query Selectors---------------//

var classicGame = document.querySelector(".classic-game");
var difficultGame = document.querySelector(".difficult-game");
var classicBoard = document.querySelector(".classic-game-board");
var classicScreen = document.querySelector(".classic-game-view");
var homeScreen = document.querySelector(".home-view");
var difficultScreen = document.querySelector(".difficult-game-view");
var difficultBoard = document.querySelector(".difficult-game-board");
var humanWin = document.querySelector(".player-result");
var humanImage = document.querySelector(".human-image");
var computerImage = document.querySelector(".computer-image");
var difficultHumanImage = document.querySelector(".difficult-human-image");
var difficultComputerImage = document.querySelector(".difficult-computer-image");
var difficultHumanWin = document.querySelector(".difficult-player-result")
var playerInfo = document.querySelector(".player-info");
var computerInfo = document.querySelector(".computer-info");
var playerAvatar = document.querySelector("avatar");
var rockImage = document.querySelector(".rock-image");
var paperImage = document.querySelector(".paper-image");
var scissorsImage = document.querySelector(".scissors-image");
var difficultRockImage = document.querySelector(".difficult-rock-image");
var difficultPaperImage = document.querySelector(".difficult-paper-image");
var difficultScissorsImage = document.querySelector(".difficult-scissors-image");
var ninjaImage = document.querySelector(".ninja-image");
var ghostImage = document.querySelector(".ghost-image");
var changeGameButton = document.querySelector(".home-button");


//--------------------Event Listeners--------------//

window.addEventListener("load", updatePlayerCard);
classicGame.addEventListener("click", classicGameView);
difficultGame.addEventListener("click", difficultGameView)
rockImage.addEventListener("click", playClassicGame);
paperImage.addEventListener("click", playClassicGame);
scissorsImage.addEventListener("click", playClassicGame);
difficultRockImage.addEventListener("click", playDifficultGame);
difficultPaperImage.addEventListener("click", playDifficultGame);
difficultScissorsImage.addEventListener("click", playDifficultGame);
ninjaImage.addEventListener("click", playDifficultGame);
ghostImage.addEventListener("click", playDifficultGame);
changeGameButton.addEventListener("click", returnHome)

//--------------------Event Handlers-----------------//

function updatePlayerCard() {
  playerInfo.innerHTML = `
    <div class="player-name">
      <p class="avatar">${human.avatar}</p>
      <p class="name">${human.name}</p>
    </div>
    <div class="player-wins">
      <p>Wins: </p>
      <p class="player-win-count">${human.wins}</p>
    </div>`
  computerInfo.innerHTML = `
  <div class="player-name">
    <p class="avatar">${computer.avatar}</p>
    <p class="name">${computer.name}</p>
  </div>
  <div class="player-wins">
    <p>Wins: </p>
    <p class="player-win-count">${computer.wins}</p>
  </div>`
}

function returnHome(){
  displayHidden(difficultScreen)
  displayHidden(classicScreen)
  removeHidden(homeScreen)
  displayHidden(changeGameButton)
};

function classicGameView(){
  displayHidden(homeScreen)
  removeHidden(classicScreen)
  removeHidden(changeGameButton)
  displayHidden(classicBoard)
  removeHidden(paperImage)
  removeHidden(scissorsImage)
  removeHidden(rockImage)
};

function difficultGameView() {
  displayHidden(homeScreen)
  displayHidden(difficultBoard)
  removeHidden(difficultScreen)
  removeHidden(changeGameButton)
  removeHidden(difficultPaperImage)
  removeHidden(difficultScissorsImage)
  removeHidden(difficultRockImage)
  removeHidden(ninjaImage)
  removeHidden(ghostImage)
};

function playClassicGame(event) {
  var newGame = new Game (human, computer)
  for (var i = 0; i < classicOptions.length; i++){
    if(event.target.id === classicOptions[i].name){
      human.selection = classicOptions[i]
    }
  }
    computer.selection = (classicOptions[randomSelection(classicOptions)])
    classicGameBoard()
    newGame.checkForWin(human)
    checkForWinner(humanWin)
    updatePlayerCard()
    setTimeout(() => classicGameView(), 2000)
};

function playDifficultGame(event) {
  var newGame = new Game (human, computer)
  for (var i = 0; i < difficultOptions.length; i++){
    if(event.target.id === difficultOptions[i].name){
      human.selection = difficultOptions[i]
    }
  }
  computer.selection = (difficultOptions[randomSelection(difficultOptions)])
  difficultGameBoard()
  newGame.checkForWin(human)
  checkForWinner(difficultHumanWin)
  updatePlayerCard()
  setTimeout(() => difficultGameView(), 2000)
};

function classicGameBoard() {
  displayHidden(classicScreen)
  removeHidden(classicBoard)
  displayHidden(changeGameButton)
  humanImage.innerHTML = human.selection.image
  computerImage.innerHTML = computer.selection.image
};

function difficultGameBoard() {
  displayHidden(difficultScreen)
  removeHidden(difficultBoard)
  displayHidden(changeGameButton)
  difficultHumanImage.innerHTML = human.selection.image
  difficultComputerImage.innerHTML = computer.selection.image
}

function checkForWinner(element) {
  if(human.isWinner === true && computer.isWinner === false){
    return element.innerText = "🎉You Win!🎉"
  }
  if(human.isWinner === false && computer.isWinner === true){
    return element.innerText = "You Lose"
  }
  if(human.isWinner === false && computer.isWinner === false){
    return element.innerText = "Draw!"
  }
}

//--------------- Misc Functions---------------//

function displayHidden(element){
  element.classList.add("hidden")
};

function removeHidden(element) {
  element.classList.remove("hidden")
};
