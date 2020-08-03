const Enemy = require('../lib/Enemy.js');

//potion is declared but not read here
// its read inside the constructor
// since we declared a potion object instance inside the
// enemy constructor function

//const Potion = require('../lib/Potion.js');
//const Potion = require('jest');


//mock potion for testing
//jest.mock('../lib/Potion.js');

test('Create an enemy object', () => {
  const enemy = new Enemy('goblin', 'sword');

  expect(enemy.name).toBe('goblin');
  expect(enemy.weapon).toBe('sword');
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.potion).toEqual(expect.any(Object));
  //console.log(enemy.potion);
});


