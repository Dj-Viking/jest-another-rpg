const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');


class Game {
  constructor() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    console.table(this.enemies);
    this.player;
  }
  initGame() {
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    this.currentEnemy = this.enemies[0];
    //console.log(this.enemies);
    console.table(this.enemies);
    inquirer.prompt(
      {
        type: 'text',
        name: 'name',
        message: 'Warrior, what is your name?'
      }
    )
    //destructure name from the prompt object
    // using the arrow function here to keep "this" referring back to
    // the game object and not a new scope within this function
    .then(({ name }) => {
      this.player = new Player(name);
      
      //test the object creation
      console.log(this.currentEnemy, this.player);

      //this.startNewBattle();
    });
  }
}



module.exports = Game;