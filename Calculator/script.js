

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
var buttons = document.querySelectorAll('button');

var stringholder = ""


const keys = Array.from(document.querySelectorAll('.key'));
//keys.forEach(key => key.addEventListener('click', adder));

console.log(keys);

//const btn_temp = document.getElementById('btn1').value;

function fun1()
{
    stringholder += btn_temp;
    display.textContent = stringholder ;

}

btn1.addEventListener('click', fun1);



const btn_temp2 = document.getElementById('btn2').value;

function fun2()
{
    stringholder += btn_temp2;
    display.textContent = stringholder ;

}

btn2.addEventListener('click', fun2);

/*Backup//function clickFunc(e)
{  
    
    stringholder += "1";
    display.textContent = stringholder ;
    //var key = document.querySelector(`div[data-key="${e.keyCode}"]`); 
    //console.log(key);
}
*/




/////////Dynamic attempt

const btns = document.querySelectorAll("btn")
for (let i = 0; i<btns.length; i++){
    btns[i].addEventListener("click", function(e){
        e.target.innerHTML;
        })};

/*
var  = document.getElementsByTagName("input");

for (var i = 0; i < inputs.length; i++)
{
    inputs[i].addEventListener("click", function(e){
        inputs[i].value;
    });
    
}
*/
/*

function getBtnValue(e)
{
    var val = e.value
    stringholder += val;
    display.textContent = stringholder;
}
*/

//https://typeofnan.dev/how-to-bind-event-listeners-on-dynamically-created-elements-in-javascript/

