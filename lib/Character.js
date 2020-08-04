// class Character {
//   constructor() {
//     //this.health = health;

//   }

//   isAlive() {
//     if (this.health === 0){ 
//       return false;
//     }
//     return true;
//   }

//   getHealth() {
//     return `${this.name}'s health is now ${this.health}!`;
//   }

//   getAttackValue() {
//     const min = this.strength - 5;
//     const max = this.strength + 5;

//     return Math.floor(Math.random() * (max - min) + min);
//   }

//   reduceHealth(health) {
//     this.health -= health; 

//     if (this.health < 0) {
//       this.health = 0;
//     }
//   }

// }

function Character() {

};

Character.prototype.isAlive = function() {
  if (this.health === 0) {
    return false;
  }
  return true;
};

Character.prototype.getHealth = function() {
  return `${this.name}'s health is now ${this.health}!`;
};

Character.prototype.getAttackValue = function() {
  const min = this.strength - 5;
  const max = this.strength + 5;

  return Math.floor(Math.random() * (max - min) + min);
};

Character.prototype.reduceHealth = function(health) {
  this.health -= health;

  if (this.health === 0) {
    this.health = 0;
  }
};

//checking if the constructor was made correctly
//console.log(new Character().getHealth());
module.exports = Character;




// const diane = {
//   name: 'Diane',
//   sayHello: function() {
//     console.log('hello');
//   }
// };

// const obj = Object.create(diane);

// // prints '{}' because this object has no direct properties
// console.log(obj);

// // still works because obj inherited this method from diane
// obj.sayHello();