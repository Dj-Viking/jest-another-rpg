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

//to test just one file you can specify in the shell command
// npm test Potion
// npm test Player
// with no .js since nodes assumes its a .js file.
