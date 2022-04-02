const text = document.getElementById("placeholderText");
// // Synchronous
// fetch('https://api.openweathermap.org/data/2.5/weather?zip=60616,us&appid=7ff5ff2a936666706f13087df3e0f094',
//     {mode:'cors'})
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(response){
//         let temp = response.main.temp    
//         return temp;
//     })
//     .then(function(response){
//         text.textContent = JSON.stringify(response);
//     })
//     .catch(function(err){
//         console.log(err);
//     });
// {"coord":{"lon":-87.6306,"lat":41.8426},
//"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"stations","main":{"temp":274.57,
// "feels_like":272.28,"temp_min":272.07,"temp_max":276.21,"pressure":1021,"humidity":76},"visibility":10000,"wind":{"speed":2.06,
// "deg":0},"clouds":{"all":40},"dt":1648874657,"sys":{"type":2,"id":2005153,"country":"US","sunrise":1648812788,"sunset":1648858516},
// "timezone":-18000,"id":0,"name":"Chicago","cod":200}


    
//Asynchronous

async function getAPI(zipcode){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=7ff5ff2a936666706f13087df3e0f094`); 
    let data = await response.json();
    //Turn the desired data into a string
    let kelvinTemp = JSON.stringify(data.main.temp);
    //Replace page text with this text
    let farenTemp = ((kelvinTemp-273.15)*1.8)+32;
    let returnTemp = roundTwoDigits(farenTemp);
    text.textContent = "Current temp is: " + returnTemp;

    //Turn the JSON string back into a JSON object
    let tempObj = JSON.parse(returnTemp); 
    return tempObj;
}   

//Round to 2 digis
function roundTwoDigits(x){
    return Number.parseFloat(x).toFixed(2);
}

// getAPI().then(temp => console.log("working"));

//When form submits, you get the zipcode value
function submitForm(event){
    event.preventDefault();
    // alert(event.target.elements.zipcode.value);
    let zipcode = String(event.target.elements.zipcode.value);
    
    getAPI(zipcode).then(tempObj => console.log("working"));


}
//NEXT STEPS: Refactor getAPI() code to take in a zipcode 
//when form is submitted


//Write a function that takes in JSON data -> Parse it somehow -> Return a JSON object with only data needed for the app
// async function apiCall(zipcode){
//     const weather = 
// }

//Old code that will get asynchronously call API using zipcode to get temp
/*

async function getAPI(){
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=60616,us&appid=7ff5ff2a936666706f13087df3e0f094'); 
    let data = await response.json();
    //Turn the desired data into a string
    let temp = JSON.stringify(data.main.temp);
    //Replace page text with this text
    text.textContent = temp;

    //Turn the JSON string back into a JSON object
    let tempObj = JSON.parse(temp); 
    return temp;
}   

getAPI().then(temp => console.log("working"));
*/

