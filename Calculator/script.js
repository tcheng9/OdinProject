

let add = (a,b) => a + b;

let subtract = (a,b) => a - b;

let multiply = (a,b) => a * b;

let divide = (a,b) => a / b;

function operate(operator, a,b)
{
    //Should do some sortof string manipulation to turn operator into lower case
        if (operator === "+")
        {
            return add(a,b);
            
        }

        if (operator === "-")
        {
            return subtract(a,b);
        }

        if (operator === "*")
        {
            return multiply(a,b);
        }

        if (operator === "/")
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
/*
const buttons = document.querySelectorAll("input");

buttons.forEach(function(item){
    item.addEventListener("click", function(){
        stringHolder += item.value;
        display.textContent = stringHolder;
    })
})
*/
/*
function operations(val){
    //if val == addition, then do addition with some sort of string holder

    //if val == subtraction then do subtraction

    //if val == multiply,

    //if val == divide

    //

}
*/
///////////////////////////////////////////////////////////////////
//Task - Just make addition work

//Steps: 
//Step 1: Get first number string
//Step2: Recognize add operation
//Step 3: Get the second number string
//Step 4: return summed output to the display  when enter is hit
//OR return back to string so it can continued to be used



/*
PSEUDOCODE
while button.value != "="
    if button != (+, -, *, /)
        string1.append(button.value)
    else (button == (+, -, *, /))
        string2 += string1
        string = ""

    (HOW TO ADD STIRNG 1 AND STRING2 WHEN THERE ARE VALUES INSIDE AND DON'T)
    (HOW TO DETECT IF BOTH VALUES HAVE A VARIABLE)
        SOLUTION: "(&& STR1 != "")""

*/

//First attempt for calculator actually calculate

let str1 = "";
let str2 = "";
let sum = 0;
//NOTE: Do need to deal with type error as I processed but w/e

//PSEUDOCODE/CODE
/*
        while (item.value != "=")
        {
            if (item.value != "[+, -, *, /]")
            {
                str2 = str1 //str2 holds the value
                str1 = "" // so it can hold a new string value
                sum = str1 + str2 //BUT how to determine the 2 strings
            } elif (item.value === "0-9")
            {
                str1.append(string)
                
            }
        }
*/

//END PSEUDOCODE
//REFLECTIONS: 2 variables does not seem right
//Maybe processing a long string
/***************
 //SECOND ATTTEMPT ////////////////////////////
while str != "=":
        if str = +, -, /, +:
            do corresponding operation
    
// Maybe string split? => Provides an array 
        for i in array:
            if arr[i] "function":
                if arr[i[] == 'add" 
                    //Do addiotn
                
                returnSum = returnSum + arr[i+1]
            if arr[i] != function
                continue
///SECOND ATTEMPT END////////////////////////////
*///////////

//Actually implementing second attempt
const buttons = document.querySelectorAll("input");
let returnArr = [];
let returnSum = 0;
let operationArr = [];
let counter = 1; 
let summer = 0;
//Semi-pseudo code in one go
buttons.forEach(function(item){
    
    item.addEventListener("click", function(){
        stringHolder += item.value;
        display.textContent = stringHolder;
        
        //If item value === + - / * then add to a operationArr
        
        if (item.value === "+")
        {
            operationArr.push("+");
        }

        if (item.value === "-")
        {
            operationArr.push("-");
        }

        if (item.value === "*")
        {
            operationArr.push("*");
        }

        if (item.value === "/")
        {
            operationArr.push("/");
        }
        
        if (item.value === "=") 
        {
            
            
            let returnArr = stringHolder.split(/[+,\-,*,/,=]/);
            
            //Loop through array, if arr[i] = special symbol then??
                //Initial value = arr[i]
                //OFFSET THE START OF THE LOOP!!!! num1 = arr[0], if arr[1] = "+", then arr[1+1] = num 2, etc.
            
            
            //Convert num in the string to ints
            for (var i = 0; i < returnArr.length - 1; i++)
            {
                returnArr[i] = parseInt(returnArr[i]);
                
            }
            
           
            

            
            returnSum = returnArr[0];
            for (var i = 0; i < operationArr.length; i++)
            {
                console.log("OperationArr: " + operationArr);
                console.log("Return val: " + returnSum);
                console.log("Val Arr: " + returnArr);
                summer = operate(operationArr[i], returnSum, returnArr[counter]);
                
                counter +=1;
            }
            display.textContent = summer;
        }
        
        if (item.value === "C")
        {
            returnArr = [];
            stringHolder = "";
            display.textContent = "Ready for new values";
            operationArr = []
            returnSum = 0;
            counter = 1;
        }

        
        
})


})

