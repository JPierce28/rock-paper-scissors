var classicOptions = [{
  type: "Rock",
  image: "insert image here"},
  {type: "Paper",
  image: "insert image here"},
  {type: "Scissors",
  image: "insert image here"
}];

var player1 = new Player("Josh", "🥷🏿", classicOptions[randomSelection(classicOptions)])

var computer = new Player("Computer", "🤖",
classicOptions[randomSelection(classicOptions)])


class Game {
  constructor(player1, computer) {
    this.player1 = player1
    this.computer = computer
  }
  checkForWin(player1){
    if(this.player1.selection.type === "Rock"){
      rockVictory()
    }
    if(this.player1.selection.type === "Paper"){
      paperVictory()
    }
    if(this.player1.selection.type === "Scissors") {
      scissorsVictory()
    }
  }
};

function randomSelection(array){
  return Math.floor(Math.random() * array.length)
}

function rockVictory() {
  if(computer.selection.type === classicOptions[0].type){
    console.log('Draw');
    return 'Draw'
  }
  if(computer.selection.type === classicOptions[1].type){
    computer.wins+= 1
    return 'Loss'
  }
  if(computer.selection.type === classicOptions[2].type){
    player1.wins+= 1
    return '🎉 WIN! 🎉'
  }
}

function paperVictory() {
  if(computer.selection.type === classicOptions[1].type){
    console.log('Draw');
    return 'Draw'
  }
  if(computer.selection.type === classicOptions[2].type){
    computer.wins+= 1
    return 'Loss'
  }
  if(computer.selection.type === classicOptions[0].type){
    player1.wins+= 1
    return '🎉 WIN! 🎉'
  }
}

function scissorsVictory() {
  if(computer.selection.type === classicOptions[2].type){
    console.log('Draw');
    return 'Draw'
  }
  if(computer.selection.type === classicOptions[0].type){
    computer.wins+= 1
    return 'Loss'
  }
  if(computer.selection.type === classicOptions[1].type){
    player1.wins+= 1
    return '🎉 WIN! 🎉'
  }
}
var newGame = new Game(player1, computer);
newGame.checkForWin(player1)
console.log(player1);
console.log(computer);
