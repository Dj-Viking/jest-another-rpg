const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
// we can assume that node knows its a .js file by not placing it in the name here.

//this will help prevent in the event that the original Potion test
// fails and throws an error, jest will use the mock to make sure
// that the potion values are valid

// jest.mock will replace/mock the constructor's implementation with
// "faked" data
// so now our player test will not be depending on the potion test
// to pass and we can isolate testing for individual places.
jest.mock('../lib/Potion.js');

//check to see if we are creating the mock potion
//console.log(new Potion());


test('Creates a player object', () => {
  const player = new Player('Dave');

  expect(player.name).toBe('Dave');
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));

  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])  
  );
});

test("Gets player's stats as an object", () => {
  const player = new Player('Dave');

  expect(player.getStats()).toHaveProperty('potions');
  expect(player.getStats()).toHaveProperty('health');
  expect(player.getStats()).toHaveProperty('strength');
  expect(player.getStats()).toHaveProperty('agility');

});

test('Gets inventory from player or returns false', () => {
  const player = new Player('Dave');

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory = [];

  expect(player.getInventory()).toEqual(false);
});

test("Get player's health value", () => {
  const player = new Player('Dave');

  expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

test('checks if player is alive or not', () => {
  const player = new Player('Dave');

  expect(player.isAlive()).toBeTruthy();

  player.health = 0;

  expect(player.isAlive()).toBeFalsy();
});

test("subtracts from player's health", () => {
  const player = new Player('Dave');
  const oldHealth = player.health;

  player.reduceHealth(5);

  expect(player.health).toBe(oldHealth - 5);

  player.reduceHealth(99999);

  expect(player.health).toBe(0);
});

test("Gets player's attack value", () => {
  const player = new Player('Dave');
  player.strength = 10;

  expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

test('Adds a potion to the inventory', () => {
  const player = new Player('Dave');
  const oldCount = player.inventory.length;

  //still using mock potion here, only need to test if
  // player gets a portion to inventory or not
  player.addPotion(new Potion());

  expect(player.inventory.length).toBeGreaterThan(oldCount);
});

test('Uses a potion from inventory', () => {
  const player = new Player('Dave');
  player.inventory = [new Potion(), new Potion(), new Potion()];
  const oldCount = player.inventory.length;

  player.usePotion(1);

  expect(player.inventory.length).toBeLessThan(oldCount);
})

//to test just one file you can specify in the shell command
// npm test Potion
// npm test Player
// with no .js since nodes assumes its a .js file.

//creating new object instance every time we test to prevent unintended
// consequences and defeats the purpose of testing in isolation
