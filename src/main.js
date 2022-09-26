var human = new Player("Human", "😎");
var computer = new Player("Computer", "🤖");

// var newGame = new Game(human, computer);
// newGame.checkForWin(human)

//-------------------Query Selectors---------------//

var classicGame = document.querySelector(".classic-game");
var classicBoard = document.querySelector(".classic-game-board");
var humanWin = document.querySelector(".player-result");
var difficultGame = document.querySelector(".difficult-game");
var humanImage = document.querySelector("#human-selection");
var computerImage = document.querySelector("#computer-selection");
var playerInfo = document.querySelector(".player-info");
var computerInfo = document.querySelector(".computer-info");
var playerAvatar = document.querySelector("avatar");
var homeScreen = document.querySelector(".home-view");
var classicScreen = document.querySelector(".classic-game-view");
var difficultScreen = document.querySelector(".difficult-game-view");
var rockImage = document.querySelector(".rock-image");
var paperImage = document.querySelector(".paper-image");
var scissorsImage = document.querySelector(".scissors-image");
var homeButton = document.querySelector(".home-button")


//--------------------Event Listeners--------------//

window.addEventListener("load", updatePlayerCard);
classicGame.addEventListener("click", classicGameView);
difficultGame.addEventListener("click", difficultGameView)
rockImage.addEventListener("click", playClassicGame);
paperImage.addEventListener("click", playClassicGame);
scissorsImage.addEventListener("click", playClassicGame);
homeButton.addEventListener("click", returnHome)

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
  displayHidden(classicScreen)
  displayHidden(difficultScreen)
  removeHidden(homeScreen)
}

function classicGameView(){
  displayHidden(homeScreen)
  removeHidden(classicScreen)
};

function difficultGameView() {
  displayHidden(homeScreen)
  removeHidden(difficultScreen)
}

function playClassicGame(event) {
  var newGame = new Game (human, computer)
  for (var i = 0; i < classicOptions.length; i++){
    if(event.target.id === classicOptions[i].name){
    human.selection = classicOptions[i].name
    }
  }
  computer.selection = (classicOptions[randomSelection(classicOptions)].name)
  classicGameBoard()
  newGame.checkForWinClassic(human)
  checkForWinner()
  updatePlayerCard()
};

function classicGameBoard() {
  displayHidden(classicScreen)
  removeHidden(classicBoard)
  // humanImage.innerText = human.selection.image
  // computerImage.innerText = computer.selection.image
}

function checkForWinner() {
  if(human.isWinner === true && computer.isWinner === false){
    return humanWin.innerText = "🎉You Win!🎉"
  }
  if(human.isWinner === false && computer.isWinner === true){
    return humanWin.innerText = "You Lose"
  }
  if(human.isWinner === false && computer.isWinner === false){
    return humanWin.innerText = "Draw!"
  }
}

//--------------- Misc Functions---------------//

function displayHidden(element){
  element.classList.add("hidden")
};

function removeHidden(element) {
  element.classList.remove("hidden")
};
