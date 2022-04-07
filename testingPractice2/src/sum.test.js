var sum = require('./sum').sum
var subtract = require('./sum').subtract

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});




test("subtract 2 - 1", () => {
  expect(subtract(2,1)).toBe(1);
});
