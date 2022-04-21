

var ship = require('./script').ship;

//Example test for inputting ship positions
test('ship"s positions', () => {
  let posX = 0
  let posY = 0
 

  ship.addCoordinates(posX, posY);
  
  expect(ship.shipCoordinates).toEqual([[0,0]]);
  
})

//Function for calculating if it's been hit
test('calcualte hit function', () => {
  
  //ship.addPosition(0,0);
  ship.addCoordinates(1,1);
  ship.addCoordinates(2,2);
  
  expect(ship.shipCoordinates).toEqual([[0,0],[1,1],[2,2]])

  
  expect(ship.isHit(0,0)).toEqual('hit');
  //Test to check if the position that has been hit is registered as such
  expect(ship.isHit(0, 0)).toEqual('already hit');
})

//Function for checking if a ship has been sunk
test("is the ship sunk?", () => {
  // expect(ship.isSunk()).toEqual(true);
  expect(ship.isSunk()).toEqual('not sunk');
})



////////////////////////////////////////////////
var gameboard = require('./script').gameboard;
//Test for gameboard

//Test adding a ship to the board
test('Adding a new ship', () => {

});


//recceiving an attack from the user
//Note: Need to adjust with ships
//Question: what do I want to do when I get a hit?
test('Receiving an attack', () => {

});

//tracking all shots
test("Tracking all shots made", () => {

});


