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
var rockImage = document.querySelector(".rock-image");
var paperImage = document.querySelector(".paper-image");
var scissorsImage = document.querySelector(".scissors-image");


//--------------------Event Listeners--------------//

window.addEventListener("load", updatePlayerCard);
classicGame.addEventListener("click", classicGameView);
difficultGame.addEventListener("click", difficultGameView)
rockImage.addEventListener("click", playClassicGame);
paperImage.addEventListener("click", playClassicGame);
scissorsImage.addEventListener("click", playClassicGame);

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

function playClassicGame(event) {
  var newGame = new Game (human, computer)
  human.selection = event.target.id
  computer.selection = (classicOptions[randomSelection(classicOptions)].name)
  newGame.checkForWinClassic(human)
  updatePlayerCard()
};


//--------------- Misc Functions---------------//

function displayHidden(element){
  element.classList.add("hidden")
};

function removeHidden(element) {
  element.classList.remove("hidden")
};
