var human = new Player("Human", "😎");
var computer = new Player("Computer", "🤖");

//-------------------Query Selectors---------------//

var classicGame = document.querySelector(".classic-game");
var difficultGame = document.querySelector(".difficult-game");
var classicBoard = document.querySelector(".classic-game-board");
var classicScreen = document.querySelector(".classic-game-view");
var homeScreen = document.querySelector(".home-view");
var difficultScreen = document.querySelector(".difficult-game-view");
var humanWin = document.querySelector(".player-result");
var humanImage = document.querySelector(".human-image");
computerImage = document.querySelector(".computer-image");
var playerInfo = document.querySelector(".player-info");
var computerInfo = document.querySelector(".computer-info");
var playerAvatar = document.querySelector("avatar");
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
  displayHidden(difficultScreen)
  displayHidden(classicScreen)
  removeHidden(homeScreen)
  displayHidden(homeButton)
}

function classicGameView(){
  displayHidden(homeScreen)
  removeHidden(classicScreen)
  removeHidden(homeButton)
  displayHidden(classicBoard)
  removeHidden(paperImage)
  removeHidden(scissorsImage)
  removeHidden(rockImage)
};

function difficultGameView() {
  displayHidden(homeScreen)
  removeHidden(difficultScreen)
  removeHidden(homeButton)
}

function playClassicGame(event) {
  var newGame = new Game (human, computer)
  for (var i = 0; i < classicOptions.length; i++){
    if(event.target.id === classicOptions[i].name){
    human.selection = classicOptions[i]
    }
  }
  computer.selection = (classicOptions[randomSelection(classicOptions)])
  classicGameBoard()
  newGame.checkForWinClassic(human)
  checkForWinner()
  updatePlayerCard()
  setTimeout(() => classicGameView(), 2000)
};

function classicGameBoard() {
  displayHidden(classicScreen)
  removeHidden(classicBoard)
  displayHidden(homeButton)
  humanImage.innerHTML = human.selection.image
  computerImage.innerHTML = computer.selection.image
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
