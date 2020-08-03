

//this is so we can return valid values that 
// the player object can later use.


//can't use an arrow function here because "this" will not point
// to the correct place for this to work.
// this is a simplified anonymous constructor function
module.exports = function() {
  this.name = 'health';
  this.value = 20;
};