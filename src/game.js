var classicOptions = [{
  name: "Rock",
  image: `img src="./assets/rock-image.jpg"`},
  {name: "Paper",
  image: `img src="./assets/paper-image.jpg"`},
  {name: "Scissors",
  image: `img src="./assets/scissors-image.jpg"`
 }]
var difficultOptions = ["Rock", "Paper", "Scissors", "Ninja", "Ghost"]

class Game {
  constructor(human, computer) {
    this.human = human
    this.computer = computer
  }
  checkForWinClassic(human){
    if(this.human.selection === "Rock"){
      rockVictory()
    }
    if(this.human.selection === "Paper"){
      paperVictory()
    }
    if(this.human.selection === "Scissors") {
      scissorsVictory()
    }
  }
};

function randomSelection(array){
  return Math.floor(Math.random() * array.length)
}

function rockVictory() {
  if(computer.selection === classicOptions[0].name){
    computer.isWinner = false
    human.isWinner = false
    return 'Draw'
  }
  if(computer.selection === classicOptions[1].name){
    computer.wins+= 1
    human.isWinner = false
    computer.isWinner = true
    return 'Loss'
  }
  if(computer.selection === classicOptions[2].name){
    human.wins+= 1
    human.isWinner = true
    computer.isWinner = false
    return '🎉 WIN! 🎉'
  }
}

function paperVictory() {
  if(computer.selection === classicOptions[1].name){
    computer.isWinner = false
    human.isWinner = false
    return 'Draw'
  }
  if(computer.selection === classicOptions[2].name){
    computer.wins+= 1
    human.isWinner = false
    computer.isWinner = true
    return 'Loss'
  }
  if(computer.selection === classicOptions[0].name){
    human.wins+= 1
    human.isWinner = true
    computer.isWinner = false
    return '🎉 WIN! 🎉'
  }
}

function scissorsVictory() {
  if(computer.selection === classicOptions[2].name){
    computer.isWinner = false
    human.isWinner = false
    return 'Draw'
  }
  if(computer.selection === classicOptions[0].name){
    computer.wins+= 1
    human.isWinner = false
    computer.isWinner = true
    return 'Loss'
  }
  if(computer.selection === classicOptions[1].name){
    human.wins+= 1
    human.isWinner = true
    computer.isWinner = false
    return '🎉 WIN! 🎉'
  }
}
