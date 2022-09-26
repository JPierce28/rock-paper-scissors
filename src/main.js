var human = new Player("Human", "😎");
var computer = new Player("Computer", "🤖");

// var newGame = new Game(human, computer);
// newGame.checkForWin(human)

//-------------------Query Selectors---------------//

var classicGame = document.querySelector(".classic-game");
var difficultGame = document.querySelector(".difficult-game");
var playerInfo = document.querySelector(".player-info");
var computerInfo = document.querySelector(".computer-info");
var playerAvatar = document.querySelector("avatar");
var homeScreen = document.querySelector(".home-view");
var classicScreen = document.querySelector(".classic-game-view");
var difficultScreen = document.querySelector(".difficult-game-view");
var selectRock = document.querySelector(".rock-image");
var selectPaper = document.querySelector(".paper-image");
var selectScissors = document.querySelector(".scissors-image");

//--------------------Event Listeners--------------//

window.addEventListener("load", updatePlayerCard);
classicGame.addEventListener("click", classicGameView);
difficultGame.addEventListener("click", difficultGameView)
selectRock.addEventListener("click", rockClassic);
selectPaper.addEventListener("click", paperClassic);
selectScissors.addEventListener("click", scissorsClassic);

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

function classicGameView(){
  displayHidden(homeScreen)
  removeHidden(classicScreen)
};

function difficultGameView() {
  displayHidden(homeScreen)
  removeHidden(difficultScreen)
}

function rockClassic() {
  var newGame = new Game (human, computer)
  human.selection = classicOptions[0];
  computer.selection = (classicOptions[randomSelection(classicOptions)])
  newGame.checkForWin(human.selection)
  updatePlayerCard()
};

function paperClassic() {
  var newGame = new Game (human, computer)
  human.selection = classicOptions[1];
  computer.selection = (classicOptions[randomSelection(classicOptions)])
  newGame.checkForWin(human.selection)
  updatePlayerCard()
};

function scissorsClassic() {
  var newGame = new Game (human, computer)
  human.selection = classicOptions[2];
  computer.selection = (classicOptions[randomSelection(classicOptions)])
  newGame.checkForWin(human.selection)
  updatePlayerCard()
};
//--------------- Misc Functions---------------//

function displayHidden(element){
  element.classList.add("hidden")
};

function removeHidden(element) {
  element.classList.remove("hidden")
};
