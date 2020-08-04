class Character {
  constructor(name = '') {
    this.name = name
    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);

  }

  isAlive() {
    if (this.health === 0){ 
      return false;
    }
    return true;
  }

  getHealth() {
    return `${this.name}'s health is now ${this.health}!`;
  }

  getAttackValue() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
  }

  reduceHealth(health) {
    this.health -= health; 

    if (this.health < 0) {
      this.health = 0;
    }
  }

}

// function Character() {

// };

// Character.prototype.isAlive = function() {
//   if (this.health === 0) {
//     return false;
//   }
//   return true;
// };

// Character.prototype.getHealth = function() {
//   return `${this.name}'s health is now ${this.health}!`;
// };

// Character.prototype.getAttackValue = function() {
//   const min = this.strength - 5;
//   const max = this.strength + 5;

//   return Math.floor(Math.random() * (max - min) + min);
// };

// Character.prototype.reduceHealth = function(health) {
//   this.health -= health;

//   if (this.health === 0) {
//     this.health = 0;
//   }
// };

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

// This concept of inheritance is one of the main principles of 
//object-oriented programming and isn't unique to JavaScript. 
//Granted, JavaScript is often seen as an oddball, because the way 
//it implements some of these principles can feel quirky or hacky 
//compared to classical languages like Java and C++.


// Incidentally, these are the other three principles of OOP:

//     Encapsulation: Objects can privatize some of their data and only expose them through public methods like getName().

//     Abstraction: Object methods are easy to use without needing to understand their complex inner workings. For example, playGame() does what you'd expect it to without knowing about the 100 other methods it might call internally.

//     Polymorphism: Objects (and their methods) can change depending on the context. For example, the Car and Plane objects might inherit from Vehicle, but their move() methods are very different.
