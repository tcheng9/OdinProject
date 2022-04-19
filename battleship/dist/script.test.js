

var ship = require('./script').ship;

//Example test for inputting ship positions
test('ship"s positions', () => {
  let posX = 0
  let posY = 0
 

  ship.addPosition(posX, posY);
  
  expect(ship.arrayPositions).toEqual([[0,0]]);
  
})

//Function for calculating if it's been hit
test('calcualte hit function', () => {
  
  //ship.addPosition(0,0);
  ship.addPosition(1,1);
  ship.addPosition(2,2);
  
  expect(ship.arrayPositions).toEqual([[0,0],[1,1],[2,2]])
  expect(ship.isHit(0, 0)).toBeFalsy();
})

//Function for checking if a ship has been sunk
test("is the ship sunk?", () => {
  // expect(ship.isSunk()).toEqual(true);
  expect(ship.isSunk()).toBeTruthy();
})



////////////////////////////////////////////////
//Test for gameboard

//