

let add = (a,b) => a + b;

let subtract = (a,b) => a - b;

let multiply = (a,b) => a * b;

let divide = (a,b) => a / b;



function operate(operator, a,b)
{
    //Should do some sortof string manipulation to turn operator into lower case
        if (operator === add)
        {
            return add(a,b);
            
        }

        if (operator === subtract)
        {
            return subtract(a,b);
        }

        if (operator === multiply)
        {
            return multiply(a,b);
        }

        if (operator === divide)
        {
            return divide(a,b);
        }
}

var display = document.querySelector("#display");
//var buttons = document.querySelectorAll('button');

var stringHolder = ""

//Step 1: Getting buttons
/*
const buttons = document.querySelectorAll("input");

buttons.forEach(function(item){
    console.log(item);
    
})
*/
// REFLECTION: NOT SURE IF QUERY SELECTOR LETS YOU GET BUTTON VALUE, TRYING getElementsByTagName
//Step 1 - Attempt 2
/*
const buttons = document.getElementsByTagName("input");

forEach(function(e){
    console.log(e.value);
})
*/

//Step 2: Getting button values
//NOTE: all I changed was "item" -> item.value
/*
const buttons = document.querySelectorAll("input");

buttons.forEach(function(item){
    console.log(item.value);
    console.log(item);
})
*/
//Step 3: How to loop through buttons?
//ANSWER: Already done, you use .forEach

//Step 4: Loop through button for each value
//ANSWER: already done, use .forEach(item) => console.log(item.value);

//Step 5: Set a event that register only on clicks and updates the page
const buttons = document.querySelectorAll("input");

buttons.forEach(function(item){
    item.addEventListener("click", function(){
        stringHolder += item.value;
        display.textContent = stringHolder;
    })
})
