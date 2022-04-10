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

//Code for turning letter into ascii values
//From Letter to Int
s.charCodeAt(0) - 97; //Get int at string index 0

//Converting from int to letter
String.fromCharCode(97 + n); //n is the amount to add to get the letter you want

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

  function convertString(string, increment){   
    increment = 5;
    let returnStr = ""; 
    for (let i = 0 ;i < string.length; i++) {
      let currentLetter = string[i];
      if (isUpperCase(string[i]) == true){
        let returnLtr = currentLetter.charCodeAt(0) - 65;
        let newLtr = String.fromCharCode(returnLtr + 65 + increment);
        returnStr += newLtr
  //       //Convert uppcase string to uppercase letter
  //       s.charCodeAt(0) - 97; //Get int at string index 0

  // //Converting from int to letter
  // String.fromCharCode(97 + n); //n is the amount to add to get the letter you want

        
      } else {
        //convert lowercase string to lowercase letter
        let returnLtr = currentLetter.charCodeAt(0) - 97;
        let newLtr = String.fromCharCode(returnLtr + 97 + increment);
        returnStr += newLtr
      }
    }

    return returnStr;
  } 
  return {
    convertString,
  }
})();

module.exports.caesarCipher = caesarCipher;


///////analyzeArray function
const analyzeArray = ((array) => {
  function avg(array){
    let avg = 0;
    let sum = 0;
    for (let i =0 ;i < array.length; i++){
      sum += array[i];
    }

    avg = sum / array.length;
    return avg;
  }

  function min(array){
    let min = array[0];
    for (let i =0 ;i < array.length; i++){
      if (min > array[i]){
        min = array[i];
      }
    }

    return min;
  }

  function max(array){
    let max = array[0];
    for (let i =0 ;i < array.length; i++){
      if (max < array[i]){
        max = array[i];
      }
    }

    return max;
  }

  function length(array){
    return array.length;
  }

  return {
    avg,
    min,
    max,
    length
  }
})();

module.exports.analyzeArray = analyzeArray;

//REFLECTION: Should have included edge cases for these things
//i.e catching strings when trying to find an avg