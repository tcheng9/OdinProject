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

