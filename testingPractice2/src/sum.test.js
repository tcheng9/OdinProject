var sum = require('./sum').sum
var subtract = require('./sum').subtract
var capitalize = require('./sum').capitalize;
var reverseString = require('./sum').reverseString;

//Sum test
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

//Subtract test
test("subtract 2 - 1", () => {
  expect(subtract(2,1)).toBe(1);
});

//Capitlize test
test("capitalize the first letter of a string", () => {
  expect(capitalize("alphabet")).toBe("Alphabet");
})

//Reverse a string test

test("reverse a string", () => {
  expect(reverseString("Alphabet")).toBe("tebahplA");
})
////////////////////////////////////////////////////////////////////
//Write a calculator object that can handle add, subtract, divide, multiply
//FIRST: figure out how to write a object that will have these functions
//AND how to call it
var calculator = require('./sum').calculator;

//Calc- Sum
test("add value", () => {
  expect(calculator.add(1,2)).toBe(3);
})

//Calc - Subtract
test("subtract value", () => {
  expect(calculator.subtract(2,1)).toBe(1);
})

//Calc - Multiply
test("multiply value", () => {
  expect(calculator.multiply(2,1)).toBe(2);
})

//Calc Divide
test("divide value", () => {
  expect(calculator.divide(4, 2)).toBe(2);
})

////////////////////////////////////////////////////////////////////

//Caesarcipher 
var caesarCipher = require('./sum').caesarCipher;
test("caesarcipher", () => {
  expect(caesarCipher.convertString("abc", 5)).toBe("fgh")
})

//Caesar cipher for capital letters
test("caesarcipherCapitals", () => {
  expect(caesarCipher.convertString("ABC", 5)).toBe("FGH")
})


////////////////////////////////////////////////////////////////////
const analyzeArray = require('./sum').analyzeArray;

//analyzeArray - avg
test("average", () => {
  expect(analyzeArray.avg([1,2,3,4,5])).toBe(3);
});

//analyzeArray - min

test("min", () => {
  expect(analyzeArray.min([1,2,3,4,5])).toBe(1);
});

//analyzeArray - max
test("max", () => {
  expect(analyzeArray.max([5,6,7,8,9])).toBe(9);
})

//analyzeArray - length
test("length", () => {
  expect(analyzeArray.length([5,6,7,8,9])).toBe(5);
})
