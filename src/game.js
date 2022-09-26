var classicOptions = [{
  name: "Rock",
  image: `<img src="./assets/rock-image.jpg">`},
  {name: "Paper",
  image: `<img src="./assets/paper-image.jpg">`},
  {name: "Scissors",
  image: `<img src="./assets/scissors-image.jpg">`
 }]
var difficultOptions = [{
  name: "Rock",
  image: `img src="./assets/rock-image.jpg"`},
  {name: "Paper",
  image: `img src="./assets/paper-image.jpg"`},
  {name: "Scissors",
  image: `img src="./assets/scissors-image.jpg"`},
  {name: "Ninja",
  image: `src="./assets/ninja-image.jpg"`},
  {name: "Ghost",
  image: `src="./assets/ghost-image.jpg"`
 }]

class Game {
  constructor(human, computer) {
    this.human = human
    this.computer = computer
  }
  checkForWinClassic(human){
    if(this.human.selection.name === "Rock"){
      rockAssesment()
    }
    if(this.human.selection.name === "Paper"){
      paperAssesment()
    }
    if(this.human.selection.name === "Scissors") {
      scissorsAssesment()
    }
  }
};

function randomSelection(array){
  return Math.floor(Math.random() * array.length)
}

function rockAssesment() {
  if(computer.selection.name === classicOptions[0].name){
    //this is rock vs rock
    computer.isWinner = false
    human.isWinner = false
    return 'Draw'
  }
  if(computer.selection.name === classicOptions[1].name || computer.selection.name === difficultOptions[4].name){
    //this is rock vs paper
    displayHidden(scissorsImage)
    computer.wins+= 1
    human.isWinner = false
    computer.isWinner = true
    return 'Loss'
  }
  if(computer.selection.name === classicOptions[2].name){
    //this is rock vs scissors
    displayHidden(paperImage)
    human.wins+= 1
    human.isWinner = true
    computer.isWinner = false
    return '🎉 WIN! 🎉'
  }
}

function paperAssesment() {
  if(computer.selection.name === classicOptions[1].name){
    //this is paper vs paper
    computer.isWinner = false
    human.isWinner = false
    return 'Draw'
  }
  if(computer.selection.name === classicOptions[2].name){
    //this is paper vs scissors
    computer.wins+= 1
    human.isWinner = false
    computer.isWinner = true
    return 'Loss'
  }
  if(computer.selection.name === classicOptions[0].name){
    //this is paper vs rock
    human.wins+= 1
    human.isWinner = true
    computer.isWinner = false
    return '🎉 WIN! 🎉'
  }
}

function scissorsAssesment() {
  if(computer.selection.name === classicOptions[2].name){
    //this is scissors vs scissors
    computer.isWinner = false
    human.isWinner = false
    return 'Draw'
  }
  if(computer.selection.name === classicOptions[0].name){
    //this is scissors vs rock
    computer.wins+= 1
    human.isWinner = false
    computer.isWinner = true
    return 'Loss'
  }
  if(computer.selection.name === classicOptions[1].name){
    //this is scissors vs paper
    human.wins+= 1
    human.isWinner = true
    computer.isWinner = false
    return '🎉 WIN! 🎉'
  }
}
