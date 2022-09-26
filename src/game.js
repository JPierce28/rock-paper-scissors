var classicOptions = ["Rock", "Paper", "Scissors"]
//(classicOptions[randomSelection(classicOptions)])
class Game {
  constructor(human, computer) {
    this.human = human
    this.computer = computer
  }
  checkForWin(human){
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
  if(computer.selection === classicOptions[0]){
    return 'Draw'
  }
  if(computer.selection === classicOptions[1]){
    computer.wins+= 1
    return 'Loss'
  }
  if(computer.selection === classicOptions[2]){
    human.wins+= 1
    return '🎉 WIN! 🎉'
  }
}

function paperVictory() {
  if(computer.selection === classicOptions[1]){
    return 'Draw'
  }
  if(computer.selection === classicOptions[2]){
    computer.wins+= 1
    return 'Loss'
  }
  if(computer.selection === classicOptions[0]){
    human.wins+= 1
    return '🎉 WIN! 🎉'
  }
}

function scissorsVictory() {
  if(computer.selection === classicOptions[2]){
    return 'Draw'
  }
  if(computer.selection === classicOptions[0]){
    computer.wins+= 1
    return 'Loss'
  }
  if(computer.selection === classicOptions[1]){
    human.wins+= 1
    return '🎉 WIN! 🎉'
  }
}
