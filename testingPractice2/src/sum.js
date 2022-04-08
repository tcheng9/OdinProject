//ES5 import and export guide
//https://medium.com/@zachgavin/module-exports-and-loading-es5-to-es6-a33ac592989c 
function subtract(a, b) {
  return a-b;
}

module.exports.subtract = subtract;

function sum(a, b) {
    return a + b;
  }

module.exports.sum = sum;

function capitalize(string){
  let returnStr = string.charAt(0).toUpperCase();
  
 
  for (let i = 1; i < string.length; i++){
    returnStr += string[i]; 
  }

  return returnStr;
}

module.exports.capitalize = capitalize;

function reverseString(string){
  let returnStr = "";
  for (let i = string.length - 1; i >= 0; i--){
    returnStr += string[i];
  }
  return returnStr;
}

module.exports.reverseString = reverseString;

const calculator = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  return {
    add,
    subtract,
    multiply,
    divide,
  };
})();

module.exports.calculator = calculator;


//Function caesarCipher -> take a string and shift the characters
/*
Notes:
1. Get int value of a letter
2. Int value add 1 
3. Int value -> letter

Z -> A conversion: if this specific conversion, convert to A

QUESTION: How to account for int value of capitals and lowercase
for "z" and "Z", look for uppercase/lowercase "z' and hardset it

//Code for turning letter into ascii values
//From Letter to Int
s.charCodeAt(0) - 97; //Get int at string index 0

//Converting from int to letter
String.fromCharCode(97 + n); //n is the amount to add to get the letter you want


//Potential solution 1
1.Loop through string
2.Check if string if uppcase or lowercase
3a. If uppercase, do necessary conversions
3b. if lowercase, do necssary conversions
4. append to returnStr
5. Finish loop and return string


//Note: it's not just Z -> A, I need to loop around -> set a boundary, if value + increment > 25, set to 0 then add or something
Site for calculating caesarcipher: 
http://practicalcryptography.com/ciphers/caesar-cipher/


Key parts:
1. Check for upper/lowercase
2. Loop to convert to int AND converting back to string
3. Increment string as needed
*/

const caesarCipher = ((string, increment) => {
  let returnStr = "";
  function isUpperCase(ch){
    if (!isNaN(ch * 1)){
      return 'ch is numeric';
    } else {
      if (ch == ch.toUpperCase()){
        return true;
      } 

      if (ch == ch.toLowerCase()){
        return false;
      }
    }
  }

  function convertString(){   
    for (let i =0 ;i < string.length; i++) {
      if (isUpperCase(string[i]) == true){
        //Convert uppcase string to uppercase letter
      } else {
        //convert lowercase string to lowercase letter
      }
    }
  } 

  function incrementer(){

  }

})();

//Stopped here: How to increment letter in an automatic way?