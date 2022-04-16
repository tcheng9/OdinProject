const { exportAllDeclaration } = require('@babel/types')

var ship = require('./script').ship

//Example test
test('ship initial length', (length) => {
  let pos1 = (0,0)
  let pos2 = (0,1)
  let pos3 = (0,2)
  let pos4 = (0,3)

  let exampleShipFn = ship.length;
  expect(exampleShipFn).toEqual(4);
  
})

//