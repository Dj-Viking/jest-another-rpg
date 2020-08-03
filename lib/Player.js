
//typeof Potion constuctor
const Potion = require('./Potion')

//typeof exports for testing can't declare Potion twice...
// declare this just for testing ONLY
//const Potion = require("./__mocks__/Potion");

class Player {
  // setting the parameter to default empty string 
  // if no parameter is provided
  constructor(name = '') {
    this.name = name

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    
    //since we mocked potions in player.test.js, calling new Potion()
    // here will use the mock version of the potion, and not call
    // the original constructor function.
    // mainly for testing purposes
    this.inventory = [new Potion('health'), new Potion()];
  }
}

module.exports = Player;