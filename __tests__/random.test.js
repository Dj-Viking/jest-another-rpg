const randomNumber = require('../lib/random.js');

test('Gets random number between 1 and 10', () => {
  expect(randomNumber()).toBeGreaterThanOrEqual(1);
  expect(randomNumber()).toBeLessThanOrEqual(10);
});



// const compareValues = require('../lib/random.js');

// test('checks if 10 is equal to 10', () => {
//   //use this line if exporting the anonymous function
//   //expect(checkIfEqual(10,10)).toBe(true);
  
//   //use this line if exporting the property method
//   expect(compareValues.checkIfEqual(10, 10)).toBe(true);
// });




//this will fail at first due to checkIfEqual not being a function
//so we must export this and also add the random.js file to lib dir

